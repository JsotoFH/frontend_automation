import globalDisclaimers_pageObject from '../../../pageObjects/medicare/globalDisclaimers_pageObject'
import quote_pageObject from '../../../pageObjects/medicare/quote_pageObject'
import filterPlans_pageObject from '../../../pageObjects/medicare/filterPlans_pageObject'

const disclaimer = new globalDisclaimers_pageObject()
const quote = new quote_pageObject()
const filterPlans = new filterPlans_pageObject()

describe('Disclaimers in Quote page  with filters Suite',() => {
  
    beforeEach(function () {
        cy.fixture('medicare/disclaimers_testData1').then((disclaimerTD1) => {
            this.disclaimerTD1 = disclaimerTD1    
        })
    })

    it('Validate disclaimers in Quote page using filters for data1', function(){
        this.disclaimerTD1.forEach(carrier => {
            cy.log(carrier.carrier)
            cy.log(carrier.brand)
            var states = carrier.state
            states.forEach((state) =>{
                cy.getQuotePage(state.zipCode)
                quote.clickFilterPlansBtn()
                filterPlans.clickCompanyCkb(carrier.carrier)
                filterPlans.clickApplyFilterBtn()
                disclaimer.getDisclaimerCtn().should((elem) => {
                    expect(elem.text().replace(/\u00a0/g, ' ')).to.contains(state.disclaimer)
                    expect(elem.text()).to.contains(Cypress.env('generalDisclaimer'))
                }) 
            })
        })    
    })
})
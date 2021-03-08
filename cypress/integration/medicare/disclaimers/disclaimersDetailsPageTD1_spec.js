import globalDisclaimers_pageObject from '../../../pageObjects/medicare/globalDisclaimers_pageObject'
import quote_pageObject from '../../../pageObjects/medicare/quote_pageObject'
import filterPlans_pageObject from '../../../pageObjects/medicare/filterPlans_pageObject'
import planUnit_pageObject from '../../../pageObjects/medicare/planUnit_pageObject'
import planDetails_pageObject from '../../../pageObjects/medicare/planDetails_pageObject'

const disclaimer = new globalDisclaimers_pageObject()
const quote = new quote_pageObject()
const filterPlans = new filterPlans_pageObject()
const planUnit = new planUnit_pageObject()
const planDetails = new planDetails_pageObject()

describe('Disclaimers in Detail page Suite',() => {

    beforeEach(function () {
        cy.fixture('medicare/disclaimers_testData1').then((disclaimerTD1) => {
            this.disclaimerTD1 = disclaimerTD1
        })
    })

    it('Validate disclaimers in Plan Details page for data1', function(){
        this.disclaimerTD1.forEach(carrier => {
            cy.log(carrier.carrier)
            cy.log(carrier.brand)
            var states = carrier.state
            states.forEach((state) =>{
                cy.getQuotePage(state.zipCode)
                quote.clickFilterPlansBtn()
                filterPlans.clickCompanyCkb(carrier.carrier)
                filterPlans.clickApplyFilterBtn()
                planUnit.getSeePlanDetailsBtn().each((elem, i, list)=>{
                    planUnit.getCarrierLogoImg().eq(i).invoke('attr','src').then((imgSrc) => {
                        if(imgSrc.includes(carrier.key)){
                            planUnit.getSeePlanDetailsBtn().eq(i).click().wait(2000)
                            disclaimer.getDisclaimerCtn().should((elem) => {
                                expect(elem.text().replace(/\u00a0/g, ' ')).to.contains(state.disclaimer)
                                expect(elem.text()).to.contains(Cypress.env('generalDisclaimer'))
                            })
                            planDetails.clickBackBtn()
                        }
                    })
                })  
            })
        })    
    })
})
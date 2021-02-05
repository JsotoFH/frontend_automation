import census_pageObject from '../../pageObjects/medicare/census_pageObject'
import globalDisclaimers_pageObject from '../../pageObjects/medicare/globalDisclaimers_pageObject'
import quote_pageObject from '../../pageObjects/medicare/quote_pageObject'
import filterPlans_pageObject from '../../pageObjects/medicare/filterPlans_pageObject'
import planUnit_pageObject from '../../pageObjects/medicare/planUnit_pageObject'
import planDetails_pageObject from '../../pageObjects/medicare/planDetails_pageObject'

const census = new census_pageObject()
const disclaimer = new globalDisclaimers_pageObject()
const quote = new quote_pageObject()
const filterPlans = new filterPlans_pageObject()
const planUnit = new planUnit_pageObject()
const planDetails = new planDetails_pageObject()

describe('Global disclaimers Suite',() => {

    beforeEach(function () {
        cy.fixture('medicare/disclaimers_testData').then((disclaimerTD) => {
            this.disclaimerTD = disclaimerTD    
        })
    })

    it('Validate disclaimer in Census page', function(){
        cy.getCensusPage()
        disclaimer.getDisclaimerCtn().should((elem) => {
            expect(elem.text()).to.contains(Cypress.env('generalDisclaimer'));
        })

    }) 
    
    it('Validate disclaimers in Quote page', function () {
        this.disclaimerTD.forEach(carrier => {
            cy.log(carrier.carrier)
            var states = carrier.state
            states.forEach((state) =>{
                cy.getQuotePage(state.zipCode)
                disclaimer.getDisclaimerCtn().should((elem) => {
                    expect(elem.text().replace(/\u00a0/g, ' ')).to.contains(state.disclaimer)
                    expect(elem.text()).to.contains(Cypress.env('generalDisclaimer'))
                }) 
            })
        })    
    })

    it('Validate disclaimers in Quote page using filters', function(){
        this.disclaimerTD.forEach(carrier => {
            cy.log(carrier.carrier)
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

    it('Validate disclaimers in Plan Details page', function(){
        this.disclaimerTD.forEach(carrier => {
            cy.log(carrier.carrier)
            var states = carrier.state
            states.forEach((state) =>{
                cy.getQuotePage(state.zipCode)
                quote.clickFilterPlansBtn()
                filterPlans.clickCompanyCkb(carrier.carrier)
                filterPlans.clickApplyFilterBtn()
                planUnit.getSeePlanDetailsBtn().each((elem, i, list)=>{
                    planUnit.getSeePlanDetailsBtn().eq(i).click()
                    disclaimer.getDisclaimerCtn().should((elem) => {
                        expect(elem.text().replace(/\u00a0/g, ' ')).to.contains(state.disclaimer)
                        expect(elem.text()).to.contains(Cypress.env('generalDisclaimer'))
                    })
                    planDetails.clickBackBtn()
                })  
            })
        })    
    })

})
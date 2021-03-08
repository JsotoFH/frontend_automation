import globalDisclaimers_pageObject from '../../pageObjects/medicare/globalDisclaimers_pageObject'
import quote_pageObject from '../../pageObjects/medicare/quote_pageObject'
import filterPlans_pageObject from '../../pageObjects/medicare/filterPlans_pageObject'

const disclaimer = new globalDisclaimers_pageObject()
const quote = new quote_pageObject()
const filterPlans = new filterPlans_pageObject()

describe('Global disclaimers Suite',() => {

    beforeEach(function () {
        cy.fixture('medicare/disclaimers_testData1').then((disclaimerTD1) => {
            this.disclaimerTD1 = disclaimerTD1    
        })

        cy.fixture('medicare/disclaimers_testData2').then((disclaimerTD2) => {
            this.disclaimerTD2 = disclaimerTD2    
        })

        cy.fixture('medicare/disclaimers_testData3').then((disclaimerTD3) => {
            this.disclaimerTD3 = disclaimerTD3  
        })

        cy.fixture('medicare/disclaimers_testData4').then((disclaimerTD4) => {
            this.disclaimerTD4 = disclaimerTD4    
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

    it('Validate disclaimers in Quote page using filters for data2', function(){
        this.disclaimerTD2.forEach(carrier => {
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

    it('Validate disclaimers in Quote page using filters for data3', function(){
        this.disclaimerTD3.forEach(carrier => {
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

    it('Validate disclaimers in Quote page using filters for data4', function(){
        this.disclaimerTD4.forEach(carrier => {
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
import globalDisclaimers_pageObject from '../../pageObjects/medicare/globalDisclaimers_pageObject'

const disclaimer = new globalDisclaimers_pageObject()

describe('Global disclaimers Suite',() => {

    beforeEach(function () {
        cy.fixture('medicare/disclaimers_testData1').then((disclaimerTD1) => {
            this.disclaimerTD1 = disclaimerTD1   
        })

        cy.fixture('medicare/disclaimers_testData2').then((disclaimerTD2) => {
            this.disclaimerTD2 = disclaimerTD2   
        })
    })

    it('Validate disclaimers in Quote page for data1', function () {
        this.disclaimerTD1.forEach(carrier => {
            cy.log(carrier.carrier)
            cy.log(carrier.brand)
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

    it('Validate disclaimers in Quote page for data2', function () {
        this.disclaimerTD2.forEach(carrier => {
            cy.log(carrier.carrier)
            cy.log(carrier.brand)
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
})
import globalDisclaimers_pageObject from '../../pageObjects/medicare/globalDisclaimers_pageObject'

const disclaimer = new globalDisclaimers_pageObject()

describe('Global disclaimers Suite',() => {

    beforeEach(function () {
        cy.fixture('medicare/disclaimers_testData').then((disclaimerTD) => {
            this.disclaimerTD = disclaimerTD    
        })
        //cy.getQuotePage('35215')
    })
    
    it('Validate disclaimers in Quote page', function () {
        this.disclaimerTD.forEach(carrier => {
            cy.log(carrier.carrier)
            var states = carrier.state
            states.forEach((state) =>{
                cy.getQuotePage(state.zipCode)
                disclaimer.getDisclaimerCtn().should((elem) => {
                    expect(elem.text().replace(/\u00a0/g, ' ')).to.contains(state.disclaimer)
                }) 
            })
        })    
    })   
})
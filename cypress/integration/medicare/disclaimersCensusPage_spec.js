import globalDisclaimers_pageObject from '../../pageObjects/medicare/globalDisclaimers_pageObject'

const disclaimer = new globalDisclaimers_pageObject()

describe('Global disclaimers Suite',() => {

    it('Validate general disclaimer in Census page', function(){
        cy.getCensusPage()
        disclaimer.getDisclaimerCtn().should((elem) => {
            expect(elem.text()).to.contains(Cypress.env('generalDisclaimer'));
        })
    })
})
import quote_pageObject from '../../pageObjects/medicare/quote_pageObject'
import zipCodeModal_pageObject from '../../pageObjects/medicare/zipCodeModal_pageObject'


const quote = new quote_pageObject()
const zipCodeModal = new zipCodeModal_pageObject()

describe('Quote Page Suite',() => {

    beforeEach(() =>{
        cy.getQuotePage('35215')
        //cy.getQuotePage('42223')
    })

    it('Validate Zip Code Modal update', () => {
        quote.getZipCodeModalBtn().should('have.text','35215')
        quote.getTopLbl().contains('Medicare Advantage Plans')
        quote.clickZipCodeModalBtn()
        zipCodeModal.getsubtitleLbl().should('have.text','Update your location')
        zipCodeModal.setEditZipCodeTxt('32701')
        zipCodeModal.clickUpdateMyLocationBtn()
        quote.getZipCodeModalBtn().should('have.text', '32701')
        quote.getTopLbl().contains('Medicare Advantage Plans')
        quote.clickZipCodeModalBtn()
        zipCodeModal.getsubtitleLbl().should('have.text','Update your location')
        zipCodeModal.setEditZipCodeTxt('72501')
        zipCodeModal.clickUpdateMyLocationBtn()
        quote.getZipCodeModalBtn().should('have.text', '72501')
        quote.getTopLbl().contains('Medicare Advantage Plans')
    })
})
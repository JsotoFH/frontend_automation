import globalInfoBar_pageObject from '../../pageObjects/medicare/globalInfoBar_pageObject'
import pharmacy_pageObject from '../../pageObjects/medicare/pharmacy_pageObject'

const globalInfoBar = new globalInfoBar_pageObject()
const pharmacy = new pharmacy_pageObject()

describe('Pharmacy Page Suite',() => {
    beforeEach(() =>{
        cy.getPharmacyPage('35215')
        //cy.getPharmacyPage('42223')
    })
    it('Validate pharmacy can be added', () => {
        globalInfoBar.getSubtitleLbl().should('have.text', 'Pharmacy')
        globalInfoBar.clickAddBtn()
        globalInfoBar.getQuestionLbl().should('have.text', 'Where do you get your prescriptions?')
        pharmacy.clickPharmacyTypeRdb()
        pharmacy.clickMajorChainRdb('Walgreens')
        globalInfoBar.clickImFinishedBtn()
    })
})
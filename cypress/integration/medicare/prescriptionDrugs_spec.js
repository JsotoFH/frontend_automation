import globalInfoBar_pageObject from '../../pageObjects/medicare/globalInfoBar_pageObject'
import prescriptionDrugs_pageObject from '../../pageObjects/medicare/prescriptionDrugs_pageObject'

const globalInfoBar = new globalInfoBar_pageObject()
const prescriptionDrugs = new prescriptionDrugs_pageObject()

describe('Prescription Drugs Page Suite',() => {
    beforeEach(() =>{
        cy.getPrescriptionDrugsPage('35215')
        //cy.getPrescriptionDrugsPage('42223')
    })
    it('Validate prescription drug can be added', () => {
        globalInfoBar.getSubtitleLbl().should('have.text', 'Prescription Drugs')
        globalInfoBar.clickAddBtn()
        globalInfoBar.getQuestionLbl().should('have.text', 'What prescription drugs do you use?')
        prescriptionDrugs.setPrescriptionLettersTxt('Ala Scalp')
        prescriptionDrugs.clickPrescriptionDrugsBtn('Ala Scalp')
        prescriptionDrugs.getSubtitleLbl().should('have.text', 'Ala Scalp')
        prescriptionDrugs.setDoseTypeBtn('Lotion')
        prescriptionDrugs.setDoseStrengthBtn('2%')
        prescriptionDrugs.setPrescriptionPackagedBtn('29.6 ML Bottle')
        prescriptionDrugs.setRefillFrequencyBtn('Every Month')
        prescriptionDrugs.clickAddbutton()
        globalInfoBar.clickImFinishedBtn()
    })
})
import globalInfoBar_pageObject from '../../pageObjects/medicare/globalInfoBar_pageObject'
import healthcareVisits_pageObject from '../../pageObjects/medicare/healthcareVisits_pageObject'

const globalInfoBar = new globalInfoBar_pageObject()
const healthcareVisits = new healthcareVisits_pageObject()

describe('Healthcare Visit Page Suite',() => {
    beforeEach(() =>{
        cy.getHealthcareVisitsPage('35215')
        //cy.getHealthcareVisitsPage('42223')
    })
    it('Validate healthcare visit can be added', () => {
        globalInfoBar.getSubtitleLbl().should('have.text', 'Healthcare Visits')
        globalInfoBar.clickAddBtn()
        globalInfoBar.getQuestionLbl().should('have.text', 'How often do you see a doctor or receive medical care?')
        healthcareVisits.clickVisitsOptionRdb('Average')
        globalInfoBar.clickImFinishedBtn()
    })
})
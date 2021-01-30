//import quote_pageObject from '../../pageObjects/medicare/quote_pageObject'
//import yourCurrentPlan_pageObject from '../../pageObjects/medicare/yourCurrentPlan_pageObject'
import globalInfoBar_pageObject from '../../pageObjects/medicare/globalInfoBar_pageObject'
import healthcareVisits_pageObject from '../../pageObjects/medicare/healthcareVisits_pageObject'

//const quote = new quote_pageObject()
//const currentPlan = new yourCurrentPlan_pageObject()
const globalInfoBar = new globalInfoBar_pageObject()
const healthcareVisits = new healthcareVisits_pageObject()

describe('Your Current Plan Page Suite',() => {
    beforeEach(() =>{
        cy.getHealthcareVisitsPage('35215')
        //cy.getHealthcareVisitsPage('42223')
    })
    it('Validate Replace Your Current Medicare Advantage Plan', () => {
        healthcareVisits.getHealthcareVisitsSubtitleLbl().should('have.text', 'Healthcare Visits')
        globalInfoBar.clickAddBtn()
        healthcareVisits.getHealthcareVisitsQuestionLbl().should('have.text', 'How often do you see a doctor or receive medical care?')
        healthcareVisits.clickVisitsOptionRdb('Average')
        globalInfoBar.clickImFinishedBtn()
    })
})
import quote_pageObject from '../../pageObjects/medicare/quote_pageObject'
import yourCurrentPlan_pageObject from '../../pageObjects/medicare/yourCurrentPlan_pageObject'
import globalInfoBar_pageObject from '../../pageObjects/medicare/globalInfoBar_pageObject'
import healthcareVisits_pageObject from '../../pageObjects/medicare/healthcareVisits_pageObject'

const quote = new quote_pageObject()
const currentPlan = new yourCurrentPlan_pageObject()
const globalInfoBar = new globalInfoBar_pageObject()
const healthcareVisits = new healthcareVisits_pageObject()

describe('Your Current Plan Page Suite',() => {

    beforeEach(() =>{
        cy.getQuotePage('35215')
        //cy.getQuotePage('42223')
    })

    it('Validate Replace Your Current Medicare Advantage Plan', () => {
        quote.clickYourCurrentPlanBtn()
        globalInfoBar.getSubtitleLbl().should('have.text', 'Compare your overall likely costs, not just premiums ')
        globalInfoBar.clickAddBtn()
        globalInfoBar.getQuestionLbl().should('have.text', 'What kind of coverage are you looking for?')
        currentPlan.clickCoverageOptionsRdb('To replace a current Medicare Advantage plan')
        currentPlan.setStartTypingBtn('Aetna Inc.')
        currentPlan.clickCurrentPlan('Aetna Medicare Freedom Plan (PPO)')
        globalInfoBar.clickImFinishedBtn()
        globalInfoBar.getSubtitleLbl().should('have.text', 'Healthcare Visits')
    })
})
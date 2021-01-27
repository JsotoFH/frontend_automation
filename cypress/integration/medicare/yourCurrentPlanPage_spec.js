import census_pageObject from '../../pageObjects/medicare/census_pageObject'
import quote_pageObject from '../../pageObjects/medicare/quote_pageObject'
import yourCurrentPlan_pageObject from '../../pageObjects/medicare/yourCurrentPlan_pageObject'

const census = new census_pageObject()
const quote = new quote_pageObject()
const currentPlan = new yourCurrentPlan_pageObject()

describe('Your Current Plan Page Suite',() => {

    beforeEach(() =>{
        cy.getQuotePage('35215')
        //cy.getQuotePage('42223')
    })

    it('Validate Replace Your Current Medicare Advantage Plan', () => {
        quote.clickYourCurrentPlanBtn()
        currentPlan.getSubtitleYourCurrentPlanSection().should('have.text', 'Compare your overall likely costs, not just premiums ')
        currentPlan.clickAddYourCurrentPlanBtn()
        currentPlan.getYourCurrentPlanQuestionLbl().should('have.text', 'What kind of coverage are you looking for?')
        currentPlan.clickCoverageOptionsRdb('To replace a current Medicare Advantage plan')
        currentPlan.setStartTypingBtn('Aetna Inc.')
        currentPlan.clickCurrentPlan('Aetna Medicare Freedom Plan (PPO)')
        currentPlan.clickImFinishedBtn()
    })
})
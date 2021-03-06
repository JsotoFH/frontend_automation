import quote_pageObject from '../../pageObjects/medicare/quote_pageObject'
import updateYourLocation_pageObject from '../../pageObjects/medicare/zipCodeModal_pageObject'
import yourCurrentPlan_pageObject from '../../pageObjects/medicare/yourCurrentPlan_pageObject'
import filterPlans_pageObject from '../../pageObjects/medicare/filterPlans_pageObject'
import help_pageObject from '../../pageObjects/medicare/help_pageObject'
import globalInfoBar_pageObject from '../../pageObjects/medicare/globalInfoBar_pageObject'

const quote = new quote_pageObject()
const filterPlans = new filterPlans_pageObject()
const updateYourLocation = new updateYourLocation_pageObject()
const yourCurrentPlan = new yourCurrentPlan_pageObject()
const help = new help_pageObject()
const globalInfoBar = new globalInfoBar_pageObject()

describe('Quote Page Suite',() => {

    beforeEach(() =>{
        //cy.getQuotePage('35215')
        cy.getQuotePage('42223')
    })

    it('Validate that Quote page is loaded',() => {
        quote.getPageTitle().should('eq', 'Medicare Plan Finder | medicare.healthinsurance.com')
        quote.getPageUrl().should('contains','https://staging.medicare.healthinsurance.com/quote')
        quote.getTopLbl().contains('Medicare Advantage Plans')
    })

    it('Validate filter plans',() => {
        quote.clickFilterPlansBtn()
        filterPlans.getSubtitleInFilterPlansSection().should('have.text', 'Filter plans by:')
        filterPlans.clickCompanyCkb()
        filterPlans.clickApplyFilterBtn()
    })

    it('Validate Zip Code Modal is present', () => {
        quote.getZipCodeModalBtn().should('have.text','42223')
    })
    
    it('Validate Your Current Plan', () => {
        quote.clickYourCurrentPlanBtn()
        globalInfoBar.getSubtitleLbl().should('have.text', 'Compare your overall likely costs, not just premiums ')
        globalInfoBar.clickAddBtn()
        globalInfoBar.getQuestionLbl().should('have.text', 'What kind of coverage are you looking for?')
        quote.clickViewAvailablePlansLnk()
        quote.getTopLbl().contains('Medicare Advantage Plans')
    })

    it('Validate help button', () =>{
        quote.clickHelpBtn()
        help.getNeedHelpSubtitleLbl().should('have.text','Need Help?')
        help.getRequestACallSubtitleLbl().should('have.text','Request a Call')
        help.clickCloseHelpWindowsBtn()
        quote.getTopLbl().contains('Medicare Advantage Plans')
    })
})
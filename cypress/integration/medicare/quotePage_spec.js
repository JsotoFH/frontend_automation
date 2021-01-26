import census_pageObject from '../../pageObjects/medicare/census_pageObject'
import quote_pageObject from '../../pageObjects/medicare/quote_pageObject'
import updateYourLocation_pageObject from '../../pageObjects/medicare/updateYourLocation_pageObject'
import yourCurrentPlan_pageObject from '../../pageObjects/medicare/yourCurrentPlan_pageObject'
import filterPlans_pageObject from '../../pageObjects/medicare/filterPlans_pageObject'
import help_pageObject from '../../pageObjects/medicare/help_pageObject'

const census = new census_pageObject()
const quote = new quote_pageObject()
const filterPlans = new filterPlans_pageObject()
const updateYourLocation = new updateYourLocation_pageObject()
const yourCurrentPlan = new yourCurrentPlan_pageObject()
const help = new help_pageObject()

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

    it('Validate Update your location', () => {
        quote.clickUpdateYourLocationBtn()
        updateYourLocation.getUpdateYourLocationSubtitleLbl().should('have.text','Update your location')
        updateYourLocation.setEditZipCodeTxt('35215')
        updateYourLocation.clickUpdateMyLocationBtn()
        quote.getUpdateYourLocationBtn().should('have.text', '35215')
        quote.getTopLbl().contains('Medicare Advantage Plans')
    })
    
    it('Validate Your Current Plan', () => {
        quote.clickYourCurrentPlanBtn()
        yourCurrentPlan.getSubtitleYourCurrentPlanSection().should('have.text', 'Compare your overall likely costs, not just premiums ')
        yourCurrentPlan.clickAddYourCurrentPlanBtn()
        yourCurrentPlan.getYourCurrentPlanQuestionLbl().should('have.text', 'What kind of coverage are you looking for?')
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
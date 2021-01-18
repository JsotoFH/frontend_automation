import censusPageObject from '../../pageObjects/medicare/censusPageObject'
import quotePageObject from '../../pageObjects/medicare/quotePageObject'
import updateYourLocationPageObject from '../../pageObjects/medicare/updateYourLocationPageObject'
import yourCurrentPlanPageObject from '../../pageObjects/medicare/yourCurrentPlanPageObject'
import filterPlansPageObject from '../../pageObjects/medicare/filterPlansPageObject'
import helpPageObject from '../../pageObjects/medicare/helpPageObject'

const censusPageObj = new censusPageObject()
const quotePageObj = new quotePageObject()
const filterPlansPageObj = new filterPlansPageObject()
const updateYourLocationPageObj = new updateYourLocationPageObject()
const yourCurrentPlanPageObj = new yourCurrentPlanPageObject()
const helpPageObj = new helpPageObject()

describe('Quote Page Suite',() => {

    beforeEach(() =>{
        censusPageObj.getPage()
        censusPageObj.setZipCodeTextField('42223')
        censusPageObj.clickSeeMedicarePlansButton()
    })

    it('Validate that Quote page is loaded',() => {
        quotePageObj.getPageTitle().should('eq', 'Medicare Plan Finder | medicare.healthinsurance.com')
        quotePageObj.getPageUrl().should('contains','https://staging.medicare.healthinsurance.com/quote')
        quotePageObj.getTextInTheTop().should('have.text', '21\u00a0Medicare Advantage Plans')
    })

    it('Validate filter plans',() => {
        quotePageObj.clickFilterPlansButton()
        filterPlansPageObj.getSubtitleInFilterPlansSection().should('have.text', 'Filter plans by:')
        filterPlansPageObj.clickCompanyCheckbox()
        filterPlansPageObj.clickApplyFilterButton()
    })

    it('Validate Update your location', () => {
        quotePageObj.clickUpdateYourLocationButton()
        updateYourLocationPageObj.getUpdateYourLocationSubtitleText().should('have.text','Update your location')
        updateYourLocationPageObj.setEditZipCodeTextBox('35215')
        updateYourLocationPageObj.clickUpdateMyLocationButton()
        quotePageObj.getUpdateYourLocationButton().should('have.text', '35215')
        quotePageObj.getTextInTheTop().should('have.text', '17\u00a0Medicare Advantage Plans')
    })
    
    it('Validate Your Current Plan', () => {
        quotePageObj.clickYourCurrentPlanButton()
        yourCurrentPlanPageObj.getSubtitleYourCurrentPlanSection().should('have.text', 'Compare your overall likely costs, not just premiums ')
        yourCurrentPlanPageObj.clickAddYourCurrentPlan()
        yourCurrentPlanPageObj.getYourCurrentPlanQuestionText().should('have.text', 'What kind of coverage are you looking for?')
        quotePageObj.clickViewAvailablePlansLink()
        quotePageObj.getTextInTheTop().should('have.text', '21\u00a0Medicare Advantage Plans')
    })

    it('Validate help button', () =>{
        quotePageObj.clickHelpButton()
        helpPageObj.getNeedHelpSubtitleLabel().should('have.text','Need Help?')
        helpPageObj.getRequestACallSubtitleLabel().should('have.text','Request a Call')
        helpPageObj.clickCloseHelpWindowsButton()
        quotePageObj.getTextInTheTop().should('have.text', '21\u00a0Medicare Advantage Plans')
    })
})
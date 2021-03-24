import planUnit_pageObject from '../../pageObjects/medicare/planUnit_pageObject'
import globalInfoBar_pageObject from '../../pageObjects/medicare/globalInfoBar_pageObject'
import healthcareVisits_pageObject from '../../pageObjects/medicare/healthcareVisits_pageObject'
import prescriptionDrugs_pageObject from '../../pageObjects/medicare/prescriptionDrugs_pageObject'
import pharmacy_pageObject from '../../pageObjects/medicare/pharmacy_pageObject'
import estimatedAnnualCosts_pageObject from '../../pageObjects/medicare/estimatedAnnualCosts_pageObject'

const planUnit = new planUnit_pageObject()
const globalInfoBar = new globalInfoBar_pageObject()
const healthcareVisits = new healthcareVisits_pageObject()
const prescriptionDrugs = new prescriptionDrugs_pageObject()
const pharmacy = new pharmacy_pageObject()
const eAC = new estimatedAnnualCosts_pageObject()

describe('Plan Unit Suite', () => {  
    beforeEach(() =>{
        cy.getQuotePage('35215')
    })
        
    it('Validate elements in Plan Unit', () => {
        planUnit.getCarrierLogoImg().eq(0).should('exist')
        planUnit.getMonthlyPremiumCostLbl().eq(0).should('have.text', '$0.00')
        planUnit.getMonthlyPremiumLbl().eq(0).should('have.text', 'Monthly Premium')
        planUnit.getEnrollBtn().eq(0).should('have.text', 'Enroll')
        planUnit.getEstimatedAnnualCostsLbl().eq(0).should('have.text', 'Estimated Annual Costs')
        planUnit.getHowMuchYouCouldSpendLbl().eq(0).should('have.text', 'Want to see how much you could spend in a year?')
        planUnit.getEnterYourInfoBtn().eq(0).should('have.text', 'Enter Your Info')

        planUnit.getPlanNameLbl().eq(0).should('have.text', 'Aetna Medicare Eagle Plan (PPO)')
        planUnit.getPlanYearLbl().eq(0).contains('Plan Year: 2021')
        planUnit.getIdLbl().eq(0).contains('ID:')
        planUnit.getFavoriteImg().eq(0).should('exist')
        planUnit.getFavoriteLbl().eq(0).should('have.text', 'Favorite')
        planUnit.getCompareCkb().eq(0).should('exist')
        planUnit.getCompareLbl().eq(0).should('have.text', 'Compare')

        planUnit.getMedicalBenefitsImg().eq(0).should('exist')
        planUnit.getMedicalBenefitsLbl().eq(0).should('have.text', 'Medical Benefits')
        planUnit.getPrimaryCareSpecialistLbl().eq(0).should('have.text', 'primary care / specialist')
        planUnit.getInNetworkLbl().eq(1).should('have.text', 'in-network')



        planUnit.getRxBenefitsImg().eq(1).should('exist')
        planUnit.getRxBenefitsLbl().eq(1).should('have.text', 'RX Benefits')
        planUnit.getUnavailableLbl().eq(0).should('have.text', 'This plan does not include RX benefits.')

        planUnit.getFeaturesLbl().eq(0).should('have.text', 'FEATURES')
        planUnit.getRxImg().eq(0).should('exist')
        planUnit.getRxLbl().eq(0).should('have.text', 'Rx')
        planUnit.getDentalImg().eq(1).should('exist')
        planUnit.getDentalLbl().eq(1).should('have.text', 'Dental')
        planUnit.getVisionImg().eq(2).should('exist')
        planUnit.getVisionLbl().eq(2).should('have.text', 'Vision')
        planUnit.getHearingImg().eq(3).should('exist')
        planUnit.getHearingLbl().eq(3).should('have.text', 'Hearing')
    })

    it('Validate that overlays display', () => {
        planUnit.getEstimatedAnnualCostsLnk().eq(0).click()
        planUnit.getGlobalOverlay().should('have.text', "With some plans, you could pay less in monthly premiums, but end up paying more each year in co-pays for doctor’s visits or prescription refills. Calculate your Estimated Annual Costs by answering some simple questions.")
        planUnit.getEstimatedAnnualCostsLnk().eq(0).click()
        planUnit.getMedicalDeductableLnk().eq(0).click()
        planUnit.getGlobalOverlay().should('have.text', "The amount you must pay for health care or prescriptions before Original Medicare, your prescription drug plan, or your other insurance begins to pay.")
        planUnit.getMedicalDeductableLnk().eq(0).click()
        planUnit.getCopayLnk().eq(1).click()
        planUnit.getGlobalOverlay().should('have.text', "An amount you may be required to pay as your share of the cost for a medical service or supply, like a doctor's visit, hospital outpatient visit, or prescription drug. A copayment is usually a set amount, rather than a percentage. For example, you might pay $10 or $20 for a doctor's visit or prescription drug.")
        planUnit.getCopayLnk().eq(1).click()
        planUnit.getOutOfPocketMaxLnk().eq(2).click()
        planUnit.getGlobalOverlay().should('have.text', "Health or prescription drug costs that you must pay on your own because they aren't covered by Medicare or other insurance.")
        planUnit.getOutOfPocketMaxLnk().eq(2).click()
        planUnit.getRxDeductibleLnk().eq(0).click()
        planUnit.getGlobalOverlay().should('have.text', "The amount you must pay for health care or prescriptions before Original Medicare, your prescription drug plan, or your other insurance begins to pay.")
        planUnit.getRxDeductibleLnk().eq(0).click()
        planUnit.getRxCoveredLnk().eq(1).click()
        planUnit.getGlobalOverlay().should('have.text', "Your prescription drugs that are covered by this plan.")
        planUnit.getRxCoveredLnk().eq(1).click()
    })

    it('Validate that EAC page is loaded', () => {
        planUnit.getEnterYourInfoBtn().eq(1).click().wait(2000)
        globalInfoBar.clickSkipBtn()
        globalInfoBar.getSubtitleLbl().should('have.text', 'Healthcare Visits')
        globalInfoBar.clickAddBtn()
        globalInfoBar.getQuestionLbl().should('have.text', 'How often do you see a doctor or receive medical care?')
        healthcareVisits.clickVisitsOptionRdb('Average')
        globalInfoBar.clickImFinishedBtn()

        globalInfoBar.getSubtitleLbl().should('have.text', 'Prescription Drugs')
        globalInfoBar.clickAddBtn()
        globalInfoBar.getQuestionLbl().should('have.text', 'What prescription drugs do you use?')
        prescriptionDrugs.setPrescriptionLettersTxt('Amoxapine')
        prescriptionDrugs.clickPrescriptionDrugsBtn('Amoxapine')
        prescriptionDrugs.getSubtitleLbl().should('have.text', 'Amoxapine')
        prescriptionDrugs.setDoseTypeBtn('TAB')
        prescriptionDrugs.setDoseStrengthBtn('25MG')
        prescriptionDrugs.setRefillFrequencyBtn('Every Month')
        prescriptionDrugs.clickAddbutton()
        
        prescriptionDrugs.setPrescriptionLettersTxt('Ala Scalp')
        prescriptionDrugs.clickPrescriptionDrugsBtn('Ala Scalp')
        prescriptionDrugs.getSubtitleLbl().should('have.text', 'Ala Scalp')
        prescriptionDrugs.setDoseTypeBtn('Lotion')
        prescriptionDrugs.setDoseStrengthBtn('2%')
        prescriptionDrugs.setPrescriptionPackagedBtn('29.6 ML Bottle')
        prescriptionDrugs.setRefillFrequencyBtn('Every Month')
        prescriptionDrugs.clickAddbutton()
        globalInfoBar.clickImFinishedBtn()

        globalInfoBar.getSubtitleLbl().should('have.text', 'Pharmacy')
        globalInfoBar.clickAddBtn()
        globalInfoBar.getQuestionLbl().should('have.text', 'Where do you get your prescriptions?')
        pharmacy.clickPharmacyTypeRdb()
        pharmacy.clickMajorChainRdb('Walgreens')
        globalInfoBar.clickImFinishedBtn()

        planUnit.getEstimatedAnnualCostsLnk().eq(0).click()
        eAC.getTitleLbl().should('have.text', 'Estimated Annual Costs')
        eAC.getPremiumLbl().should('have.text', '12 Months of Premium')
        eAC.getMedicalLbl().should('have.text', 'Medical')
        eAC.getRXLbl().should('have.text', 'Rx')
        eAC.getEACLbl().contains('Estimated Annual Total')
        eAC.getCloseBtn().click()

    })
})
export default class planUnit_pageObject{

    carrierLogoImg = 'img.awbtr0-2.fwEFwx'
    monthlyPremiumCostLbl= 'p.bzlmWy'
    monthlyPremiumLbl = 'p.kXYimm'
    enrollBtn = 'button.sc-9fnp2k-0.erhkA'
    estimatedAnnualCostsLbl = 'p.awbtr0-7.feHAjv>a.sc-855xg4-0.hBKrpt'
    estimatedAnnualCostsLnk = 'div.awbtr0-6.fYOtFM>p>a'
    howMuchYouCouldSpendLbl = 'p.awbtr0-10.cgNUKG'
    enterYourInfoBtn = 'button.awbtr0-11.ktfKDE'
  
    globalOverlay = 'div.tooltip-inner>p'
    
    planNameLbl = 'h3.sc-1f7autd-11.fsrcLi'
    planYearLbl = 'p.sc-1f7autd-14.goKcnW'
    idLbl = 'p.sc-1f7autd-13.jrONuO'
    favoriteImg = 'div.sc-1f7autd-1.jwUfrJ>label>svg'
    favoriteLbl = 'div.sc-1f7autd-1.jwUfrJ>label'
    compareCkb = 'div.sc-1f7autd-1.jwUfrJ>label>div>input'
    compareLbl = 'div.sc-1f7autd-1.jwUfrJ>label>label'

    medicalBenefitsImg = 'div.sc-1f7autd-20.gvZbzf>svg'
    medicalBenefitsLbl = 'div.sc-1f7autd-20.gvZbzf>span'
    medicalDeductibleLnk = 'section.sc-1f7autd-17.gdrFSU>div>a'
    copayLnk = 'section.sc-1f7autd-17.gdrFSU>div>a>span'
    primaryCareSpecialistLbl = 'span.sc-1f7autd-27.bugXXa>span'
    outOfPocketMaxLnk ='section.sc-1f7autd-17.gdrFSU>div>a>span'
    inNetworkLbl = 'span.sc-1f7autd-27.bugXXa'

    rxBenefitsImg = 'div.sc-1f7autd-20.gvZbzf>svg'
    rxBenefitsLbl = 'div.sc-1f7autd-20.gvZbzf>span'
    unavailableLbl = 'p.sc-1f7autd-37.iqyzAb'
    rxDeductibleLnk = 'div.sc-jTzLTM.sc-1f7autd-23.ifHzmk.col-lg-5>section>div>a'
    rxCoveredLnk = 'div.sc-jTzLTM.sc-1f7autd-23.ifHzmk.col-lg-5>section>div>a'
    seeCoveredDrugsLnk = 'a.sc-1f7autd-30.hiRXGR'


    featuresLbl = 'div.sc-fjdhpX.sc-1f7autd-52.fqNoFt.collapse>div.sc-1f7autd-39.sc-1f7autd-44.EBjjL'
    rxImg = 'div.sc-fjdhpX.sc-1f7autd-52.fqNoFt.collapse>div>svg'
    rxLbl = 'div.sc-fjdhpX.sc-1f7autd-52.fqNoFt.collapse>div>span'
    dentalImg = 'div.sc-fjdhpX.sc-1f7autd-52.fqNoFt.collapse>div>svg'
    dentalLbl = 'div.sc-fjdhpX.sc-1f7autd-52.fqNoFt.collapse>div>span'
    visionImg = 'div.sc-fjdhpX.sc-1f7autd-52.fqNoFt.collapse>div>svg'
    visionLbl = 'div.sc-fjdhpX.sc-1f7autd-52.fqNoFt.collapse>div>span'
    hearingImg = 'div.sc-fjdhpX.sc-1f7autd-52.fqNoFt.collapse>div>svg'
    hearingLbl = 'div.sc-fjdhpX.sc-1f7autd-52.fqNoFt.collapse>div>span'

    seePlanDetailsBtn = 'div.sc-caSCKo.ipmUAp.d-lg-flex.d-none.row>div>a.sc-1f7autd-53.gIkkjZ'

    //This method gets the carrier logo
    getCarrierLogoImg(){
        return cy.get(this.carrierLogoImg)
    }

    //This method gets the Premium Cost label
    getMonthlyPremiumCostLbl(){
        return cy.get(this.monthlyPremiumCostLbl)
    }

    //This method gets the Montly Premium label
    getMonthlyPremiumLbl(){
        return cy.get(this.monthlyPremiumLbl)
    }

    //This method gets the Enroll button
    getEnrollBtn(){
        return cy.get(this.enrollBtn)
    }

    //This method gets the Estimated Annual Costs label
    getEstimatedAnnualCostsLbl(){
        return cy.get(this.estimatedAnnualCostsLbl)
    }

    //This method gets Want to see how much you could spend in a year?
    getHowMuchYouCouldSpendLbl(){
        return cy.get(this.howMuchYouCouldSpendLbl)
    }

    //This method gets Enter Your Info button
    getEnterYourInfoBtn(){
        return cy.get(this.enterYourInfoBtn)
    }

    //This method gets the resulting EAC link 
    getEstimatedAnnualCostsLnk(){
        return cy.get(this.estimatedAnnualCostsLnk)
    }

    //This method gets the plan name
    getPlanNameLbl(planName){
        return cy.get(this.planNameLbl)
    }

    //This method gets the Plan Year: 2021 label 
    getPlanYearLbl(){
        return cy.get(this.planYearLbl)
    }
    
    //This method gets ID: label
    getIdLbl(){
        return cy.get(this.idLbl)
    }

    //This method gets Favorite image
    getFavoriteImg(){
        return cy.get(this.favoriteImg)

    }

    //This method gets Favorite label
    getFavoriteLbl(){
        return cy.get(this.favoriteLbl)
    }

    //This method gets the Compare checkbox
    getCompareCkb(){
        return cy.get(this.compareCkb)
    }

    //This method gets the Compare label
    getCompareLbl(){
        return cy.get(this.compareLbl)    
    }

    //This method gets the Medical Benefit image
    getMedicalBenefitsImg(){
        return cy.get(this.medicalBenefitsImg)
    }
    
    //This method gets the Medical Benefit label
    getMedicalBenefitsLbl(){
        return cy.get(this.medicalBenefitsLbl)
    }

    //This method gets Deductible link for Medical
    getMedicalDeductableLnk(){
        return cy.get(this.medicalDeductibleLnk)
    }

    //This method gets the Copay link
    getCopayLnk(){
        return cy.get(this.copayLnk)
    }

    //This method gets primary care / specialist label
    getPrimaryCareSpecialistLbl(){
        return cy.get(this.primaryCareSpecialistLbl)
    }

    //This method gets the Out of Pocket Max link
    getOutOfPocketMaxLnk(){
        return cy.get(this.outOfPocketMaxLnk)
    }

    //This method gets the in-network label
    getInNetworkLbl(){
        return cy.get(this.inNetworkLbl)
    }

    //This method gets the RX Benefits image
    getRxBenefitsImg(){
        return cy.get(this.rxBenefitsImg)
    }

    //This method gets the RX Benefits label
    getRxBenefitsLbl(){
        return cy.get(this.rxBenefitsLbl)
    }

    //This method gets the unavailable message for RX Benefits
    getUnavailableLbl(){
        return cy.get(this.unavailableLbl)
    }

    //This method gets the Deductible link for Rx
    getRxDeductibleLnk(){
        return cy.get(this.rxDeductibleLnk)
    }

    //This method gets the Rx Covered link
    getRxCoveredLnk(){
        return cy.get(this.rxCoveredLnk)
    }

    //This method gets the See if your drugs are covered
    getSeeCoveredDrugsLnk(){
        return  cy.get(this.seeCoveredDrugsLnk)
    }

    //This method gets the Feature label
    getFeaturesLbl(){
        return cy.get(this.featuresLbl)
    }

    //This method gets the RX image
    getRxImg(){
        return cy.get(this.rxImg)
    }

    //This method gets RX label
    getRxLbl(){
        return cy.get(this.rxLbl)
    }

    //This method gets the Dental image
    getDentalImg(){
        return cy.get(this.dentalImg)
    }

    //This method gets the Dental label
    getDentalLbl(){
        return cy.get(this.dentalLbl)
    }

    //This method gets the Vision Image
    getVisionImg(){
        return cy.get(this.visionImg)
    }

    //This method gets the Vision label
    getVisionLbl(){
        return cy.get(this.visionLbl)
    }

    //This method gets the Hearing image
    getHearingImg(){
        return cy.get(this.hearingImg)
    }

    //This method gets the Hearing label
    getHearingLbl(){
        return cy.get(this.hearingLbl)
    }

    //This method gets the See Plan Details button
    getSeePlanDetailsBtn(){
        return cy.get(this.seePlanDetailsBtn)
    }

    //This method gets the overlay that is being shown
    getGlobalOverlay(){
        return cy.get(this.globalOverlay)
    }
}

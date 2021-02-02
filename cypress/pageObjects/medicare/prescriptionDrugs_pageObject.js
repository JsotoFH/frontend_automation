export default class prescriptionDrugs_pageObject{

    //Page two.
    prescriptionLettersTxt = 'input.sc-10fmtu3-0.cGawEz'
    prescriptionDrugsBtn = 'button.d8wg8j-2.WQguZ'

    //Page3
    subtitleLbl = 'h2.p66txm-1.erjXZT'
    formQuestionsBtn = 'div.css-2b097c-container'
    addBtn = 'button.p66txm-5.kSEEMG'


    //This method types in the prescription letter fields
    setPrescriptionLettersTxt(prescription){
      cy.setElementsInArray(this.prescriptionLettersTxt, prescription)
    }

    //This method click on the specific drug's name option
    clickPrescriptionDrugsBtn(prescription){
      cy.clickElementInArray(this.prescriptionDrugsBtn, prescription)
    }

    //This method gets the subtitle in the page.
      //drug's name in this case.
    getSubtitleLbl(){
      return cy.get(this.subtitleLbl)
    }

   //This method sets the dose type.
    setDoseTypeBtn(doseType){
      cy.get(this.formQuestionsBtn).last().click()
      cy.clickElementInArray('span.bz5mrc-5.jNSZrd', doseType)
    }

   //This method sets the dose strength.
    setDoseStrengthBtn(doseStrength){
      cy.get(this.formQuestionsBtn).last().click()
      cy.clickElementInArray('div.sc-13fnptv-0.kCwENB', doseStrength)
    }
  
    //This method sets the prescription package.
    setPrescriptionPackagedBtn(prescriptionPackaged){
      cy.get(this.formQuestionsBtn).last().click()
      cy.clickElementInArray('div.sc-13fnptv-0.kCwENB', prescriptionPackaged)
    }

    //This method sets the refill frequency.
    setRefillFrequencyBtn(prescriptionPackaged){
      cy.get(this.formQuestionsBtn).last().click()
      cy.clickElementInArray('div.sc-13fnptv-0.kCwENB', prescriptionPackaged)
    }

    //This method clicks on the Add this prescription button to submit the form.
    clickAddbutton(){
      cy.get(this.addBtn).click()
    }
}
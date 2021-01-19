/// <reference types="Cypress" />

export default class updateYourLocation_pageObject{
    
    updateYourLocationSubtitleLbl = '.b7t09s-5.bHDMmj'
    editZipCodeTxt = '.form-control.form-control-lg'
    updateMyLocationBtn = '[class*="btn-block"]'

    //This method gets the subtitle element.
    getUpdateYourLocationSubtitleLbl(){
        return cy.get(this.updateYourLocationSubtitleLbl)
    }

    //This method set a zip code in the text box.
    setEditZipCodeTxt(zipCode){
        cy.get(this.editZipCodeTxt).click().clear().type(zipCode + '{enter}')
    }

    //This method clicks on update my location button.
    clickUpdateMyLocationBtn(){
        cy.get(this.updateMyLocationBtn).click()
    }
}
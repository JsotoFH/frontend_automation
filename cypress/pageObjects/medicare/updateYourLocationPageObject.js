/// <reference types="Cypress" />

export default class updateYourLocationPageObject{
    
    updateYourLocationSubtitleText = '.b7t09s-5.bHDMmj'
    editZipCodeTextBox = '.form-control.form-control-lg'
    updateMyLocationButton = '[class*="btn-block"]'

    //This method gets the subtitle element.
    getUpdateYourLocationSubtitleText(){
        return cy.get(this.updateYourLocationSubtitleText)
    }

    //This method set a zip code in the text box.
    setEditZipCodeTextBox(zipCode){
        cy.get(this.editZipCodeTextBox).click().clear().type(zipCode + '{enter}')
    }

    //This method clicks on update my location button.
    clickUpdateMyLocationButton(){
        cy.get(this.updateMyLocationButton).click()
    }
}
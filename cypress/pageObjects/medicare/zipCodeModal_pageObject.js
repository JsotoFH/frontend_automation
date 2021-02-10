/// <reference types="Cypress" />

export default class zipCodeModal_pageObject{
    
    subtitleLbl='h4.b7t09s-5.bHDMmj'
    editZipCodeTxt = 'input.form-control'
    updateMyLocationBtn = 'button[class*="btn-block"]'

    //This method gets the subtitle element.
    getsubtitleLbl(){
        return cy.get(this.subtitleLbl)
    }

    //This method set a zip code in the text box.
    setEditZipCodeTxt(zipCode){
        cy.get(this.editZipCodeTxt).click().clear().type(zipCode + '{enter}').wait(2000)
        cy.get('body').then((body)=>{
            if(body.find('div.b7t09s-15.btYbUA.form-check').length){
                cy.get('div.b7t09s-15.btYbUA.form-check>label>svg').eq(0).click()
            }
        })
    }

    //This method clicks on update my location button.
    clickUpdateMyLocationBtn(){
        cy.get(this.updateMyLocationBtn).click().wait(2000)
    }
}
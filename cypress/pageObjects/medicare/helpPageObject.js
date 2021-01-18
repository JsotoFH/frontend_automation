/// <reference types="Cypress" />


export default class helpPageObject{
    needHelpSubtitleLabel = '.sc-18w64ft-4.fSlwJL'
    requestACallSubtitleLabel = '.sc-1r2hvjp-1.dWIWHY'
    firstNameTextField =  '#firstName'
    lastNameTextField = '#lastName'
    emailTextField = '#email'
    phoneNumberTextField = '#phoneNumber'
    requestACallButton = '[class*="sc-1r2hvjp-5"]'
    closeHelpWindowsButton = '.sc-1r2hvjp-2.GWEaq'
    thankYouSubtitleLabel = '.sc-1r2hvjp-1.dWIWHY'

    getNeedHelpSubtitleLabel(){
        return cy.get(this.needHelpSubtitleLabel)
    }

    getRequestACallSubtitleLabel(){
        return cy.get(this.requestACallSubtitleLabel)
    }

    getFirstNameTextField(){
        return cy.get(this.firstNameTextField)
    }

    setFirstNameTextField(firstName){
        this.getFirstNameTextField().click({force: true}).clear().type(firstName  + '{enter}')
    }

    getLastNameTextField(){
        return cy.get(this.lastNameTextField)
    }

    setLastNameTextField(lastName){
        this.getLastNameTextField().click({force: true}).clear().type(lastName  + '{enter}')
    }

    getEmailTextField(){
        return cy.get(this.emailTextField)
    }

    setEmailTextField(email){
        this.getEmailTextField().click({force: true}).clear().type(email  + '{enter}')
    }

    getPhoneNumberTextField(){
        return cy.get(this.phoneNumberTextField)
    }

    setPhoneNumberTextField(phoneNumber){
        this.getPhoneNumberTextField().click({force: true}).clear().type(phoneNumber  + '{enter}')
    }

    clickRequestACallButton(){
        cy.get(this.requestACallButton).click()
    }

    clickCloseHelpWindowsButton(){
        cy.get(this.closeHelpWindowsButton).click()
    }

    getThankYouSubtitleLabel(){
        return cy.get(this.thankYouSubtitleLabel)
    }
}
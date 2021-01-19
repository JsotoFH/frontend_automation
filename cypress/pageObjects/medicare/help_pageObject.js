/// <reference types="Cypress" />


export default class help_pageObject{
    needHelpSubtitleLbl = '.sc-18w64ft-4.fSlwJL'
    requestACallSubtitleLbl = '.sc-1r2hvjp-1.dWIWHY'
    firstNameTxt =  '#firstName'
    lastNameTxt = '#lastName'
    emailTxt = '#email'
    phoneNumberTxt = '#phoneNumber'
    requestACallBtn = '[class*="sc-1r2hvjp-5"]'
    closeHelpWindowsBtn = '.sc-1r2hvjp-2.GWEaq'
    thankYouSubtitleLbl = '.sc-1r2hvjp-1.dWIWHY'

    getNeedHelpSubtitleLbl(){
        return cy.get(this.needHelpSubtitleLbl)
    }

    getRequestACallSubtitleLbl(){
        return cy.get(this.requestACallSubtitleLbl)
    }

    getFirstNameTxt(){
        return cy.get(this.firstNameTxt)
    }

    setFirstNameTxt(firstName){
        this.getFirstNameTxt().click({force: true}).clear().type(firstName  + '{enter}')
    }

    getLastNameTxt(){
        return cy.get(this.lastNameTxt)
    }

    setLastNameTxt(lastName){
        this.getLastNameTxt().click({force: true}).clear().type(lastName  + '{enter}')
    }

    getEmailTxt(){
        return cy.get(this.emailTxt)
    }

    setEmailTxt(email){
        this.getEmailTxt().click({force: true}).clear().type(email  + '{enter}')
    }

    getPhoneNumberTxt(){
        return cy.get(this.phoneNumberTxt)
    }

    setPhoneNumberTxt(phoneNumber){
        this.getPhoneNumberTxt().click({force: true}).clear().type(phoneNumber  + '{enter}')
    }

    clickRequestACallBtn(){
        cy.get(this.requestACallBtn).click()
    }

    clickCloseHelpWindowsBtn(){
        cy.get(this.closeHelpWindowsBtn).click()
    }

    getThankYouSubtitleLbl(){
        return cy.get(this.thankYouSubtitleLbl)
    }
}
/// <reference types="Cypress" />

import censusPageObject from '../../pageObjects/medicare/censusPageObject'
import quotePageObject from '../../pageObjects/medicare/quotePageObject'
import helpPageObject from '../../pageObjects/medicare/helpPageObject'

const censusPageObj = new censusPageObject()
const quotePageObj = new quotePageObject()
const helpPageObj = new helpPageObject()

describe('Help Page Suite',() => {

    beforeEach(function () {
        cy.fixture('medicare/formTestData').then((formTD) => {this.formTD = formTD})
          censusPageObj.getPage()
          censusPageObj.setZipCodeTextField('42223')
          censusPageObj.clickSeeMedicarePlansButton()
      })

    it('Validate request a call form', function () {
        quotePageObj.clickHelpButton()
        helpPageObj.getNeedHelpSubtitleLabel().should('have.text','Need Help?')
        helpPageObj.getRequestACallSubtitleLabel().should('have.text','Request a Call')
        //helpPageObj.getFirstNameTextField().click({force: true}).type(this.formTD.firstName)
        helpPageObj.setFirstNameTextField(this.formTD.firstName)
        helpPageObj.setLastNameTextField(this.formTD.lastName)
        helpPageObj.setEmailTextField(this.formTD.email)
        helpPageObj.setPhoneNumberTextField(this.formTD.phoneNumber)
        helpPageObj.clickRequestACallButton()
        helpPageObj.getThankYouSubtitleLabel().should('have.text','Thank you!')
    })

})
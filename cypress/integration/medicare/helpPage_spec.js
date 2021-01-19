/// <reference types="Cypress" />

import census_pageObject from '../../pageObjects/medicare/census_pageObject'
import quote_pageObject from '../../pageObjects/medicare/quote_pageObject'
import help_pageObject from '../../pageObjects/medicare/help_pageObject'

const census = new census_pageObject()
const quote = new quote_pageObject()
const help = new help_pageObject()

describe('Help Page Suite',() => {

    beforeEach(function () {
        cy.fixture('medicare/helpForm_testData').then((formTD) => {this.formTD = formTD})
          census.getPage()
          census.setZipCodeTxt('42223')
          //censusPageObj.clickSeeMedicarePlansButton()
      })

    it('Validate request a call form', function () {
        quote.clickHelpBtn()
        help.getNeedHelpSubtitleLbl().should('have.text','Need Help?')
        help.getRequestACallSubtitleLbl().should('have.text','Request a Call')
        //help.getFirstNameTextField().click({force: true}).type(this.formTD.firstName)
        help.setFirstNameTxt(this.formTD.firstName)
        help.setLastNameTxt(this.formTD.lastName)
        help.setEmailTxt(this.formTD.email)
        help.setPhoneNumberTxt(this.formTD.phoneNumber)
        help.clickRequestACallBtn()
        help.getThankYouSubtitleLbl().should('have.text','Thank you!')
    })

})
import outOfProduct_pageObject from '../../pageObjects/medicare/outOfProduct_pageObject'

const outOfProduct = new outOfProduct_pageObject()



describe('Out of Product Page Suite', () => {  
    beforeEach(() =>{
        //We won't get Quote Page in this case, instead we will get Out of Product based on
            //the zip code provided.
        cy.getQuotePage(72057)
    })

    it('Validate out of Product Page', () => {
        outOfProduct.getSubtitleLbl().should('have.text','You entered a zip code that is not in our service area.')
        outOfProduct.getSecondSubtitleLbl().should('have.text','Request a Call')
        outOfProduct.getOutOfProductMessageLbl().should('have.text','Speak with a licensed insurance agent')
        //outOfProduct.getPhoneLbl().should('have.text','(855) 651-5094')
        outOfProduct.getScheduleLbl().should('have.text','Mon.-Fri. 8a.m. - 8p.m. ET')
        outOfProduct.getDisclaimerLbl().should('have.text','By clicking "Request a Call" above, I expressly consent to receive emails and phone calls via automatic telephone dialing system or by artificial/pre-recorded message, or by text message, from representatives or agents of HealthInsurance.com and its sister companies Total Insurance Brokers, LLC, TogetherHealth PAP, LLC, HealthPlan Intermediaries Holdings, LLC, or HealthPocket d/b/a AgileHealthInsurance Agency, which are all part of the Benefytt Technologies, Inc. family of companies at the email address and telephone number above, including my wireless number if provided. Message and data rates may apply. I understand that my consent to receive communication in this way is not required as a condition of purchasing any goods or services. If you are Medicare-eligible, a licensed sales agent will call you about Medicare plan options including Medicare Advantage, Medicare supplement and Prescription Drug plans by phone or email. Submitting this form does NOT affect your current Medicare Part A and Part B enrollment, nor will it enroll you in a Medicare Advantage Plan, Prescription Drug Plan or other Medicare plan.')
        outOfProduct.clickBackButton()        
    })
})
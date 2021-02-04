import census_pageObject from '../../pageObjects/medicare/census_pageObject'
import quote_pageObject from '../../pageObjects/medicare/quote_pageObject'
import globalDisclaimers from '../../pageObjects/medicare/globalDisclaimers_pageObject'

const census = new census_pageObject()
const quote = new quote_pageObject()
const disclaimer = new globalDisclaimers()


describe('Census Page Suite', () => {  
    beforeEach(() =>{
        census.getPage()
    })

    it('Validate that Census page is loaded', () => {
        census.getPageTitleLbl().should('eq','Find and Compare Medicare Plans | medicare.healthinsurance.com')
        census.getPageUrl().should('contains', 'https://staging.medicare.healthinsurance.com')
    })

    it('Validate text in the hero', () => {
        census.getHeroTitleLbl().should('have.text', 'Find and Compare Medicare Plans')
        census.getHeroBodyLbl().should('have.text', "We spend the time and effort to know the ins and outs of Medicare, so you don't have to.")
    })

    it('Validate we are in quote page after entering and zip code and clicking on See Medicare Plans button', () => {
        census.setZipCodeTxt('35215')
        //census.setZipCodeTxt('42223')
        census.clickSeeMedicarePlansBtn()
        quote.getTopLbl().contains('Medicare Advantage Plans')
    })

    it('Validate disclaimers', () => {
        disclaimer.getDisclaimerCtn().should((elem) => {
            expect(elem.text()).to.contains("General disclaimersHealthinsurance.com,  LLC is a commercial site designed for the solicitation of insurance from selected health insurance carriers. It is not an insurer, an insurance agency, or a medical provider. Insurance agency services may be provided by one of our sister companies, Total Insurance Brokers, LLC, TogetherHealth PAP, LLC, HealthPlan Intermediaries Holdings, LLC, or HealthPocket d/b/a AgileHealthInsurance Agency, which are all part of the Benefytt Technologies, Inc. family of companies.Alternatively, you may be referred, via a link, to a selected partner website, which is independently owned and operated and may have different privacy and terms of use policies from us.If you provide your contact information to us, an insurance agent/producer or insurance company may contact you.If you do not speak English, language assistance service, free of charge, is available to you; contact the toll-free number listed above.For a list of all available plans, please contact 1-800-Medicare (TTY users should call 1-877-486-2048) or consult www.medicare.gov.This site is not maintained by or affiliated with the federal government's Health Insurance Marketplace website or any state government health insurance marketplace.");
        })
    })
})
import census_pageObject from '../../pageObjects/medicare/census_pageObject'
import quote_pageObject from '../../pageObjects/medicare/quote_pageObject'

const census = new census_pageObject()
const quote = new quote_pageObject()


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
        //censusPageObj.setZipCodeTextField('35215')
        census.setZipCodeTxt('42223')
        census.clickSeeMedicarePlansBtn()
        quote.getTopLbl().contains('Medicare Advantage Plans')
    })
})
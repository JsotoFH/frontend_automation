import censusPageObject from '../../pageObjects/medicare/censusPageObject'
import quotePageObject from '../../pageObjects/medicare/quotePageObject'

const censusPageObj = new censusPageObject()
const quotePageObj = new quotePageObject()


describe('Census Page Suite', () => {  
    beforeEach(() =>{
        censusPageObj.getPage()
    })

    it('Validate that Census page is loaded', () => {
        censusPageObj.getPageTitle().should('eq','Find and Compare Medicare Plans | medicare.healthinsurance.com')
        censusPageObj.getPageUrl().should('contains', 'https://staging.medicare.healthinsurance.com')
    })

    it('Validate text in the hero', () => {
        censusPageObj.getTextInHeroTitle().should('have.text', 'Find and Compare Medicare Plans')
        censusPageObj.getTextInHeroBody().should('have.text', "We spend the time and effort to know the ins and outs of Medicare, so you don't have to.")
    })

    it('Validate we are in quote page after entering and zip code and clicking on See Medicare Plans button', () => {
        //censusPageObj.setZipCodeTextField('35215')
        censusPageObj.setZipCodeTextField('42223')
        censusPageObj.clickSeeMedicarePlansButton()
        quotePageObj.getTextInTheTop().should('have.text', '21\u00a0Medicare Advantage Plans')//quote page
    })
})
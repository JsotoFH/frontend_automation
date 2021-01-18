/// <reference types="Cypress" />
export default class censusPageObject{

    heroTitleText = '.tz6gdb-0'
    heroBodyText = '.tz6gdb-1'
    zipCodeTextField = '.bz5mrc-16.jSFXAi'
    seeMedicarePlansButton = '.sc-1fn8n0v-0'

    //This method loads the initial Census page.
    getPage(){
        cy.visit(Cypress.env('staging'))
    }

    //This method gets the Census page title.
    getPageTitle(){
        return cy.title()
    }

    //This method gets the Census page url.
    getPageUrl(){
        return cy.url()
    }

    //This method gets the hero text element.
    getTextInHeroTitle(){
        return cy.get(this.heroTitleText)
    }

    //This method gets the hero text body element.
    getTextInHeroBody(){
        return cy.get(this.heroBodyText)
    }

    //This method types a zip code in the text-field.
        //If there were multiple counties then it clicks on the first one.
    setZipCodeTextField(zipCode){
        cy.get(this.zipCodeTextField).click().clear().type(zipCode + '{enter}')
        if(cy.get('.modal-content')){
            cy.get('.sc-10jgnyy-4.blqeox').eq(0).click()
        }
    }

    //This method clicks on the submit button.
    clickSeeMedicarePlansButton(){
        cy.get(this.seeMedicarePlansButton).click()

    }
}
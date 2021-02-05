/// <reference types="Cypress" />
export default class census_pageObject{

    heroTitleLbl = '.tz6gdb-0'
    heroBodyLbl = '.tz6gdb-1'
    zipCodeTxt = '.bz5mrc-16.jSFXAi'
    seeMedicarePlansBtn = 'button.sc-1fn8n0v-0'

    //This method loads the initial Census page.
    //getPage(){
      //  cy.clearCookies()
       // cy.clearLocalStorage()
       // cy.visit(Cypress.env('url'), {onBeforeLoad: (win) => {win.sessionStorage.clear()}})
    //}

    //This method gets the Census page title.
    getPageTitleLbl(){
        return cy.title()
    }

    //This method gets the Census page url.
    getPageUrl(){
        return cy.url()
    }

    //This method gets the hero text element.
    getHeroTitleLbl(){
        return cy.get(this.heroTitleLbl)
    }

    //This method gets the hero text body element.
    getHeroBodyLbl(){
        return cy.get(this.heroBodyLbl)
    }

    //This method types a zip code in the text-field.
        //If there were multiple counties then it clicks on the first one.
    setZipCodeTxt(zipCode){
        cy.get(this.zipCodeTxt).click().clear().type(zipCode).wait(2000)
        cy.get('body').then((body)=>{
            if(body.find('.modal-content').length){
                cy.get('.sc-10jgnyy-4.blqeox').eq(0).click()
            }
        })
    }

    //This method clicks on the submit button.
    clickSeeMedicarePlansBtn(){
        cy.get(this.seeMedicarePlansBtn).click().wait(2000)
    }
}
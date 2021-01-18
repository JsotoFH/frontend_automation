/// <reference types="Cypress" />

export default class quotePageObject{

    topTitleText = '.sc-1xunf9a-0.jzUshS'
    filterPlansButton ='.sc-1sioptb-6.gjipgy'
    updateYourLocation = '.sc-191voon-4.ctPuww'
    yourCurrentPlanButton = '.sc-191voon-4.ctPuww'
    viewAvailablePlansLink = '.sc-191voon-14.fpMnoP'
    helpButton = '.h4q93g-0.dcdiAT'


    //This method gets the Quote page title.
    getPageTitle(){
        return cy.title()
    }

    //This method gets the Quote page url.
    getPageUrl(){
        return cy.url()
    }
   
    //This method gets the top text element.
    getTextInTheTop(){
        return cy.get(this.topTitleText)
    }

    //This method clicks on filter plans button.
    clickFilterPlansButton(){
        cy.get(this.filterPlansButton).click()
    }

    //This method gets the update your location element.
    getUpdateYourLocationButton(){
        return cy.get(this.updateYourLocation).eq(0)
    }
    
    //This method clicks on update your location button.
    clickUpdateYourLocationButton(){
        getUpdateYourLocationButton().click()
    }

    //This methos clicks on current plan button.
    clickYourCurrentPlanButton(){
        cy.get(this.yourCurrentPlanButton).eq(1).click()
    }

    //This method clicks on view available plans link.
    clickViewAvailablePlansLink(){
        cy.get(this.viewAvailablePlansLink).click({force: true})
    }

    //This method clicks on help button.
    clickHelpButton(){
        cy.get(this.helpButton).click()
    }
}
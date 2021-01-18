/// <reference types="Cypress" />

export default class filterPlansPageObject{

    filterPlansSubtitleText = '.sc-1sioptb-7.dleLcH'
    companyNamesCheckbox= '.sc-1sioptb-20.jPjwKG'
    applyFiltersButton = '[class *= sc-1sioptb-10]'
    closeButton = '.sc-1sioptb-18.hTUBWe'

    //This method gets the Subtitle element in filter plan page.
    getSubtitleInFilterPlansSection(){
        return cy.get(this.filterPlansSubtitleText)
    }

    //This method clicks on Humana Inc company.
    clickCompanyCheckbox(){
        cy.get(this.companyNamesCheckbox).eq(2).click()
    }

    //This method clicks on Apply Filter button.
    clickApplyFilterButton(){
        cy.get(this.applyFiltersButton).click()
    }

    //This method clicks on close button.
    clickCloseButton(){
        cy.get(this.closeButton).click()
    }
}
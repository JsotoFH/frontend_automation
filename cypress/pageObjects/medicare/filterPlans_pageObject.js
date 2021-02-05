/// <reference types="Cypress" />

export default class filterPlans_pageObject{

    filterPlansSubtitleLbl = '.sc-1sioptb-7.dleLcH'
    companyNamesCkb= '.sc-1sioptb-20.jPjwKG'
    applyFiltersBtn = '[class *= sc-1sioptb-10]'
    closeBtn = '.sc-1sioptb-18.hTUBWe'

    //This method gets the Subtitle element in filter plan page.
    getSubtitleInFilterPlansSection(){
        return cy.get(this.filterPlansSubtitleLbl)
    }

    //This method clicks on Humana Inc company.
    clickCompanyCkb(planName){
        cy.clickElementInArray(this.companyNamesCkb, planName)
        //cy.get(this.companyNamesCkb).eq(2).click()
    }

    //This method clicks on Apply Filter button.
    clickApplyFilterBtn(){
        cy.get(this.applyFiltersBtn).click()
    }

    //This method clicks on close button.
    clickCloseBtn(){
        cy.get(this.closeBtn).click()
    }
}
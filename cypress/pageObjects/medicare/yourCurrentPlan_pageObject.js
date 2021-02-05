/// <reference types="Cypress" />

export default class yourCurrentPlan_pageObject{
    
    //Page two
    coverageOptionsRdb = '.ns2cyz-1.bCrTra'
    startTypingBtn = 'input.rbt-input-main.form-control.rbt-input'
    optionsBtn = 'ul[aria-label="menu-options"]>li'
    currentPlan = 'div.col-md-12>.sc-3w2p6u-0.JYrBb.col'

    //This method clicks on To replace a current Medicare Advantage plan
    clickCoverageOptionsRdb(option){
        cy.clickElementInArray(this.coverageOptionsRdb, option)
    }

    //This method clicks and set the Start Typing dropdownfor insurance company
    setStartTypingBtn(company){
        cy.get(this.startTypingBtn).click().type(company).wait(2000)
        cy.clickElementInArray(this.optionsBtn, company)
    }

    //This method clicks on the specified Current Plan 
    clickCurrentPlan(currentPlan){
        cy.clickElementInArray(this.currentPlan, currentPlan)
    }
}
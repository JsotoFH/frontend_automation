/// <reference types="Cypress" />

export default class yourCurrentPlan_pageObject{
    
    //Page one
    yourCurrentPlanSubitleLbl = '.sc-8s5i1h-2.cMmRKS'
    
    //Page two
    yourCurrentPlanQuestionLbl = '.sc-98x115-1.oordz'
    coverageOptionsRdb = '.ns2cyz-1.bCrTra'
    startTypingBtn = 'input.rbt-input-main.form-control.rbt-input'
    optionsBtn = 'ul[aria-label="menu-options"]>li'
    currentPlan = 'div.col-md-12>.sc-3w2p6u-0.JYrBb.col'

    //This method gets the subtitle element.
    getSubtitleYourCurrentPlanSectionLbl(){
        return cy.get(this.yourCurrentPlanSubitleLbl)
    }

    //This method gets the question text element.
    getYourCurrentPlanQuestionLbl(){
        return cy.get(this.yourCurrentPlanQuestionLbl)
    }

    //This method clicks on To replace a current Medicare Advantage plan
    clickCoverageOptionsRdb(option){
        cy.clickElementInArray(this.coverageOptionsRdb, option)
    }

    //This method clicks and set the Start Typing dropdownfor insurance company
    setStartTypingBtn(company){
        cy.get(this.startTypingBtn).click().type(company).wait(1000)
        cy.clickElementInArray(this.optionsBtn, company)
    }

    //This method clicks on the specified Current Plan 
    clickCurrentPlan(currentPlan){
        cy.clickElementInArray(this.currentPlan, currentPlan)
    }
}
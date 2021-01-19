/// <reference types="Cypress" />

export default class filterPlans_pageObject{
    
    yourCurrentPlanSubitleLbl = '.sc-8s5i1h-2.cMmRKS'
    yourCurrentPlanQuestionLbl = '.sc-98x115-1.oordz'
    addYourCurrentPlanBtn = '.ns2cyz-1.jRFPLW'

    //This method gets the subtitle element.
    getSubtitleYourCurrentPlanSection(){
        return cy.get(this.yourCurrentPlanSubitleLbl)
    }

    //This method clicks on add your current plan button.
    clickAddYourCurrentPlanBtn(){
        cy.get(this.addYourCurrentPlanBtn).click()    
    }

    //This method gets the question text element.
    getYourCurrentPlanQuestionLbl(){
        return cy.get(this.yourCurrentPlanQuestionLbl)
    }
}
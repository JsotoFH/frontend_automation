/// <reference types="Cypress" />

export default class filterPlansPageObject{
    
    yourCurrentPlanSubitleText = '.sc-8s5i1h-2.cMmRKS'
    yourCurrentPlanQuestionText = '.sc-98x115-1.oordz'
    addYourCurrentPlanButton = '.ns2cyz-1.jRFPLW'

    //This method gets the subtitle element.
    getSubtitleYourCurrentPlanSection(){
        return cy.get(this.yourCurrentPlanSubitleText)
    }

    //This method clicks on add your current plan button.
    clickAddYourCurrentPlan(){
        cy.get(this.addYourCurrentPlanButton).click()    
    }

    //This method gets the question text element.
    getYourCurrentPlanQuestionText(){
        return cy.get(this.yourCurrentPlanQuestionText)
    }
}
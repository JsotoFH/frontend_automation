/// <reference types="Cypress" />

export default class filterPlans_pageObject{
    
    //Page one
    yourCurrentPlanSubitleLbl = '.sc-8s5i1h-2.cMmRKS'
    backBtn = '.sc-17e7h73-4.iDFwod.col-md-5>button'
    skipThisSectionBtn = '.ns2cyz-1.fHxFqS'
    addYourCurrentPlanBtn = '.ns2cyz-1.jRFPLW'

    //Page two
    yourCurrentPlanQuestionLbl = '.sc-98x115-1.oordz'
    coverageOptionsRdb = '.ns2cyz-1.bCrTra'
    startTypingBtn = 'input.rbt-input-main.form-control.rbt-input'
    optionsBtn = 'ul[aria-label="menu-options"]>li'
    currentPlan = 'div.col-md-12>.sc-3w2p6u-0.JYrBb.col'
    imFinishedBtn = '.ns2cyz-1.jezcQH.selected'


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

    //This method clicks on To replace a current Medicare Advantage plan
    clickCoverageOptionsRdb(option){
        //cy.get(this.coverageOptionsRdb).eq(option).click()
        cy.get(this.coverageOptionsRdb).each((elem, i, list)=>{
            if(elem.text().includes(option)){
                cy.get(this.coverageOptionsRdb).eq(i).click()
            }
        })
    }

    //This method clicks and set the Start Typing dropdownfor insurance company
    setStartTypingBtn(company){
        cy.get(this.startTypingBtn).click().type(company).wait(1000)
        cy.get(this.optionsBtn).each((elem, i, list)=>{
            if(elem.text().includes(company)){
                cy.get(this.optionsBtn).eq(i).click()
            }
        })
    }

    //This method clicks on the specified Current Plan 
    clickCurrentPlan(currentPlan){
        cy.get(this.currentPlan).each((elem, i, list)=>{
            if(elem.text().includes(currentPlan)){
                cy.get(this.currentPlan).eq(i).click()
            }
        })
    }

    //This method clicks on the I'm finished button
    clickImFinishedBtn(){
        cy.get(this.imFinishedBtn).click()
    }
}
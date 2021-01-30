export default class globalInfoBar_pageObject{

    backBtn = '.sc-17e7h73-4.iDFwod.col-md-5>button'
    skipBtn = '.ns2cyz-1.fHxFqS'
    addBtn = '.ns2cyz-1.jRFPLW'
    imFinishedBtn = '.ns2cyz-1.jezcQH.selected'

    //This method clicks on back button.
    clickBackBtn(){
        cy.get(this.backBtn).click()

    }

    //This method clicks on skip button.
    clickSkipBtn(){
        cy.get(this.skipBtn).click()
    }

    //This method clicks on add button.
    clickAddBtn(){
        cy.get(this.addBtn).click()
    }

    //This method clicks on the I'm finished button
    clickImFinishedBtn(){
        cy.get(this.imFinishedBtn).click()
    }
}
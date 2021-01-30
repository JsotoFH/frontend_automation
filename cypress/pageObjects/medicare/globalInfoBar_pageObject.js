export default class globalInfoBar_pageObject{
    //Page one
    subtitleLbl ='h3.sc-8s5i1h-2.cMmRKS'
    backBtn = '.sc-17e7h73-4.iDFwod.col-md-5>button'
    skipBtn = '.ns2cyz-1.fHxFqS'
    addBtn = '.ns2cyz-1.jRFPLW'

    //Page two
    questionLbl = 'h2.sc-98x115-1.oordz'
    imFinishedBtn = '.ns2cyz-1.jezcQH.selected'

    //This method gets the subtitle in the page
    getSubtitleLbl(){
        return cy.get(this.subtitleLbl)
    } 

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

    //This method gets the question in the page
    getQuestionLbl(){
        return cy.get(this.questionLbl)
    } 

    //This method clicks on the I'm finished button
    clickImFinishedBtn(){
        cy.get(this.imFinishedBtn).click()
    }
}
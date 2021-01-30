/// <reference types="Cypress" />

export default class quote_pageObject{

    topTitleLbl = '.sc-1xunf9a-0.jzUshS'
    filterPlansBtn ='.sc-1sioptb-6.gjipgy'
    updateYourLocationBtn = '.sc-191voon-4.ctPuww'
    yourCurrentPlanBtn = '.sc-191voon-4.ctPuww'
    viewAvailablePlansLnk = '.sc-191voon-14.fpMnoP'
    hidenArrowBtn ='.sc-191voon-17.sc-191voon-19.lieBHb'
    helpBtn = '.h4q93g-0.dcdiAT'


    //This method gets the Quote page title.
    getPageTitle(){
        return cy.title()
    }

    //This method gets the Quote page url.
    getPageUrl(){
        return cy.url()
    }
   
    //This method gets the top text element.
    getTopLbl(){
        return cy.get(this.topTitleLbl)
    }

    //This method clicks on filter plans button.
    clickFilterPlansBtn(){
        cy.get(this.filterPlansBtn).click()
    }

    //This method gets the update your location element.
    getUpdateYourLocationBtn(){
        return cy.get(this.updateYourLocationBtn).eq(0)
    }
    
    //This method clicks on update your location button.
    clickUpdateYourLocationBtn(){
        this.getUpdateYourLocationBtn().click()
    }

    //This methos clicks on current plan button.
    clickYourCurrentPlanBtn(){
        cy.get(this.yourCurrentPlanBtn).eq(1).click()
    }

    //This method clicks on view available plans link.
        //if the element is overlapped then we click on the arrow.
    clickViewAvailablePlansLnk(){
        cy.get('body').then((body)=>{
            if(body.find(this.hidenArrowBtn).length){
                cy.get(this.hidenArrowBtn).click().wait(500)
            }
        })
        cy.get(this.viewAvailablePlansLnk).click({force: true})
    }

    //This method clicks on help button.
    clickHelpBtn(){
        cy.get(this.helpBtn).click()
    }
}
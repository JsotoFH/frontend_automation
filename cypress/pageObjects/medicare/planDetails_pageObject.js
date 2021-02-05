export default class planDetails_pageObject{

    backBtn ='div.sc-tilXH.hNGIew.container>a'

    //This method gets the container of the disclaimer of the page
    getBackBtn(){
        return cy.get(this.backBtn)
    }

    clickBackBtn(){
        this.getBackBtn().click().wait(1000)
    }
}
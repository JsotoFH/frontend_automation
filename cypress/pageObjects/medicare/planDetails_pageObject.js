export default class planDetails_pageObject{

    backBtn ='div.sc-tilXH.hNGIew.container>a'
    mainCarrierLogoImg='div.sc-1hephjo-0.eWkRPm>img'
    topCarrierLogoImg = 'div.sc-caSCKo.bz5mrc-8.gVeUqp.row>div>img'

    //This method gets the container of the disclaimer of the page
    getBackBtn(){
        return cy.get(this.backBtn)
    }

    clickBackBtn(){
        this.getBackBtn().click().wait(2000)
    }

    getMainCarrierLogoImg(){
        return cy.get(this.mainCarrierLogoImg)
    }

    getTopCarrierLogoImg(){
        return cy.get(this.topCarrierLogoImg)
    }
}
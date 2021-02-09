export default class planUnit_pageObject{

    planNameLbl ='h3.sc-1f7autd-11.fsrcLi'
    carrierLogoImg = 'img.awbtr0-2.fwEFwx'
    seePlanDetailsBtn = 'div.sc-caSCKo.ipmUAp.d-lg-flex.d-none.row>div>a.sc-1f7autd-51.cpuQZq'

    //This method gets the container of the disclaimer of the page
    getPlan(planName){
        cy.get(this.planNameLbl)
    }

    getSeePlanDetailsBtn(){
        return cy.get(this.seePlanDetailsBtn).wait(2000)
    }

    getCarrierLogoImg(){
        return cy.get(this.carrierLogoImg)
    }
}
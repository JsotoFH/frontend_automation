export default class estimatedAnnualCosts_pageObject{

    titleLbl = 'div.align-items-center.row.no-gutters>div'
    premiumLbl = 'td.sc-12r3j7m-4.sc-12r3j7m-5.dVFbMl'
    medicalLbl = 'tr.sc-12r3j7m-3.cVBkJc>td'
    rXLbl = 'tr.sc-12r3j7m-3.cVBkJc>td'
    eACLbl = 'tr.sc-12r3j7m-3.cVBkJc>td'
    closeBtn = 'div.align-items-center.row.no-gutters>div>svg'

    //This method gets the Title label
    getTitleLbl(){
        return cy.get(this.titleLbl)
    }

    //This method gets the 12 Months of Premium label
    getPremiumLbl(){
        return cy.get(this.premiumLbl)
    }

    //This method gets the Medical label
    getMedicalLbl(){
        return cy.get(this.medicalLbl)
    }
    
    //This method gets the Rx label
    getRXLbl(){
        return cy.get(this.rXLbl)
    }

    //This method gets the Estimated Annual Total label
    getEACLbl(){
        return cy.get(this.eACLbl)
    }
    
    //This method gets the close button
    getCloseBtn(){
        return cy.get(this.closeBtn)
    }
}
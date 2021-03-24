export default class estimatedAnnualCosts_pageObject{

    titleLbl = 'div.align-items-center.row.no-gutters>div'
    premiumLbl = 'td.sc-12r3j7m-4.sc-12r3j7m-5.dVFbMl'
    medicalLbl = 'tr.sc-12r3j7m-3.cVBkJc'
    rXLbl = 'tr.sc-12r3j7m-3.cVBkJc'
    eACLbl = 'tr.sc-12r3j7m-3.cVBkJc'
    closeBtn = 'div.align-items-center.row.no-gutters>div>svg'

    getTitleLbl(){
        return cy.get(this.titleLbl)
    }

    getPremiumLbl(){
        return cy.get(this.premiumLbl).eq(0)
    }

    getMedicalLbl(){
        return cy.get(this.medicalLbl).eq(0)
    }
    
    getRXLbl(){
        return cy.get(this.rXLbl).eq(1)
    }

    getEACLbl(){
        return cy.get(this.eACLbl).eq(2)
    }
    
    getCloseBtn(){
        return cy.get(this.closeBtn)
    }

}
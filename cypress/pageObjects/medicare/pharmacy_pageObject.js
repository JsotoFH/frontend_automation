export default class pharmacy_pageObject{

    //Page two.
    pharmacyTypeRdb = 'button.ns2cyz-1.gDMyaN.selected'
    majorChainRdb = 'button.ns2cyz-1.bCrTra'


    //This method clicks on the pharmacy type
    clickPharmacyTypeRdb(){
        cy.get(this.pharmacyTypeRdb).click().wait(2000)
      }

    //This method clicks on the particular major chain pharmacy
    clickMajorChainRdb(majorChain){
      cy.clickElementInArray(this.majorChainRdb, majorChain)
    }
}


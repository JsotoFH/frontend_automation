export default class healthcareVisits_pageObject{

    //Page two.
    visitsOptionRdb = 'button.ns2cyz-1.dpMsJf'

    //This method clicks on the frequency visits option
    clickVisitsOptionRdb(option){
        cy.clickElementInArray(this.visitsOptionRdb, option)
    }
}
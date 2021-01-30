export default class healthcareVisits_pageObject{

    //Page one.
    healthcareVisitSubtitleLbl = 'h3.sc-8s5i1h-2.cMmRKS'

    //Page two.
    healthcareVisitQuestionLbl = 'h2.sc-98x115-1.oordz'
    visitsOptionRdb = 'button.ns2cyz-1.dpMsJf'

    //This method gets the subtitle element.
    getHealthcareVisitsSubtitleLbl(){
        return cy.get(this.healthcareVisitSubtitleLbl)
    }   

    //This method gets the question text element.
    getHealthcareVisitsQuestionLbl(){
        return cy.get(this.healthcareVisitQuestionLbl)
    }

    //This method clicks on the frequency visits option
    clickVisitsOptionRdb(option){
        cy.clickElementInArray(this.visitsOptionRdb, option)
    }
}
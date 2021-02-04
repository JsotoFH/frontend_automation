export default class globalDisclaimers_pageObject{

    disclaimerCtn ='div.sc-1uqta31-2.debHmp'

    //This method gets the subtitle in the page
    getDisclaimerCtn(){
        return cy.get(this.disclaimerCtn)
    }
}
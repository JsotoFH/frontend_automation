export default class globalDisclaimers_pageObject{

    disclaimerCtn ='div.sc-1uqta31-2.debHmp'

    //This method gets the container of the disclaimer of the page
    getDisclaimerCtn(){
        return cy.get(this.disclaimerCtn)
    }
}
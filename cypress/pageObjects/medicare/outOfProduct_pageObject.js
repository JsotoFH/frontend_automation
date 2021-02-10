export default class outOfProduct_pageObject{

    subtitleLbl = 'h3.sc-1txjsgd-6.ddBCup'
    secondSubtitleLbl ='span.sc-1r2hvjp-1.dWIWHY'
    outOfProductMessageLbl ='p.txkvqt-3.cQvhNA'
    phoneLbl = 'a.txkvqt-4.RzwlV>span'
    scheduleLbl = 'p.txkvqt-6.bRygC'
    disclaimerLbl = 'p.sc-1r2hvjp-6.eGjZyM'
    backBtn = 'a.sc-1txjsgd-5.bXBTSj>span'

    getSubtitleLbl(){
        return cy.get(this.subtitleLbl)
    }

    getSecondSubtitleLbl(){
        return cy.get(this.secondSubtitleLbl)
    }

    getOutOfProductMessageLbl(){
        return cy.get(this.outOfProductMessageLbl)
    }

    getPhoneLbl(){
        return cy.get(this.phoneLbl)
    }

    getScheduleLbl(){
        return cy.get(this.scheduleLbl)
    }

    getDisclaimerLbl(){
        return cy.get(this.disclaimerLbl)
    }

    clickBackButton(){
        cy.get(this.backBtn).click()
    }
}
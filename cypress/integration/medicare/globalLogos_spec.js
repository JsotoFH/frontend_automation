import quote_pageObject from '../../pageObjects/medicare/quote_pageObject'
import filterPlans_pageObject from '../../pageObjects/medicare/filterPlans_pageObject'
import planUnit_pageObject from '../../pageObjects/medicare/planUnit_pageObject'
import planDetails_pageObject from '../../pageObjects/medicare/planDetails_pageObject'

const quote = new quote_pageObject()
const filterPlans = new filterPlans_pageObject()
const planUnit = new planUnit_pageObject()
const planDetails = new planDetails_pageObject()

describe('Global disclaimers Suite',() => {

    beforeEach(function () {
        cy.fixture('medicare/disclaimers_testData').then((disclaimerTD) => {
            this.disclaimerTD = disclaimerTD    
        })
    })

    it('Validate logos in Quote page using filters', function(){
        this.disclaimerTD.forEach(carrier => {
            cy.log(carrier.carrier)
            var states = carrier.state
            states.forEach((state) =>{
                cy.getQuotePage(state.zipCode)
                quote.clickFilterPlansBtn()
                filterPlans.clickCompanyCkb(carrier.carrier)
                filterPlans.clickApplyFilterBtn()
                if(carrier.logo != ''){
                    planUnit.getCarrierLogoImg().each((elem, i, list)=>{
                        planUnit.getCarrierLogoImg().eq(i).should('have.attr', 'src').and('contain', carrier.logo)
                    })
                }
            })
        })    
    })

    it('Validate logos in Plan Details page', function(){
        this.disclaimerTD.forEach(carrier => {
            cy.log(carrier.carrier)
            var states = carrier.state
            states.forEach((state) =>{
                cy.getQuotePage(state.zipCode)
                quote.clickFilterPlansBtn()
                filterPlans.clickCompanyCkb(carrier.carrier)
                filterPlans.clickApplyFilterBtn()
                planUnit.getSeePlanDetailsBtn().each((elem, i, list)=>{
                    planUnit.getSeePlanDetailsBtn().eq(i).click().wait(2000)
                    if(carrier.logo != ''){
                        planDetails.getMainCarrierLogoImg().should('have.attr', 'src').and('contain', carrier.logo)
                        planDetails.getTopCarrierLogoImg().should('have.attr', 'src').and('contain', carrier.logo)
                    }
                    planDetails.clickBackBtn()
                })  
            })
        })    
    })
})
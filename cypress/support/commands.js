// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })


import census_pageObject from '../pageObjects/medicare/census_pageObject'
import quote_pageObject from '../pageObjects/medicare/quote_pageObject'
import globalInfoBar_pageObject from '../pageObjects/medicare/globalInfoBar_pageObject'
import yourCurrentPlan_pageObject from '../pageObjects/medicare/yourCurrentPlan_pageObject'

const census = new census_pageObject()
const quote = new quote_pageObject()
const globalInfoBar = new globalInfoBar_pageObject()
const currentPlan = new yourCurrentPlan_pageObject()

//This commmand types a zipcode in Census Page and gets quotes
Cypress.Commands.add("getQuotePage", (zipCode) => {
    cy.clearCookies() 
    census.getPage()
    census.setZipCodeTxt(zipCode)
    census.clickSeeMedicarePlansBtn()
})

//This command gets to Your Current Plan page
Cypress.Commands.add("getYourCurrentPlanPage", (zipCode) => {
    cy.getQuotePage(zipCode)
    quote.clickYourCurrentPlanBtn()
})

//This command gets to Your Current Plan page
Cypress.Commands.add("getHealthcareVisitsPage", (zipCode) => {
    cy.getYourCurrentPlanPage(zipCode)
    globalInfoBar.clickAddBtn()
    currentPlan.clickCoverageOptionsRdb('To replace a current Medicare Advantage plan')
    currentPlan.setStartTypingBtn('Aetna Inc.')
    currentPlan.clickCurrentPlan('Aetna Medicare Freedom Plan (PPO)')
    globalInfoBar.clickImFinishedBtn()
})

//This command finds and clicks on a specific element in an array
Cypress.Commands.add("clickElementInArray", (array, element) => { 
    cy.get(array).each((elem, i, list)=>{
        if(elem.text().includes(element)){
            cy.get(array).eq(i).click()    
        }
    })
})

//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

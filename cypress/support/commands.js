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
import healthcareVisits_pageObject from '../pageObjects/medicare/healthcareVisits_pageObject'
import prescriptionDrugs_pageObject from '../pageObjects/medicare/prescriptionDrugs_pageObject'

const census = new census_pageObject()
const quote = new quote_pageObject()
const globalInfoBar = new globalInfoBar_pageObject()
const currentPlan = new yourCurrentPlan_pageObject()
const healthcareVisits = new healthcareVisits_pageObject()
const prescriptionDrugs = new prescriptionDrugs_pageObject()

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

//This command gets to Healthcare Visits page
Cypress.Commands.add("getHealthcareVisitsPage", (zipCode) => {
    cy.getYourCurrentPlanPage(zipCode)
    globalInfoBar.clickAddBtn()
    currentPlan.clickCoverageOptionsRdb('To replace a current Medicare Advantage plan')
    currentPlan.setStartTypingBtn('Aetna Inc.')
    currentPlan.clickCurrentPlan('Aetna Medicare Freedom Plan (PPO)')
    globalInfoBar.clickImFinishedBtn()
})

//This command gets to Prescription Drugs page
Cypress.Commands.add("getPrescriptionDrugsPage", (zipCode) => {
    cy.getHealthcareVisitsPage(zipCode)
    globalInfoBar.clickAddBtn()
    healthcareVisits.clickVisitsOptionRdb('Average')
    globalInfoBar.clickImFinishedBtn()
})

//This command gets to Pharmacy page
Cypress.Commands.add("getPharmacyPage", (zipCode) => {
    cy.getPrescriptionDrugsPage(zipCode)
    globalInfoBar.clickAddBtn()
    prescriptionDrugs.setPrescriptionLettersTxt('Ala Scalp')
    prescriptionDrugs.clickPrescriptionDrugsBtn('Ala Scalp')
    prescriptionDrugs.setDoseTypeBtn('Lotion')
    prescriptionDrugs.setDoseStrengthBtn('2%')
    prescriptionDrugs.setPrescriptionPackagedBtn('29.6 ML Bottle')
    prescriptionDrugs.setRefillFrequencyBtn('Every Month')
    prescriptionDrugs.clickAddbutton()
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

Cypress.Commands.add("setElementsInArray", (array, element) => {
    cy.get(array).first().type(element.slice(0,3))
    //element = element.split(' ')
    //element = element[0].split()
    //cy.get(array).each((elem, i, list)=>{
      //  cy.get(array).last().type(element[i])
    // })   
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

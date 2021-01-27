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
const census = new census_pageObject()

//This commmand type a zipcode in Census Page and get quotes
Cypress.Commands.add("getQuotePage", (zipCode) => {
    census.getPage()
    census.setZipCodeTxt(zipCode)
    census.clickSeeMedicarePlansBtn()
})

//This command find and click on a specific element in an array
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

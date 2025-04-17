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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import { loginObjects, regObjects, restoLocationObjects, riderRegObjects } from "../pageObjects/pageObjects";
// const filePath = 'sample.jpg';  // Uploaded on fixtures folder

Cypress.Commands.add('clickLoginButton', () => {
    cy.get(loginObjects.loginButton).first().click();
})

Cypress.Commands.add('clickApplicationButton', () => {
    cy.get(regObjects.applicationButton).first().click();
})

Cypress.Commands.add('selectCountry', () => {
    cy.get(regObjects.countryCodeField).select('Philippines');
})

Cypress.Commands.add('submitPermits', () => {
    cy.get(regObjects.businessPermitField).should('be.visible').selectFile('cypress/fixtures/sample.jpg');
    cy.get(regObjects.certRegField).should('be.visible').selectFile('cypress/fixtures/sample.jpg');
});

Cypress.Commands.add('clickNextButton', () => {
    cy.get(regObjects.nextButton).first().click();
})

Cypress.Commands.add('selectArea', () => {
    cy.get('.pac-item').first().click();
    //pac-item is a default class Google uses for each autocomplete suggestion.
})

Cypress.Commands.add('agreeAndSubmit', () => {
  cy.get(restoLocationObjects.agreeCheckbox).click();
  cy.get(restoLocationObjects.submitButton).first().click();
})

Cypress.Commands.add('assertSuccess', () => {
  cy.get(restoLocationObjects.confirmation).should('include.text', 'Success');
})

Cypress.Commands.add('clickRiderRegButton', () => {
  cy.get(riderRegObjects.riderRegButton).click();
})

Cypress.Commands.add('selectCountryCode', () => {
  cy.get(riderRegObjects.countryField).select('Philippines');
})

Cypress.Commands.add('attachDocu', () => {
  cy.get(riderRegObjects.driverlcField).should('be.visible').selectFile('cypress/fixtures/sample.jpg');
  cy.get(riderRegObjects.roadTaxField).should('be.visible').selectFile('cypress/fixtures/sample.jpg');
  cy.get(riderRegObjects.certRegField).should('be.visible').selectFile('cypress/fixtures/sample.jpg');
  cy.get(riderRegObjects.vaccField).should('be.visible').selectFile('cypress/fixtures/sample.jpg');
})


Cypress.on('uncaught:exception', (err, runnable) => {
    // return false to prevent Cypress from failing the test
    return false;
  });

  
  
  
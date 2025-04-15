import { loginObjects } from "../../pageObjects/pageObjects";

//Configs
const creds = Cypress.env('creds');

describe('Authentication Tests', () => {
    beforeEach(() => {
      // Visit the page before each test
      cy.visit('https://dev.rockygo.com/login');
    });
  
    it('should login properly', () => {
      cy.get(loginObjects.usernameField).type(creds.standardUser);
      cy.get(loginObjects.passwordField).type(creds.password);
      cy.clickLoginButton();
    });
  
    it('should not login properly', () => {
        cy.get(loginObjects.usernameField).type(creds.problemUser);
        cy.get(loginObjects.passwordField).type(creds.password);
        cy.clickLoginButton();
      });
  });
  


import { loginObjects } from "../../pageObjects/pageObjects";

//Configs
const creds = Cypress.env('creds');

describe('Pick-up order processing and serve Tests', () => {
    beforeEach(() => {
      // Visit the page before each test
      cy.visit('https://staging.rockygo.com/login');
    });

    it('properly process pick-up orders', () => {
      //login
      cy.get(loginObjects.usernameField).type(creds.stagingUser);
      cy.get(loginObjects.passwordField).type(creds.password);
      cy.clickLoginButton();
      // process dine-in orders [not autoprocess resto]
      cy.processPick_upOrders();
        });

    it('properly serve pick-up orders', () => {
      //login
      cy.get(loginObjects.usernameField).type(creds.stagingUser);
      cy.get(loginObjects.passwordField).type(creds.password);
      cy.clickLoginButton();
      // serve dine-in orders [not autoprocess resto]
      cy.servePick_upOrders();
      
      });

    });
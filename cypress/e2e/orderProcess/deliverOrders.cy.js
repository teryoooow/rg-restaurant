import { loginObjects } from "../../pageObjects/pageObjects";

//Configs
const creds = Cypress.env('creds');

describe('Deliver order processing Tests', () => {
    beforeEach(() => {
      // Visit the page before each test
      cy.visit('https://staging.rockygo.com/login');
    });

    it('properly process delivery orders', () => {
      //login
      cy.get(loginObjects.usernameField).type(creds.stagingUser);
      cy.get(loginObjects.passwordField).type(creds.password);
      cy.clickLoginButton();
      // process delivery orders [not autoprocess resto]
      cy.processDeliverOrders();
        });

    });
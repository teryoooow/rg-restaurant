import { loginObjects } from "../../pageObjects/pageObjects";

//Configs
const creds = Cypress.env('creds');

describe('Dine-in order processing and serve Tests', () => {
    beforeEach(() => {
      // Visit the page before each test
      cy.visit('https://staging.rockygo.com/login');
    });

    it('properly process dine-in orders', () => {
      //login
      cy.get(loginObjects.usernameField).type(creds.stagingUser);
      cy.get(loginObjects.passwordField).type(creds.password);
      cy.clickLoginButton();
      // process dine-in orders [not autoprocess resto]
      cy.processDine_inOrders();
        });

    it('properly serve dine-in orders', () => {
      //login
      cy.get(loginObjects.usernameField).type(creds.stagingUser);
      cy.get(loginObjects.passwordField).type(creds.password);
      cy.clickLoginButton();
      // serve dine-in orders [not autoprocess resto]
      cy.serveDine_inOrders();
      
      });

    });
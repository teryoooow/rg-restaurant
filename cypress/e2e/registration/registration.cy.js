import 'cypress-file-upload';
import { regObjects,regUserObjects, restoLocationObjects } from "../../pageObjects/pageObjects";

//Configs
const data = Cypress.env('data');
const userInfo = Cypress.env('userInfo');
const restoLoc = Cypress.env('restoLoc');

describe('Restaurant Registration Tests', () => {
    beforeEach(() => {
      // Visit the page before each test
      cy.visit('https://dev.rockygo.com/');
    });
  
    it('should register restaurant', () => {
    // find and click application button
      cy.clickApplicationButton();
      // form fill-up
      cy.get(regObjects.businessNameField).type(data.businessName);
      cy.get(regObjects.phoneNumberField).type(data.phoneNumber);
      cy.selectCountry();
      cy.get(regObjects.mobileNumberField).type(data.mobileNumber);
      // image upload
      cy.submitPermits();
      cy.clickNextButton();
      // User information
      cy.get(regUserObjects.firstNameField).first().type(userInfo.firstName, {force:true});
      cy.get(regUserObjects.lastNameField).type(userInfo.lastName);
      cy.get(regUserObjects.emailField).type(userInfo.email);
      cy.get(regUserObjects.passwordField).type(userInfo.password)
      cy.get(regUserObjects.verifyPasswordField).type(userInfo.verifyPassword);
      cy.clickNextButton();
      // Restaurant location
      cy.get(restoLocationObjects.areaField).type(restoLoc.area);
      cy.selectArea();
      cy.get(restoLocationObjects.houseNumField).first().type(restoLoc.houseNumber);
      cy.get(restoLocationObjects.buildingField).type(restoLoc.building);
      cy.get(restoLocationObjects.streetField).type(restoLoc.street);
      cy.get(restoLocationObjects.districtField).type(restoLoc.district);
      cy.get(restoLocationObjects.zipcodeField).type(restoLoc.zipcode);
      cy.agreeAndSubmit();
      // Assert
      cy.assertSuccess();
    });
  
  });
  
import 'cypress-file-upload';
import { riderRegObjects } from "../../pageObjects/pageObjects";

//Configs
const riderInfo = Cypress.env('riderInfo');

describe('Restaurant Registration Tests', () => {
    beforeEach(() => {
      // Visit the page before each test
      cy.visit('https://dev.rockygo.com/');
    });

    it('should register rider', () => {
        // Click Application button
        cy.clickRiderRegButton();
        //Form fill-up
        cy.get(riderRegObjects.firstNameField).type(riderInfo.firstName);
        cy.get(riderRegObjects.lastNameField).type(riderInfo.lastName);
        cy.get(riderRegObjects.emailField).type(riderInfo.email);
        cy.selectCountryCode();
        cy.get(riderRegObjects.contactNumberField).type(riderInfo.contactNumber);
        cy.get(riderRegObjects.areaField).type(riderInfo.area);
        cy.selectArea();
        cy.get(riderRegObjects.houseNumField).type(riderInfo.houseNumber);
        cy.get(riderRegObjects.buildingField).type(riderInfo.building);
        cy.get(riderRegObjects.streetField).type(riderInfo.street);
        cy.get(riderRegObjects.districtField).type(riderInfo.district);
        cy.get(riderRegObjects.zipcodeField).type(riderInfo.zipcode);
        //Rider attachments
        cy.get(riderRegObjects.brandField).type(riderInfo.brand);
        cy.get(riderRegObjects.modelField).type(riderInfo.model);
        cy.get(riderRegObjects.plateField).type(riderInfo.plateNumber);
        cy.get(riderRegObjects.colorField).type(riderInfo.color);
        cy.get(riderRegObjects.licenseNumField).type(riderInfo.licenseNumber);
        //Disability optional
        //attach documents
        cy.attachDocu();

    });

});
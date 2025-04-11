import 'cypress-file-upload';

describe('Registration Tests', () => {
    beforeEach(() => {
      // Visit the page before each test
      cy.visit('https://dev.rockygo.com/');
    });
  
    it('should register properly', () => {
    // find application button
      cy.get('button[data-type="restaurant"]').click()
      // form fill-up
      cy.get('input[name="business_name"]').type('New Restaurant');
      cy.get('input[name="phone_number"]').type('09750035937');
      cy.get('select#area_code_resto').select('Philippines');
      cy.get('input[id="mobile_number_resto"]').type('09750035937');
      //image upload
      const filePath = 'sample.jpg';  // Uploaded on fixtures folder
      cy.get('label[id="uploadLabel"]').invoke('show').should('be.visible').attachFile(filePath);
      // Optionally, assert the image was uploaded or processed correctly
      // cy.get('#previewImageBusiness', {timeout: 10000}).should('have.attr', 'src').and('include', 'sample.jpg');
      cy.get('input[name="certificate_registration"]').invoke('show').should('be.visible').attachFile(filePath);
      cy.get('button[data-type="next"]')
    });
  
  });
  
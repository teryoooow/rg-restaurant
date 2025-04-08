describe('Authentication Tests', () => {
    beforeEach(() => {
      // Visit the page before each test
      cy.visit('https://dev.rockygo.com/login');
    });
  
    it('should login properly', () => {
      cy.get('input[id="userEmail"]').type('ysabel.trackerteer@gmail.com');
      cy.get('input[name="password"]').type('Test1234!');
      cy.get('button[type="submit"]')
    });
  
    it('should not login properly', () => {
        cy.get('input[name="email"]').type('ysabel.trackerteer@gmail.com');
        cy.get('input[name="password"]').type('xxxx');
        cy.get('button[type="submit"]')
      });
  });
  


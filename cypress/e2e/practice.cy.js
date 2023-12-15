describe("Admin_mod" ,()=>{
    // beforeEach(()=>{
    //   cy.Login();
    // })
    it("ABCdef",()=>{
      cy.Login();
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers")
      cy.get('.orangehrm-header-container > .oxd-button').click()
      cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click
      cy.get('.oxd-select-wrapper') // Locate the dropdown wrapper
      .contains('Admin') // Find the option with text 'Admin' within the dropdown
      .click() // Click to select the 'Admin' option
    });
});    
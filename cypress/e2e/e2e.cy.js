describe("Contact Manager e2e testing", () => {
    beforeEach(() => {
    cy.visit("http://localhost:3000") //cy---> predefined cypress object
    })
    it("Should check for login", () => {
    cy.get("#username").type("admin")
    cy.get("#password").type("password")
    cy.get("#btnLogin").click()
    cy.wait(1000)
    // cy.visit("http://localhost:3000/")
    cy.visit("/")
    cy.get("#heading").should("have.text", "Contact List")
    })
    
    it("Should create new Contact",()=>{
    cy.get("#username").type("admin")
    cy.get("#password").type("password")
    cy.get("#btnLogin").click()
    cy.visit("http://localhost:3000/addcontact")
    cy.get("#firstname").type("Sagar")
    cy.get("#lastname").type("K")
    cy.get("#city").type("Mumbai")
    cy.get("#email").type("sagar@gmail.com")
    cy.get("#phone").type("1234567890")
    cy.get("#btnAdd").click()
    cy.get("#heading").should("have.text", "Contact List")
    
    })
    })
    
describe("User can see list of Educations", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.get("#educations-tab").click();
    });
  
    it("displays first education", () => {
      cy.get("#education-1").within(() => {
        cy.get(".image").should("exist");
        cy.get(".name").should("contain", "Craft Academy");
        cy.get(".title").should("contain", "Full Stack Web Developer");
        cy.get(".description").should(
          "contain",
          "12 week Craft Academy BootCamp"
        );
        cy.get(".time").should("contain", "2020");
      });
    });
});
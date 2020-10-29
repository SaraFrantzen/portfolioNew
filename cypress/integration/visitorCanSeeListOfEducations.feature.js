describe("User can see list of Educations", () => {
  xcontext("By visiting educations", () => {
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

  context("By visiting projects", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.get("#projects-tab").click();
    });
    it("displays My Projects header", () => {
      cy.get("#projects-header").should("contain", "Web Development");
    });

    it("displays component name in url", () => {
      cy.url().should("contain", "projects");
    });
  });
});

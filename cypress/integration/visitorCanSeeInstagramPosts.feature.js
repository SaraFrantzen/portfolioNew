describe("User can see Instagram posts", () => {
  const apiKey = process.env.REACT_APP_INSTAGRAM_API_KEY;
  beforeEach(() => {
    cy.visit("/");
    cy.get("#insta-tab").click();
  });

  xcontext("listed on Instagram landingpage", () => {
    beforeEach(() => {
      cy.server();
      cy.route({
        method: "GET",
        url: `https://graph.instagram.com/17867900231025012?fields=id,media_type,media_url,caption,username,timestamp&access_token=${apiKey}`,
        response: "fixture:instagram.json",
      });
    });

    it("displays Instagram picture and caption", () => {
      cy.get("#insta-img").should("exist");
    });
  });

  context("by clicking on one post", () => {
    beforeEach(() => {
      cy.server();
      cy.route({
        method: "GET",
        url: `https://graph.instagram.com/17867900231025012?fields=id,media_url,caption&access_token=${apiKey}`,
        response: "fixture:single_instagram.json",
      });
      });
      it("displays Instagram picture and caption", () => {
        cy.get("[data-cy=media-17867900231025012]").click()
   
        cy.get("[data-cy=insta-caption]").contains("To all my beloved ones. ");
      });
    
  });
});

describe("User can see Instagram posts", () => {
  const apiKey = process.env.REACT_APP_OPEN_CAGE_API_KEY;
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: `https://graph.instagram.com/17867900231025012?fields=id,media_type,media_url,caption,username,timestamp&access_token=${apiKey}`,
      response: "fixture:instagram.json",
    });
    cy.visit("/");
    cy.get("#insta-tab").click();
  });

  it("displays Instagram picture and caption", () => {
    cy.get("#insta-img").should("exist");
    cy.get("#insta-caption").contains("To all my beloved ones. ");
  });
});

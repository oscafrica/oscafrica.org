describe("home page", () => {
  beforeEach(() => {
    // visit root baseURL
    cy.visit("/");
  });

  it('should have text "The Next Billion Creators"', () => {
    cy.contains("The Next Billion Creators");
  });

  it("header should have 8 anchor tags", () => {
    cy.get("header a").should("have.length", 6);
  });
});

describe("Totalizador", () => {
  it("Shows the total to the user", () => {
    cy.visit("/");
    cy.get("#cantidad").type(4);
    cy.get("#precio-unitario").type(5);
    cy.get("#totalizar-button").click();
    cy.get("#resultado-div").should("contain", "20");
  });
});

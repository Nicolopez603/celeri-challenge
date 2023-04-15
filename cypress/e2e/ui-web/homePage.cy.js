/// <reference types="cypress" />

describe("Test Suit Home Page", () => {
  beforeEach(function () {
    cy.visit("/");
  });

  it("Validamos que los elementos importantes sean visibles", function () {
    cy.get("img").should("be.visible");
    cy.get("h4")
      .contains("Bienvenida/o al Onboarding Digital")
      .should("be.visible");
    cy.botonHumana().should("be.visible");
    cy.botonJuridica().should("be.visible");
  });

  it("Validamos que el boton Humana funcione correctamente", function () {
    cy.botonHumana().click();
    cy.get("h6").contains("persona humana").should("be.visible");
    cy.url().then((url) => {
      cy.log(url);
      expect(url).to.contains("/human");
    });
  });

  it("Validamos que el boton Juridica funcione correctamente", function () {
    cy.botonJuridica().click();
    cy.get("h6").contains("persona jurídica").should("be.visible");
    cy.url().then((url) => {
      cy.log(url);
      expect(url).to.contains("/legal");
    });
  });
});

/// <reference types="cypress" />
import homePage from "../../support/pages/homePage";

describe("Test Suite de la Pagina principal", () => {
  beforeEach(function () {
    cy.visit("/");
    cy.location("protocol").should("contains", "https");
  });

  it("Validamos que los elementos importantes sean visibles", function () {
    homePage.elements.imgCeleri().should("be.visible");

    homePage.elements
      .msgWelcome()
      .contains("Bienvenida/o al Onboarding Digital")
      .should("be.visible");

    homePage.elements.botonHumana().should("be.visible");

    homePage.elements.botonJuridica().should("be.visible");
  });

  it("Validamos que el boton 'Humana' nos redireccione correctamente", function () {
    homePage.elements.botonHumana().click();

    cy.location("pathname").should("contains", "/human");
  });

  it("Validamos que el boton 'Juridica' nos redireccione correctamente", function () {
    homePage.elements.botonJuridica().click();

    cy.location("pathname").should("contains", "/legal");
  });
});

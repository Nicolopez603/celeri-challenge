/// <reference types="cypress" />
import paginaPrincipal from "../../support/pages/paginaPrincipal";

describe("Test Suite de la Pagina principal", () => {
  beforeEach(function () {
    cy.visit("/");
    cy.location("protocol").should("contains", "https");
  });

  it("Validamos que los elementos importantes sean visibles", function () {
    paginaPrincipal.elements.imgCeleri().should("be.visible");

    paginaPrincipal.elements
      .msgWelcome()
      .contains("Bienvenida/o al Onboarding Digital")
      .should("be.visible");

    paginaPrincipal.elements.botonHumana().should("be.visible");

    paginaPrincipal.elements.botonJuridica().should("be.visible");
  });

  it("Validamos que el boton 'Humana' nos redireccione correctamente", function () {
    paginaPrincipal.elements.botonHumana().click();

    cy.location("pathname").should("contains", "/human");
  });

  it("Validamos que el boton 'Juridica' nos redireccione correctamente", function () {
    paginaPrincipal.elements.botonJuridica().click();

    cy.location("pathname").should("contains", "/legal");
  });
});

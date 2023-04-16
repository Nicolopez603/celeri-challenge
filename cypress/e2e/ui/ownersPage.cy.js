/// <reference types="cypress" />
import paginaTitulares from "../../support/pages/paginaTitulares";

describe("Test Suite Pagina de Titulares", () => {
  beforeEach(function () {
    cy.visit("human/owners");
    cy.location("protocol").should("contains", "https");
  });

  it("Camino feliz de apertura de cuenta", () => {});
});

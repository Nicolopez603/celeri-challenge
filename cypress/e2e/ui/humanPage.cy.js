/// <reference types="cypress" />

import paginaHumana from "../../support/pages/paginaHumana";

describe("Test Suit de la pagina Humana", () => {
  beforeEach(function () {
    cy.visit("/human");
    cy.location("protocol").should("contains", "https");
  });

  it("Validamos que los elementos principales sean visibles", function () {
    paginaHumana.elements.imgCeleri().should("be.visible");

    paginaHumana.elements.textoTitulares().should("be.visible");

    paginaHumana.elements.botonAgregar().should("be.visible");

    paginaHumana.elements.textoTerminosYCondiciones().should("be.visible");

    paginaHumana.elements.botonSoporte().should("be.visible");

    paginaHumana.elements.botonFormularioIncompleto().should("be.visible");
  });

  it("Validamos que el boton 'Agregar' de Titulares funcione correctamente", function () {
    paginaHumana.elements.botonAgregar().click();

    cy.location("pathname").should("contains", "/human/owners");
  });

  it("Validamos que las alertas de campos requeridos sean visibles", function () {
    const alertSelector = ".MuiAlert-message";

    const alertMessages = [
      "Se necesita al menos un titular para abrir una cuenta.",
      "Se necesita al menos una cuenta bancaria para abrir una cuenta.",
      "Debe completar el perfil del inversor.",
    ];

    alertMessages.forEach((message) => {
      cy.contains(alertSelector, message).should("be.visible");
    });
  });
});

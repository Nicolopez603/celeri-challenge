/// <reference types="cypress" />

describe("Test Suit de la pagina Humana", () => {
  beforeEach(function () {
    cy.visit("/human");
  });

  it("Validamos que los elementos importantes sean visibles", function () {
    cy.get("img").should("be.visible");
    cy.get(".css-fvuq4y > .MuiButton-root").should("be.visible");
    cy.get("h5").contains("Titulares").should("be.visible");
    cy.get(".MuiAlert-message")
      .contains("Se necesita al menos un titular para abrir una cuenta.")
      .should("be.visible");
    cy.get(".MuiAlert-message")
      .contains(
        "Se necesita al menos una cuenta bancaria para abrir una cuenta."
      )
      .should("be.visible");
    cy.get(".MuiAlert-message")
      .contains("Debe completar el perfil del inversor.")
      .should("be.visible");
    cy.get("button").contains("Agregar").should("be.visible");
    cy.get("h5").contains("Términos y Condiciones").should("be.visible");
    cy.get(".MuiTypography-root")
      .contains("El formulario está incompleto")
      .should("be.visible");
    cy.get(".MuiButton-root").contains("Soporte").should("be.visible");
  });

  it("validamos que el boton 'Agregar' de Titulares funcione correctamente", function () {
    cy.get(".MuiButton-root").contains("Agregar").click();
    cy.get('.MuiTypography-h4').contains('Instrucciones').should("be.visible");
  });
});

/// <reference types="cypress" />
import paginaTitulares from "../../support/pages/paginaTitulares";

describe("Test SuitE Pagina de Titulares", () => {
  beforeEach(function () {
    cy.visit("human/owners");
    cy.location("protocol").should("contains", "https");
  });

  it("Camino feliz de apertura de cuenta", () => {
    paginaTitulares.elements.inputDni().type(Cypress.env("user_dni"), {
      log: false,
    });
    
    paginaTitulares.elements.inputCuit().type(Cypress.env("user_cuit"), {
      log: false,
    });
    
    paginaTitulares.elements.inputPrimerNombre().type("Nicolas");
    
    paginaTitulares.elements.inputSegundoNombre().type("Matias");
    
    paginaTitulares.elements.inputApellido().type("Lopez");
    
    paginaTitulares.elements
      .inputTelefono()
      .type(Cypress.env("user_telefono"), {
        log: false,
      });
    paginaTitulares.elements.inputMail().type(Cypress.env("user_mail"), {
      log: false,
    });
    cy.get('[name="es_pep"][value="false"]').check().should("be.checked");

    cy.get('[name="es_fatca"][value="false"]').check().should("be.checked");

    cy.get('[name="es_soi"][value="false"]').check().should("be.checked");

    paginaTitulares.elements.inputCodigoPostal().type("1900");
    paginaTitulares.elements.inputCiudad().type("La Plata");
    paginaTitulares.elements.inputDireccionCalle().type("155");

    //Genero
    cy.get(
      ":nth-child(9) > .flex > .MuiAutocomplete-root > .MuiFormControl-root > .MuiOutlinedInput-root"
    ).type("Masculino");

    // Selecciona y hace clic en la primera opción del dropdown
    cy.get(
      ".MuiAutocomplete-popper .MuiAutocomplete-listbox > :first-child"
    ).click();

    //Estado civil
    cy.get(
      ":nth-child(10) > .flex > .MuiAutocomplete-root > .MuiFormControl-root > .MuiOutlinedInput-root"
    ).type("Soltero");

    cy.get(
      ".MuiAutocomplete-popper .MuiAutocomplete-listbox > :first-child"
    ).click();

    //Pais
    cy.get(
      ":nth-child(3) > .mb-16 > :nth-child(2) > .MuiGrid-container > :nth-child(1) > .flex > .MuiAutocomplete-root > .MuiFormControl-root > .MuiOutlinedInput-root"
    ).type("Argentina");

    cy.get(
      ".MuiAutocomplete-popper .MuiAutocomplete-listbox > :first-child"
    ).click();

    //Provincia - Estado
    cy.get(
      ":nth-child(2) > .flex > .MuiAutocomplete-root > .MuiFormControl-root > .MuiOutlinedInput-root"
    ).type("Buenos aires");

    cy.get(
      ".MuiAutocomplete-popper .MuiAutocomplete-listbox > :first-child"
    ).click();

    //Localidad

    cy.get(
      ":nth-child(3) > .mb-16 > :nth-child(2) > .MuiGrid-container > :nth-child(3) > .flex > .MuiAutocomplete-root > .MuiFormControl-root > .MuiOutlinedInput-root"
    ).type("LA PLATA");

    cy.get(
      ".MuiAutocomplete-popper .MuiAutocomplete-listbox > :first-child"
    ).click();

    //Actividad economica
    cy.get(
      ":nth-child(4) > :nth-child(2) > .MuiGrid-container > .MuiGrid-root > .flex > .MuiAutocomplete-root > .MuiFormControl-root > .MuiOutlinedInput-root"
    ).type("Venta al por mayor de azúcar");

    cy.wait(500);

    cy.get(
      ".MuiAutocomplete-popper .MuiAutocomplete-listbox > :first-child"
    ).click();

    //Boton continuar

    cy.get(".justify-end > .MuiButton-contained").click();
    cy.location("pathname").should("contains", "/human");
  });
});

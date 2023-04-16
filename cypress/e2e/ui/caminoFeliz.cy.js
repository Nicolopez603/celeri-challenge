/// <reference types="cypress" />
import paginaPrincipal from "../../support/pages/paginaPrincipal";
import paginaHumana from "../../support/pages/paginaHumana";
import paginaTitulares from "../../support/pages/paginaTitulares";

describe("Test Suite del camino Feliz", () => {
  beforeEach(function () {
    cy.visit("/");
    cy.location("protocol").should("contains", "https");
  });

  it("Validamos que los elementos principales sean visibles", function () {
    //Primera Pagina
    paginaPrincipal.elements.botonHumana().click();

    cy.location("pathname").should("contains", "/human");

    //Segunda Pagina
    paginaHumana.elements.botonAgregar().click();
    cy.location("pathname").should("contains", "/human/owners");

    //Tercera Pagina

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

    //Cuarta Pagina
    cy.get(
      ':nth-child(2) > .flex > [aria-label="Agregar nuevo"] > .MuiButton-root'
    ).click();
    cy.location("pathname").should("contains", "human/third_party_accounts");

    //CBU
    cy.get(".MuiGrid-grid-md-8")
      .click()
      .type(Cypress.env("user_cbu"), { log: false });

    //Banco
    cy.get(".MuiDialogActions-root > .MuiButton-contained").click();
    cy.get(
      ":nth-child(3) > .flex > .MuiAutocomplete-root > .MuiFormControl-root > .MuiOutlinedInput-root"
    )
      .click()
      .type("Naranja");
    cy.get(
      ".MuiAutocomplete-popper .MuiAutocomplete-listbox > :first-child"
    ).click();

    //Tipo de cuenta
    cy.get(
      ":nth-child(4) > .flex > .MuiAutocomplete-root > .MuiFormControl-root > .MuiOutlinedInput-root"
    ).type("Billetera");
    cy.get(
      ".MuiAutocomplete-popper .MuiAutocomplete-listbox > :first-child"
    ).click();

    //Tipo de moneda
    cy.get(
      ":nth-child(5) > .flex > .MuiAutocomplete-root > .MuiFormControl-root > .MuiOutlinedInput-root"
    ).type("Pesos Argentinos");
    cy.get(
      ".MuiAutocomplete-popper .MuiAutocomplete-listbox > :first-child"
    ).click();

    //Boton Continuar
    cy.get(".justify-end > .MuiButton-contained").click();

    //Quinta Pagina - Perfil del inversor
    cy.get(":nth-child(3) > .flex > .MuiButton-root")
      .contains("Completar")
      .click();
    cy.location("pathname").should("contains", "human/investor_profile");

    //Experiencia en inversiones

    cy.get(
      ":nth-child(1) > .MuiFormControl-root > .MuiFormGroup-root > :nth-child(1) > .MuiRadio-root > .PrivateSwitchBase-input"
    ).check();

    //Grado de conocimiento

    cy.get(
      ":nth-child(2) > .MuiFormControl-root > .MuiFormGroup-root > :nth-child(1) > .MuiRadio-root > .PrivateSwitchBase-input"
    ).check();
    //Opero en bolsa
    cy.get(
      ":nth-child(3) > .MuiFormControl-root > .MuiFormGroup-root > :nth-child(1) > .MuiRadio-root > .PrivateSwitchBase-input"
    ).check();

    //Operaste en acciones?
    cy.get(
      ":nth-child(4) > .MuiFormControl-root > .MuiFormGroup-root > :nth-child(1) > .MuiRadio-root > .PrivateSwitchBase-input"
    ).check();

    //Boton contnuar
    cy.get(".MuiButton-contained").click();

    //Confirmar guardado
    cy.get(".MuiDialogActions-root > .MuiButton-contained").click();

    //Checkbox pantalla humana - Terminos y condiciones
    cy.get(
      ":nth-child(2) > .MuiFormControlLabel-root > .MuiCheckbox-root > .PrivateSwitchBase-input"
    ).check();

    //Checkbox pantalla humana - Politicas y Privacidad
    cy.get(
      ":nth-child(3) > .MuiFormControlLabel-root > .MuiCheckbox-root > .PrivateSwitchBase-input"
    ).check();

    //Boton - Abrir cuenta

    cy.get(".css-fv3lde > .MuiButton-root").click();
  });
});

/// <reference types="cypress" />
import paginaPrincipal from "../../support/pages/paginaPrincipal";
import paginaHumana from "../../support/pages/paginaHumana";

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

    cy.get('input[name="id_number"]').type(Cypress.env("user_dni"), {
      log: false,
    });
    cy.get('input[name="tax_id_number"]').type(Cypress.env("user_cuit"), {
      log: false,
    });
    cy.get('input[name="first_name"]').type("Nicolas");
    cy.get('input[name="last_name"]').type("Lopez");
    cy.get('input[name="middle_name"]').type("Matias");
    cy.get('input[name="phone"]').type(Cypress.env("user_telefono"), {
      log: false,
    });
    cy.get('input[name="email"]').type(Cypress.env("user_mail"), {
      log: false,
    });
    cy.get(
      ":nth-child(1) > .MuiFormControl-root > .MuiFormGroup-root > :nth-child(2) > .MuiRadio-root > .PrivateSwitchBase-input"
    ).check();
    cy.get(
      ":nth-child(3) > .MuiFormControl-root > .MuiFormGroup-root > :nth-child(2) > .MuiRadio-root > .PrivateSwitchBase-input"
    ).check();
    cy.get(
      ":nth-child(2) > .MuiFormControl-root > .MuiFormGroup-root > :nth-child(2) > .MuiRadio-root > .PrivateSwitchBase-input"
    ).check();

    cy.get('input[name="addresses[0].zip_code"]').type("1900");
    cy.get('input[name="addresses[0].city"]').type("La Plata");
    cy.get('input[name="addresses[0].street"]').type("155");

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

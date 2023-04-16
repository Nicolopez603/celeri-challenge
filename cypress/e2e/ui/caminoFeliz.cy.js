/// <reference types="cypress" />
import paginaPrincipal from "../../support/pages/paginaPrincipal";
import paginaHumana from "../../support/pages/paginaHumana";
import paginaTitulares from "../../support/pages/paginaTitulares";

describe("Test Camino Feliz", () => {
  beforeEach(function () {
    cy.visit("/");
    cy.location("protocol").should("contains", "https");
    cy.fixture("/credencialesUsuario").then((credenciales) => {
      this.credenciales = credenciales;
    });
  });

  it("Validamos que los elementos principales sean visibles", function () {
    //Primera Pagina
    paginaPrincipal.elements.botonHumana().click();
    cy.location("pathname").should("contains", "/human");

    //Segunda Pagina
    paginaHumana.elements.botonAgregar().click();
    cy.location("pathname").should("contains", "/human/owners");

    //Tercera Pagina

    paginaTitulares.elements.inputDni().type("42028075", {
      log: false,
    });
    paginaTitulares.elements.inputCuit().type("20-42028075-1", {
      log: false,
    });

    paginaTitulares.elements.inputPrimerNombre().type(this.credenciales.nombre);

    paginaTitulares.elements
      .inputSegundoNombre()
      .type(this.credenciales.segundoNombre);

    paginaTitulares.elements.inputApellido().type(this.credenciales.apellido);

    paginaTitulares.elements.inputTelefono().type("2216790726", {
      log: false,
    });

    paginaTitulares.elements.inputMail().type("nicomlopez33@gmail.com", {
      log: false,
    });

    paginaTitulares.elements
      .checkBoxPoliticamenteExpuesta()
      .check()
      .should("be.checked");

    paginaTitulares.elements
      .checkBoxResidenteFiscalUSA()
      .check()
      .should("be.checked");

    paginaTitulares.elements
      .checkBoxSujetoObligado()
      .check()
      .should("be.checked");

    paginaTitulares.elements
      .inputCodigoPostal()
      .type(this.credenciales.codigoPostal);

    paginaTitulares.elements.inputCiudad().type(this.credenciales.ciudad);

    paginaTitulares.elements
      .inputDireccionCalle()
      .type(this.credenciales.direccionCalle);

    paginaTitulares.elements.inputGenero().type(this.credenciales.genero);

    paginaTitulares.elements.primerElementoDropdown().click();

    paginaTitulares.elements
      .inputEstadoCivil()
      .type(this.credenciales.estadoCivil);
    paginaTitulares.elements.primerElementoDropdown().click();

    paginaTitulares.elements.inputPais().type(this.credenciales.pais);
    paginaTitulares.elements.primerElementoDropdown().click();

    paginaTitulares.elements.inputProvincia().type(this.credenciales.provincia);
    paginaTitulares.elements.primerElementoDropdown().click();

    paginaTitulares.elements.inputLocalidad().type(this.credenciales.ciudad);
    paginaTitulares.elements.primerElementoDropdown().click();

    paginaTitulares.elements
      .inputActividadEconomica()
      .type(this.credenciales.actividadEconomica);
    paginaTitulares.elements.primerElementoDropdown().click();

    paginaTitulares.elements.botonContinuar().click();
    cy.location("pathname").should("contains", "/human");

    //Cuarta Pagina
    cy.get(
      ':nth-child(2) > .flex > [aria-label="Agregar nuevo"] > .MuiButton-root'
    ).click();
    cy.location("pathname").should("contains", "human/third_party_accounts");

    //CBU
    cy.get(".MuiGrid-grid-md-8").click().type(this.credenciales.cbu);

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

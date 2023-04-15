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

    cy.get('input[name="id_number"]').type("42028075{enter}");
    cy.get('input[name="tax_id_number"]').type("20-42028075-1{enter}");
    cy.get('input[name="first_name"]').type("Nicolas");
    cy.get('input[name="last_name"]').type("Lopez");
    cy.get('input[name="middle_name"]').type("Matias");
    cy.get('input[name="phone"]').type("2213163549");
    cy.get('input[name="email"]').type("nicomlopez3@gmail.com");
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
  });
});

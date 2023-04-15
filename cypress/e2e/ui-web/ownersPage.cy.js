/// <reference types="cypress" />

describe("Test Suit Home Page", () => {
  beforeEach(function () {
    cy.visit("human/owners");
  });

  it("should", () => {
    cy.get('input[name="id_number"]').type("42028075{enter}");
    cy.get('input[name="tax_id_number"]').type("20-42028075-1{enter}");
    cy.get('input[name="first_name"]').type("Nicolas");
    cy.get('input[name="last_name"]').type("Lopez");
    cy.get('input[name="middle_name"]').type("Matias");
    cy.get('input[name="phone"]').type("2213163549");
    cy.get(
      ":nth-child(10) > .flex > .MuiAutocomplete-root > .MuiFormControl-root > .MuiOutlinedInput-root"
    ).type("Soltero");
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

    cy.get('[data-testid="ArrowDropDownIcon"]').first().click();

    cy.get('input[name="addresses[0].zip_code"]').type("1900");
    cy.get('input[name="addresses[0].city"]').type("La Plata");
    cy.get('input[name="addresses[0].street"]').type("155");
    cy.get(
      ":nth-child(4) > :nth-child(2) > .MuiGrid-container > .MuiGrid-root > .flex > .MuiAutocomplete-root > .MuiFormControl-root > .MuiOutlinedInput-root"
    ).type("Jubilado");

    cy.get(':nth-child(9) > .flex > .MuiAutocomplete-root > .MuiFormControl-root > .MuiOutlinedInput-root').click().first().click()
  });
});

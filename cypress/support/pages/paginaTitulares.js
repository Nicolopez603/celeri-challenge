class paginaTitulares {
  elements = {
    inputDni: () => cy.get('input[name="id_number"]'),
    inputCuit: () => cy.get('input[name="tax_id_number"]'),
    inputNombre: () => cy.get('input[name="name"]'),
    inputPrimerNombre: () => cy.get('input[name="first_name"]'),
    inputApellido: () => cy.get('input[name="last_name"]'),
    inputSegundoNombre: () => cy.get('input[name="middle_name"]'),
    inputTelefono: () => cy.get('input[name="phone"]'),
    inputMail: () => cy.get('input[name="email"]'),
    inputCodigoPostal: () => cy.get('input[name="addresses[0].zip_code"]'),
    inputCiudad: () => cy.get('input[name="addresses[0].city"]'),
    inputDireccionCalle: () => cy.get('input[name="addresses[0].street"]'),
    checkBoxPoliticamenteExpuesta: () =>
      cy.get('[name="es_pep"][value="false"]'),
    checkBoxResidenteFiscalUSA: () =>
      cy.get('[name="es_fatca"][value="false"]'),
    checkBoxSujetoObligado: () => cy.get('[name="es_soi"][value="false"]'),
    inputEstadoCivil: () =>
      cy.get(
        ":nth-child(10) > .flex > .MuiAutocomplete-root > .MuiFormControl-root > .MuiOutlinedInput-root"
      ),
    inputGenero: () =>
      cy.get(
        ":nth-child(9) > .flex > .MuiAutocomplete-root > .MuiFormControl-root > .MuiOutlinedInput-root"
      ),
    inputPais: () =>
      cy.get(
        ":nth-child(3) > .mb-16 > :nth-child(2) > .MuiGrid-container > :nth-child(1) > .flex > .MuiAutocomplete-root > .MuiFormControl-root > .MuiOutlinedInput-root"
      ),
    inputProvincia: () =>
      cy.get(
        ":nth-child(2) > .flex > .MuiAutocomplete-root > .MuiFormControl-root > .MuiOutlinedInput-root"
      ),
    inputLocalidad: () =>
    cy.get(':nth-child(3) > .mb-16 > :nth-child(2) > .MuiGrid-container > :nth-child(3) > .flex > .MuiAutocomplete-root > .MuiFormControl-root > .MuiOutlinedInput-root'),
    inputActividadEconomica: () =>
      cy.get(
        ":nth-child(4) > :nth-child(2) > .MuiGrid-container > .MuiGrid-root > .flex > .MuiAutocomplete-root > .MuiFormControl-root > .MuiOutlinedInput-root"
      ),
    botonContinuar: () => cy.get(".justify-end > .MuiButton-contained"),
    primerElementoDropdown: () =>
      cy.get(".MuiAutocomplete-popper .MuiAutocomplete-listbox > :first-child"),
  };
}

export default new paginaTitulares();

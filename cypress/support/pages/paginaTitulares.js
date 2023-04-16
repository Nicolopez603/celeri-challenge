class paginaTitulares {
  elements = {
    inputDni: () => cy.get('input[name="id_number"]'),
    inputCuit: () =>  cy.get('input[name="tax_id_number"]'),
    inputNombre: () => cy.get('input[name="name"]'),
    inputPrimerNombre: () => cy.get('input[name="first_name"]'),
    inputApellido: () => cy.get('input[name="last_name"]'),
    inputSegundoNombre: () => cy.get('input[name="middle_name"]'),
    inputTelefono: () => cy.get('input[name="phone"]'),
    inputMail: () => cy.get('input[name="email"]'),
    inputCodigoPostal: () => cy.get('input[name="addresses[0].zip_code"]'),
    inputCiudad: () => cy.get('input[name="addresses[0].city"]'),
    inputDireccionCalle: () => cy.get('input[name="addresses[0].street"]'),
  };
}

export default new paginaTitulares();

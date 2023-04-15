class paginaPrincipal {
  elements = {
    imgCeleri: () => cy.get("img"),
    msgWelcome : () => cy.get("h4"),
    botonHumana : () => cy.get('.css-1fkas3c'),
    botonJuridica : () =>cy.get('.css-ybddb6')
  };
}

export default new paginaPrincipal();

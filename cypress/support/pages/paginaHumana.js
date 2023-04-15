class paginaHumana {

    elements = 
{
    imgCeleri: () => cy.get("img"),
    textoTitulares: () => cy.get(":nth-child(1) > .flex > .MuiTypography-root"),
    textoCuentaBancarias: () => cy.get(":nth-child(2) > .flex > .MuiTypography-root"),
    textoPerfilDelInversor: () => cy.get(":nth-child(3) > .flex > .MuiTypography-root"),
    textoTerminosYCondiciones: () => cy.get(".pb-64 > .MuiTypography-root"),
    botonAgregar: () => cy.get('[aria-label="Agregar nuevo"] > .MuiButton-root'),
    botonSoporte: () => cy.get('.css-fvuq4y > .MuiButton-root'),
    botonFormularioIncompleto: () => cy.get('.css-fv3lde > .MuiBox-root')
};
}

export default new paginaHumana();

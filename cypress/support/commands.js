Cypress.Commands.add("botonHumana", () => {
  cy.get("button").contains("Humana");
});

Cypress.Commands.add("botonJuridica", () => {
  cy.get("button").contains("Jurídica");
});

/// <reference types="cypress" />
import "cypress-mochawesome-reporter/register";

Cypress.Commands.add("dataCy", value => cy.get(`[data-cy=${value}]`));

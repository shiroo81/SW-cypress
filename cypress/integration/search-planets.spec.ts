import * as planets from "../fixtures/planets.json";

describe("Given there is Star Wars information needed", () => {
  planets.forEach(planet => {
    describe("When I search for Star Wars planets", () => {
      it(`should find all ${planet.name}'s details in the results`, () => {
        cy.dataCy("radioPlanets").click();
        cy.dataCy("inputSearch")
          .clear()
          .type(planet.name);

        cy.intercept({
          method: "GET",
          url: "https://swapi.dev/api/planets/*"
        }).as("getPlanets");

        cy.get("button")
          .contains("Search")
          .click();
        cy.wait("@getPlanets");

        cy.dataCy("planetName").should("have.text", planet.name);
        cy.dataCy("population").contains(planet.population);
        cy.dataCy("climate").contains(planet.climate);
        cy.dataCy("gravity").contains(planet.gravity);
      });

      beforeEach(() => {
        cy.visit("");
        cy.title().should("eq", "TntAssignment");
      });
    });
  });
});

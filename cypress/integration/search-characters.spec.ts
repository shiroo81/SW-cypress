import * as characters from "../fixtures/characters.json";

describe("Given there is Star Wars information needed", () => {
  characters.forEach(character => {
    describe("When I search for Star Wars characters", () => {
      it(`should find all ${character.name}'s details in the results`, () => {
        cy.dataCy("radioPeople").click();
        cy.dataCy("inputSearch")
          .clear()
          .type(character.name);

        cy.intercept({
          method: "GET",
          url: "https://swapi.dev/api/people/*"
        }).as("getCharacters");

        cy.get("button")
          .contains("Search")
          .click();
        cy.wait("@getCharacters");

        cy.dataCy("characterName").should("have.text", character.name);
        cy.dataCy("gender").contains(character.gender);
        cy.dataCy("birtyYear").contains(character.birth_year);
        cy.dataCy("eyeColor").contains(character.eye_color);
        cy.dataCy("skinColor").contains(character.skin_color);
      });

      beforeEach(() => {
        cy.visit("");
        cy.title().should("eq", "TntAssignment");
      });
    });
  });
});

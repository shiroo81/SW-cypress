import * as fuzzytext from "../fixtures/fuzzytexts.json";

describe("Given there is Star Wars information needed", () => {
  fuzzytext.forEach(fuzzy => {
    describe("When I search for fuzzy text", () => {
      it(`should find no results in people when searching for: ${fuzzy.name}`, () => {
        cy.dataCy("radioPeople").click();
        cy.dataCy("inputSearch")
          .clear()
          .type(`fuzzy.name{enter}`);

        cy.intercept("GET", "https://swapi.dev/api/people/*", request => {
          request.continue(response => {
            expect(
              response.body.to.include(
                '"count":0,"next":null,"previous":null,"results":[]'
              )
            );
          });
          expect(cy.get("div").contains("Not found"));
        });
      });

      it(`should find no results in planets when searching for: ${fuzzy.name}`, () => {
        cy.dataCy("radioPlanets").click();
        cy.dataCy("inputSearch")
          .clear()
          .type(`fuzzy.name{enter}`);

        cy.intercept("GET", "https://swapi.dev/api/planets/*", request => {
          request.continue(response => {
            expect(
              response.body.to.include(
                '"count":0,"next":null,"previous":null,"results":[]'
              )
            );
          });
          expect(cy.get("div").contains("Not found"));
        });
      });

      beforeEach(() => {
        cy.visit("");
        cy.title().should("eq", "TntAssignment");
      });
    });
  });
});

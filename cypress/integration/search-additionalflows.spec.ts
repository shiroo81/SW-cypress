describe("Given there is Star Wars information needed", () => {
  describe("When I search for partial text", () => {
    it(`should find multiple results in people when searching for: ee`, () => {
      cy.dataCy("radioPeople").click();
      cy.dataCy("inputSearch")
        .clear()
        .type(`ee{enter}`);

      cy.intercept("GET", "https://swapi.dev/api/people/*", request => {
        request.continue(response => {
          expect(
            response.body.to.include(
              '[{"name":"Greedo","height":"173","mass":"74","hair_color":"n/a","skin_color":"green","eye_color":"black","birth_year":"44BBY","gender":"male","homeworld":"https://swapi.dev/api/planets/23/","films":["https://swapi.dev/api/films/1/"],"species":["https://swapi.dev/api/species/4/"],"vehicles":[],"starships":[],"created":"2014-12-10T17:03:30.334000Z","edited":"2014-12-20T21:17:50.336000Z","url":"https://swapi.dev/api/people/15/"},{"name":"Eeth Koth","height":"171","mass":"unknown","hair_color":"black","skin_color":"brown","eye_color":"brown","birth_year":"unknown","gender":"male","homeworld":"https://swapi.dev/api/planets/45/","films":["https://swapi.dev/api/films/4/","https://swapi.dev/api/films/6/"],"species":["https://swapi.dev/api/species/22/"],"vehicles":[],"starships":[],"created":"2014-12-20T10:26:47.902000Z","edited":"2014-12-20T21:17:50.427000Z","url":"https://swapi.dev/api/people/54/"},{"name":"Saesee Tiin","height":"188","mass":"unknown","hair_color":"none","skin_color":"pale","eye_color":"orange","birth_year":"unknown","gender":"male","homeworld":"https://swapi.dev/api/planets/47/","films":["https://swapi.dev/api/films/4/","https://swapi.dev/api/films/6/"],"species":["https://swapi.dev/api/species/24/"],"vehicles":[],"starships":[],"created":"2014-12-20T10:32:11.669000Z","edited":"2014-12-20T21:17:50.434000Z","url":"https://swapi.dev/api/people/56/"},{"name":"Barriss Offee","height":"166","mass":"50","hair_color":"black","skin_color":"yellow","eye_color":"blue","birth_year":"40BBY","gender":"female","homeworld":"https://swapi.dev/api/planets/51/","films":["https://swapi.dev/api/films/5/"],"species":["https://swapi.dev/api/species/29/"],"vehicles":[],"starships":[],"created":"2014-12-20T16:46:40.440000Z","edited":"2014-12-20T21:17:50.457000Z","url":"https://swapi.dev/api/people/65/"}]'
            )
          );
        });
      });
    });

    it(`should find multiple results in planets when searching for: ee`, () => {
      cy.dataCy("radioPlanets").click();
      cy.dataCy("inputSearch")
        .clear()
        .type(`ee{enter}`);

      cy.intercept("GET", "https://swapi.dev/api/planets/*", request => {
        request.continue(response => {
          expect(
            response.body.to.include(
              '[{"name":"Mygeeto","rotation_period":"12","orbital_period":"167","diameter":"10088","climate":"frigid","gravity":"1 standard","terrain":"glaciers, mountains, ice canyons","surface_water":"unknown","population":"19000000","residents":[],"films":["https://swapi.dev/api/films/6/"],"created":"2014-12-10T13:43:39.139000Z","edited":"2014-12-20T20:58:18.446000Z","url":"https://swapi.dev/api/planets/16/"},{"name":"Aleen Minor","rotation_period":"unknown","orbital_period":"unknown","diameter":"unknown","climate":"unknown","gravity":"unknown","terrain":"unknown","surface_water":"unknown","population":"unknown","residents":["https://swapi.dev/api/people/47/"],"films":[],"created":"2014-12-20T09:52:23.452000Z","edited":"2014-12-20T20:58:18.483000Z","url":"https://swapi.dev/api/planets/38/"},{"name":"Glee Anselm","rotation_period":"33","orbital_period":"206","diameter":"15600","climate":"tropical, temperate","gravity":"1","terrain":"lakes, islands, swamps, seas","surface_water":"80","population":"500000000","residents":["https://swapi.dev/api/people/53/"],"films":[],"created":"2014-12-20T10:18:26.110000Z","edited":"2014-12-20T20:58:18.495000Z","url":"https://swapi.dev/api/planets/44/"},{"name":"Kalee","rotation_period":"23","orbital_period":"378","diameter":"13850","climate":"arid, temperate, tropical","gravity":"1","terrain":"rainforests, cliffs, canyons, seas","surface_water":"unknown","population":"4000000000","residents":["https://swapi.dev/api/people/79/"],"films":[],"created":"2014-12-20T19:43:51.278000Z","edited":"2014-12-20T20:58:18.523000Z","url":"https://swapi.dev/api/planets/59/"}]'
            )
          );
        });
      });
    });

    it(`should return not found when switching from planets to people after searching`, () => {
      cy.dataCy("radioPlanets").click();
      cy.dataCy("inputSearch")
        .clear()
        .type(`ee{enter}`);

      cy.intercept("GET", "https://swapi.dev/api/planets/*", request => {
        request.continue(response => {
          expect(
            response.body.to.include(
              '[{"name":"Mygeeto","rotation_period":"12","orbital_period":"167","diameter":"10088","climate":"frigid","gravity":"1 standard","terrain":"glaciers, mountains, ice canyons","surface_water":"unknown","population":"19000000","residents":[],"films":["https://swapi.dev/api/films/6/"],"created":"2014-12-10T13:43:39.139000Z","edited":"2014-12-20T20:58:18.446000Z","url":"https://swapi.dev/api/planets/16/"},{"name":"Aleen Minor","rotation_period":"unknown","orbital_period":"unknown","diameter":"unknown","climate":"unknown","gravity":"unknown","terrain":"unknown","surface_water":"unknown","population":"unknown","residents":["https://swapi.dev/api/people/47/"],"films":[],"created":"2014-12-20T09:52:23.452000Z","edited":"2014-12-20T20:58:18.483000Z","url":"https://swapi.dev/api/planets/38/"},{"name":"Glee Anselm","rotation_period":"33","orbital_period":"206","diameter":"15600","climate":"tropical, temperate","gravity":"1","terrain":"lakes, islands, swamps, seas","surface_water":"80","population":"500000000","residents":["https://swapi.dev/api/people/53/"],"films":[],"created":"2014-12-20T10:18:26.110000Z","edited":"2014-12-20T20:58:18.495000Z","url":"https://swapi.dev/api/planets/44/"},{"name":"Kalee","rotation_period":"23","orbital_period":"378","diameter":"13850","climate":"arid, temperate, tropical","gravity":"1","terrain":"rainforests, cliffs, canyons, seas","surface_water":"unknown","population":"4000000000","residents":["https://swapi.dev/api/people/79/"],"films":[],"created":"2014-12-20T19:43:51.278000Z","edited":"2014-12-20T20:58:18.523000Z","url":"https://swapi.dev/api/planets/59/"}]'
            )
          );
        });
      });
      cy.dataCy("radioPeople").click();
      cy.get("button")
        .contains("Search")
        .click();

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
    beforeEach(() => {
      cy.visit("");
      cy.title().should("eq", "TntAssignment");
    });
  });
});

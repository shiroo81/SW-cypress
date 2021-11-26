declare namespace Cypress {
    interface Chainable<Subject = any> {
      dataCy(value: string): Chainable<Element>;
    }
  }
  
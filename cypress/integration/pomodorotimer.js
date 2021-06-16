/// <reference types="cypress" />

describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  // Feature 1:

  // Timer in middle of screen
  // Start button is present
  // Set initially to 25:00 (make configurable)
  // Click on start button
  // Timer value is not the same
  it("Start Timer", () => {
    // observe starting time
    cy.get("[data-cy=timer-view]").should("have.text", "25:00");

    // click on start button
    cy.get("[data-cy=start]").click();

    // observe starting time
    cy.get("[data-cy=timer-view]").should("have.text", "25:00");
  });
});

// @flow

describe('Popover Component Test', () => {
  beforeEach(() => {
    cy.visit(
      'http://localhost:9001/iframe.html?selectedKind=Components%20%2F%20Popover&selectedStory=Left-aligned&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel',
    );
    cy.get('[data-test-popover-content]').should('not.be.visible');
  });

  it('should toggle on trigger click', () => {
    cy.get('#toggle').click();
    cy.get('[data-test-popover-content]').should('be.visible');
    cy.get('#toggle').click();
    cy.get('[data-test-popover-content]').should('not.be.visible');
  });

  it('should close on document click', () => {
    cy.get('#toggle').click();
    cy.get('[data-test-popover-content]').should('be.visible');
    cy.get('body').click();
    cy.get('[data-test-popover-content]').should('not.be.visible');
  });

  it('should close on Esc keypress', () => {
    cy.get('#toggle').click();
    cy.get('[data-test-popover-content]').should('be.visible');
    cy.get('body').type('{esc}');
    cy.get('[data-test-popover-content]').should('not.be.visible');
  });
});

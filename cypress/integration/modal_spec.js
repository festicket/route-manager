// @flow

describe('Modal component Test', () => {
  beforeEach(() => {
    cy.visit(
      'http://localhost:9001/iframe.html?selectedKind=Components%20%2F%20Modal&selectedStory=default&full=1&addons=0&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Fac',
    );
    cy.get('#modal-content').should('not.be.visible');
    cy.get('button.modal-button').click();
  });

  it('should open on click', () => {
    cy.get('#modal-content').should('be.visible');
  });

  it('should close the modal on click', () => {
    cy.get('#modal-close').click();
    cy.get('#modal-content').should('not.be.visible');
  });
});

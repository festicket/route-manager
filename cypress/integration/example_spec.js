// @flow

describe('Simple Test', () => {
  it('should work', () => {
    cy.visit('http://localhost:9001');
    expect(true).to.equal(true);
  });
});

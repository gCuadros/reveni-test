describe('Reveni app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('frontpage can be opened', () => {
    cy.contains('Welcome');
  });

  it('order check', () => {
    cy.get('form input[name="email"]').type('john.doe@example.com', {
      force: true
    });
    cy.get('form input[name="order"]').type('727', { force: true });
    cy.get('form button').click({ force: true });
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/order');
    });
  });
});

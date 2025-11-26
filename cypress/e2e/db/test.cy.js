describe('test db', () => {

  beforeEach(() => {
  })

  it('[DB] test', () => {
    cy.task('queryDb', { query: 'SELECT * FROM Location' })
    .then((rows) => {
        // rows é um array de objetos
    });
  })
});
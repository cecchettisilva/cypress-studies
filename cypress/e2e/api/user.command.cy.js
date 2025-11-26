/// <reference types="cypress" />


describe('Petstore - user endpoints', () => {
  
  beforeEach(() => {

  })

  it('[GET] Get user details by username - returns 200 with details', () => {
    cy.getUserByUserName('william.cecchetti').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('username', 'william.cecchetti')
    })
  })
})
/// <reference types="cypress" />

import { UserApi } from '../../support/services/user.api';

describe('Petstore - user endpoints', () => {

  const api = new UserApi();

  beforeEach(() => {

  })

  it('[GET] Get user details by username - returns 200 with details', () => {
    api.getUserByUserName('william.cecchetti').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('username', 'william.cecchetti')
    })
  })
})
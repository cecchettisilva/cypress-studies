import { payloadCreatePet } from '../../fixtures/paylodCreatePet';

export class UserApi {
  getUserByUserName(userName, failOnStatusCode = false) {
    return cy.api({
      method: 'GET', 
      url: `${Cypress.config('baseUrl')}/v2/user/${userName}`, 
      failOnStatusCode})
      .as('getUserByUserName')
  }
}

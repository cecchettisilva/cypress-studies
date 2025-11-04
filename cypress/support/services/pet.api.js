import { payloadCreatePet } from '../../fixtures/paylodCreatePet';

export class PetApi {
  addNewPet() {
    return cy.api({
        method: 'POST', 
        url: `${Cypress.config('baseUrl')}/v2/pet`, 
        body: payloadCreatePet})
        .as('addNewPet')
  }
  getPetById(petId, failOnStatusCode = false) {
    return cy.api({
        method: 'GET', 
        url: `${Cypress.config('baseUrl')}/v2/pet/${petId}`, 
        failOnStatusCode})
        .as('getPetById')
  }
  deletePet(petId, failOnStatusCode = false) {
    return cy.api({ 
        method: 'DELETE', 
        url: `${Cypress.config('baseUrl')}/v2/pet/${petId}`, 
        failOnStatusCode })
        .as('deletePet')
  }
}

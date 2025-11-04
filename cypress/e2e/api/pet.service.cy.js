/// <reference types="cypress" />

import petSchema from '../../support/schemas/pet.json';
import petSchema400 from '../../support/schemas/petError.json';
import { assertSchema } from '../../support/schemas/schema';
import { PetApi } from '../../support/services/pet.api';


describe('Petstore - pet endpoints', () => {

  const api = new PetApi();

  beforeEach(() => {
  })

  it('[POST] Add pet - returns 200 with details - matches contract', () => {
    api.addNewPet().then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.not.be.empty
      assertSchema(petSchema, response.body)
    })
  })

  it('[GET] Get pet by id - return 404 - matches contract', () => {
    api.getPetById('97360').then((response) => {
      expect(response.status).to.eq(404)
        expect(response.body.code).to.eq(1)
        expect(response.body.type).to.eq('error')
        expect(response.body.message).to.eq('Pet not found')
        assertSchema(petSchema400, response.body)
    })
  })

  it('[GET] Get pet by id - return 200 with details - 500ms of responsiveness at least', () => {
    api.getPetById('241184').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.duration).be.lessThan(500)
    })
  })

  it('[DELETE] Delete pet - return 200 with details - validate idempotency', () => {
    api.addNewPet().then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.not.be.empty

        const petId = response.body.id;
        const maxRetries = 7;
        let attempts = 0;

        const deletePetWithRetry = () => {
          api.deletePet(petId).then((deleteResponse) => {
              if (deleteResponse.status === 200) {
                  expect(deleteResponse.status).to.eq(200);
              } else {
                  attempts++;
                  if (attempts < maxRetries) {
                      cy.wait(2000);
                      deletePetWithRetry();
                  } else {
                    throw new Error('Failed to delete pet after multiple attempts')
                }
              }
          });
        };

      deletePetWithRetry();
      
      cy.wait(1000);

      api.deletePet(petId).then((deleteResponse) => {
        expect(deleteResponse.status).to.eq(404)
      })
    })
  })
});
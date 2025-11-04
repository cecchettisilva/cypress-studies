export const payloadCreatePet = {
    "id": Cypress.faker.number.int(),
    "category": {
        "id": Cypress.faker.number.int({ max: 99999 }),
        "name": Cypress.faker.animal.type()
    },
    "name": Cypress.faker.animal.petName(),
    "photoUrls": [
        "string"
    ],
    "tags": [
        {
        "id": Cypress.faker.number.int({ max: 99999 }),
        "name": "test"
        }
    ],
    "status": "available"
}
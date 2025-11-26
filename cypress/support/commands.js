// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('getUserByUserName', (username) => { 
    return cy.api({
        method: 'GET',
        url: `${Cypress.config('baseUrl')}/v2/user/${username}`,
        failOnStatusCode: false
    }).as('getUserByUserName')
})

Cypress.Commands.add('addNewPet', () => { 
    return cy.api({
        method: 'POST',
        url: `${Cypress.config('baseUrl')}/v2/pet`,
        failOnStatusCode: false,
            body: {
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
        },
    }).as('addNewPet')
})

Cypress.Commands.add('deletePet', (petId) => { 
    return cy.api({
        method: 'DELETE',
        url: `${Cypress.config('baseUrl')}/v2/pet/${petId}`,
        failOnStatusCode: false
    }).as('deletePet')
})

Cypress.Commands.add('getPetById', (petId) => { 
    return cy.api({
        method: 'GET',
        url: `${Cypress.config('baseUrl')}/v2/pet/${petId}`,
        failOnStatusCode: false
    }).as('getPetById')
})
/*
Access README_DB.md to create and execute the DB SQL. 
*/

describe('GIS database validation - happy and negative flows', () => {

  it('CT1 - Should insert a valid location, read it back and delete', () => {

    const categories = ['CITY','STORE','WAREHOUSE','POINT_OF_INTEREST'];
    const locationName = `${Cypress.faker.location.city()} Test Location`;
    const latitude = parseFloat(Cypress.faker.location.latitude());
    const longitude = parseFloat(Cypress.faker.location.longitude());
    const category = Cypress.faker.helpers.arrayElement(categories);
    const regionId = 1;
    const isActive = 1;

    const insertQuery = `
      INSERT INTO Location (name, region_id, latitude, longitude, category, is_active)
      VALUES ('${locationName}', ${regionId}, ${latitude}, ${longitude}, '${category}', ${isActive});

      SELECT SCOPE_IDENTITY() AS insertedId;
      `;

    cy.task('queryDb', { query: insertQuery }).then((result) => {

      // Debug log
      cy.log('INSERT Result:', JSON.stringify(result));

        expect(result).to.be.an('array');
        expect(result.length).to.be.greaterThan(0);
        expect(result[0]).to.have.property('insertedId');
    
        const insertedId = result[0].insertedId;
        cy.log('✅ Inserted ID:', insertedId);
    
        const selectQuery = `
        SELECT TOP 1 *
        FROM Location
        WHERE location_id = ${insertedId}
        `;

      cy.task('queryDb', { query: selectQuery }).then((rows) => {
        expect(rows.length).to.be.greaterThan(0);
        const row = rows[0];

        expect(row.name).to.equal(locationName);
        expect(row.category).to.equal(category);
        expect(row.latitude).to.be.closeTo(latitude, 0.000001);
        expect(row.longitude).to.be.closeTo(longitude, 0.000001);
      });

      cy.log('✅ Data validated successfully');

      const deleteQuery = `
      DELETE FROM Location
      WHERE location_id = ${insertedId}
      `

      cy.task('queryDb', {query: deleteQuery}).then((result) => {
        expect(result.success).to.be.true;
        expect(result.rowsAffected).to.equal(1);
      })

      cy.log('✅ Deletion verified - record not found');
    });
  });

  it('CT2 - Insert a invalid category and returns a error message', () => {

    const locationName = `${Cypress.faker.location.city()} Test Location`;
    const latitude = parseFloat(Cypress.faker.location.latitude());
    const longitude = parseFloat(Cypress.faker.location.longitude());
    const category = Cypress.faker.commerce.department();
    const regionId = 1;
    const isActive = 1;

    const insertQuery = `
      INSERT INTO Location (name, region_id, latitude, longitude, category, is_active)
      VALUES ('${locationName}', ${regionId}, ${latitude}, ${longitude}, '${category}', ${isActive});
      `;

    cy.task('queryDb', { query: insertQuery }).then((result) => {
        expect(result.error).to.be.true;
        expect(result.message).to.include('The INSERT statement conflicted with the CHECK constraint "CHK_Location_Category".');

        cy.log('✅ Error validated successfully:', result.message);
    });
  });

});

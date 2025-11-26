import Ajv from 'ajv';
const ajv = new Ajv({ allErrors: true, strict: false });

export function assertSchema(schema, data) {
  const validate = ajv.compile(schema);
  const ok = validate(data);
  
  if (!ok) {
    Cypress.log({
      name: '❌ Schema Validation',
      message: 'Failed',
      consoleProps: () => ({
        Errors: validate.errors,
        Schema: schema,
        Data: data
      })
    });
    throw new Error('Schema validation failed:\n' + JSON.stringify(validate.errors, null, 2));
  }

  Cypress.log({
    name: '✅ Schema Validation',
    message: 'Passed',
    consoleProps: () => ({
      Schema: schema,
      Data: data
    })
  });
}

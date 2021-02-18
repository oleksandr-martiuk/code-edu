import Ajv from 'ajv';

export default class SchemaValidatorService {
  constructor () {
    this.ajv = Ajv({
      allErrors: true,
      removeAdditional: 'all'
    });

    this.ajv.addKeyword('notEmpty', {
      type: 'string',
      validate: function validate (schema, data) {
        validate.errors = [{keyword: 'notEmpty', message: 'should NOT be an empty'}];
        return typeof data === 'string' && data.trim() !== '';
      },
      errors: true
    });

    this.ajv.addKeyword('validEmail', {
      type: 'string',
      validate: function validate (schema, email) {
        validate.errors = [{keyword: 'validEmail', message: `Email '${email}' is not valid`}];
        const re = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&''*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
        return re.test(email);
      },
      errors: true
    });

    this.ajv.addKeyword('trimValue', {
      type: 'string',
      errors: false,
      modifying: true,
      schema: false,
      valid: true,
      validate: (value, dataPath, object, key) => {
        object[key] = value.trim();
      }
    });
  }

  isValid (schema, data) {
    return this.ajv.validate(schema, data);
  }

  getFormattedErrors () {
    return this.parseSchemaErrors(this.ajv.errors);
  }

  parseSchemaErrors (schemaErrors) {
    if (schemaErrors === null) {
      return [];
    }

    return schemaErrors.map(err => ({
      field: err.dataPath,
      message: err.message
    }));
  }
}

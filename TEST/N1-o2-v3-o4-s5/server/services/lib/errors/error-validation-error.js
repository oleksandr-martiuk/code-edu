'use strict';

import { UNPROCESSABLE_ENTITY } from './response/statuses';
import ErrorGeneric from './error-generic';

/**
 * A constructor of an error class specific for 422 (Unprocessable Entity) response
 * @param {string|undefined} [message] A human-readable description of the error
 * @param {object[]|undefined} errors An array of error messages
 */
export default class ErrorValidationError extends ErrorGeneric {
  constructor (message = 'Validation failed', errors = undefined) {
    super(message, UNPROCESSABLE_ENTITY);

    this.errors = errors;
  }
}

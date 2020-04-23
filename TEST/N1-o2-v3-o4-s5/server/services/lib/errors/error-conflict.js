'use strict';

import { CONFLICT } from './response/statuses';
import ErrorGeneric from './error-generic';

export default class ErrorConflict extends ErrorGeneric {
  /**
   * A constructor of an error class specific for 409 (Conflict) response
   * @param {string|undefined} [message] A human-readable description of the error
   */
  constructor (message = 'Conflict') {
    super(message, CONFLICT);
  }
}

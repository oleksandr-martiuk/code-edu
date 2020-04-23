'use strict';

import { INT_SERVER_ERROR } from './response/statuses';
import ErrorGeneric from './error-generic';

export default class ErrorServerError extends ErrorGeneric {
  /**
   * A constructor of an error class specific for 500 (Internal Server Error) response
   * @param {string|undefined} [message] A human-readable description of the error
   */
  constructor (message = 'An internal error occurred on the server') {
    super(message, INT_SERVER_ERROR);
  }
}

'use strict';

import { NOT_FOUND } from './response/statuses';
import ErrorGeneric from './error-generic';

export default class ErrorNotFound extends ErrorGeneric {
  /**
   * A constructor of an error class specific for 404 (Not Found) response
   * @param {string|undefined} [message] A human-readable description of the error
   */
  constructor (message = 'Resource not found') {
    super(message, NOT_FOUND);
  }
}

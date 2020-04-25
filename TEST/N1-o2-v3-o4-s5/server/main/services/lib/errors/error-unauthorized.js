'use strict';

import {UNAUTHORIZED} from './response/statuses';
import ErrorGeneric from './error-generic';

export default class ErrorUnauthorized extends ErrorGeneric {
  /**
   * A constructor of an error class specific for 401 (Unauthorized) response
   * @param {string|undefined} [message] A human-readable description of the error
   */
  constructor (message = 'Request is unauthorized') {
    super(message, UNAUTHORIZED);
  }
}

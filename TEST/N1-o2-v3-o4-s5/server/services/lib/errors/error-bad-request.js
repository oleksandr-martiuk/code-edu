'use strict';

import { BAD_REQUEST } from './response/statuses';
import ErrorGeneric from './error-generic';

export default class ErrorBadRequest extends ErrorGeneric {
  /**
   * A constructor of an error class specific for 400 (Bad Request) response
   * @param {string|undefined} [message] A human-readable description of the error
   */
  constructor (message = 'Bad Request') {
    super(message, BAD_REQUEST);
  }
}

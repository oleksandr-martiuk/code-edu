'use strict';

import {FORBIDDEN} from './response/statuses';
import ErrorGeneric from './error-generic';

export default class ErrorForbidden extends ErrorGeneric {
  /**
   * A constructor of an error class specific for 403 (Forbidden) response
   * @param {string|undefined} [message] A human-readable description of the error
   */
  constructor (message = 'Operation not permitted') {
    super(message, FORBIDDEN);
  }
}

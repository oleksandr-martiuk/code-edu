'use strict';

import { INT_SERVER_ERROR } from './response/statuses';

export default class ErrorGeneric extends Error {
  constructor (message, code = INT_SERVER_ERROR) {
    super(message);

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ErrorGeneric);
    }

    this.message = message;
    this.code = code;
  }
}

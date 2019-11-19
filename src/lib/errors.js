'use strict'

exports.ErrorObject = {
  ENDPOINT_NOT_IMPLEMENTED: {
    errorCode: 2001,
    errorDescription: 'Service requested is not supported by the server'
  },
  BAD_METHOD_IMPLEMENTATION: {
    errorCode: 3107,
    errorDescription: 'Scheme-mandatory extension parameter was missing or Invalid Injected Method'
  }
}

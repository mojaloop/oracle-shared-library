function buildErrorObject (error, extensionList) {
  return {
    errorInformation: {
      errorCode: error.errorCode,
      errorDescription: error.errorDescription,
      extensionList
    }
  }
}

module.exports = { buildErrorObject }

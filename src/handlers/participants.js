'use strict'

const participants = require('../domain/participants/index')
const Utils = require('../lib/utils')
const Errors = require('../lib/errors')
/**
 * Operations on /participants
 */
module.exports = {
  /**
   * summary: Batch create participant information
   * description: The HTTP request POST /participants is used to create information in the server regarding the provided list of identities. This request should be used for bulk creation of FSP information for more than one Party. The optional currency parameter should indicate that each provided Party supports the currency
   * parameters: accept, content-type, date, fspiop-source, body, content-length, x-forwarded-for, fspiop-destination, fspiop-encryption, fspiop-signature, fspiop-uri, fspiop-http-method
   * produces: application/json
   * responses: 201, 405, 401, 403, 404, 405, 406, 501, 503
   */
  post: async function ParticipantsPost (request, h) {
    const postBulkParticipantFunction = request.server.app.postBulkParticipantFunction

    try {
      if (postBulkParticipantFunction == null) {
        return h.response(Utils.buildErrorObject(Errors.ErrorObject.ENDPOINT_NOT_IMPLEMENTED, [{ key: request.payload.requestId, value: request.payload.partyList }])).code(501)
      }
      const participant = await participants.postParticipants(postBulkParticipantFunction, request, h)
      return h.response(participant)
    } catch (err) {
      console.log('err', err)
      return h.response(Utils.buildErrorObject(Errors.ErrorObject.BAD_METHOD_IMPLEMENTATION, [{ key: request.payload.requestId, value: request.payload.partyList }])).code(405)
    }
  }
}

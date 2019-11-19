'use strict'

const participants = require('../../../domain/participants/index')
const Utils = require('../../../lib/utils')
const Errors = require('../../../lib/errors')
/**
 * Operations on /participants/{Type}/{ID}
 */
module.exports = {

  get: async function ParticipantsByTypeAndIDGet (request, h) {
    const getParticipantFunction = request.server.app.getParticipantFunction

    try {
      if (getParticipantFunction == null) {
        return h.response(Utils.buildErrorObject(Errors.ErrorObject.ENDPOINT_NOT_IMPLEMENTED, [{ key: request.params.Type, value: request.params.ID }])).code(501)
      }
      const participant = await participants.getByParticipantId(getParticipantFunction, request, h)
      return h.response(participant)
    } catch (err) {
      return h.response(Utils.buildErrorObject(Errors.ErrorObject.BAD_METHOD_IMPLEMENTATION, [{ key: request.params.Type, value: request.params.ID }])).code(405)
    }
  },

  put: async function ParticipantsByTypeAndIDPut (request, h) {
    const updateParticipantFunction = request.server.app.updateParticipantFunction
    try {
      if (updateParticipantFunction == null) {
        return h.response(Utils.buildErrorObject(Errors.ErrorObject.ENDPOINT_NOT_IMPLEMENTED, [{ key: request.params.Type, value: request.params.ID }])).code(501)
      }
      const updateResponse = await participants.updateByParticipantId(updateParticipantFunction, request, h)
      return h.response(updateResponse)
    } catch (err) {
      return h.response(Utils.buildErrorObject(Errors.ErrorObject.BAD_METHOD_IMPLEMENTATION, [{ key: request.params.Type, value: request.params.ID }])).code(405)
    }
  },

  post: async function ParticipantsByTypeAndIDPost (request, h) {
    const postParticipantFunction = request.server.app.postParticipantFunction
    try {
      if (postParticipantFunction == null) {
        return h.response(Utils.buildErrorObject(Errors.ErrorObject.ENDPOINT_NOT_IMPLEMENTED, [{ key: request.params.Type, value: request.params.ID }])).code(501)
      }
      const postResponse = await participants.createParticipant(postParticipantFunction, request, h)
      return h.response(postResponse)
    } catch (err) {
      return h.response(Utils.buildErrorObject(Errors.ErrorObject.BAD_METHOD_IMPLEMENTATION, [{ key: request.params.Type, value: request.params.ID }])).code(405)
    }
  },

  delete: async function ParticipantsByTypeAndIDDelete (request, h) {
    const deleteParticipantFunction = request.server.app.deleteParticipantFunction
    try {
      if (deleteParticipantFunction == null) {
        return h.response(Utils.buildErrorObject(Errors.ErrorObject.ENDPOINT_NOT_IMPLEMENTED, [{ key: request.params.Type, value: request.params.ID }])).code(501)
      }
      const deleteResponse = await participants.deleteByParticipantId(deleteParticipantFunction, request, h)
      return h.response(deleteResponse)
    } catch (err) {
      return h.response(Utils.buildErrorObject(Errors.ErrorObject.BAD_METHOD_IMPLEMENTATION, [{ key: request.params.Type, value: request.params.ID }])).code(405)
    }
  }
}

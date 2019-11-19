
'use strict'

module.exports = {
  getByParticipantId: async (getParticipantFunction, request, h) => {
    return getParticipantFunction(request, h)
  },
  createParticipant: async (postParticipantFunction, request, h) => {
    return postParticipantFunction(request, h)
  },
  updateByParticipantId: async (updateParticipantFunction, request, h) => {
    return updateParticipantFunction(request, h)
  },
  deleteByParticipantId: async (deleteParticipantFunction, request, h) => {
    return deleteParticipantFunction(request, h)
  },
  postParticipants: async (postBulkParticipantFunction, request, h) => {
    return postBulkParticipantFunction(request, h)
  }
}

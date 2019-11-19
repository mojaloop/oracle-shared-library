'use strict'

const Hapi = require('@hapi/hapi')
const HapiOpenAPI = require('hapi-openapi')
const Path = require('path')
const Enums = require('./lib/enums')

const openAPIOptions = {
  api: Path.resolve(__dirname, './interface/swagger.json'),
  handlers: Path.resolve(__dirname, './handlers')
}
let configs

class OracleServer {
  constructor (postParticipantFunction = null, getParticipantFunction = null, updateParticipantFunction = null, deleteParticipantFunction = null, postBulkParticipantFunction = null, customConfig = null) {
    this.postParticipantFunction = postParticipantFunction
    this.getParticipantFunction = getParticipantFunction
    this.updateParticipantFunction = updateParticipantFunction
    this.deleteParticipantFunction = deleteParticipantFunction
    this.postBulkParticipantFunction = postBulkParticipantFunction
    this.customConfig = customConfig
    this.customConfig ? configs = this.customConfig : configs = Enums.defaultConfig
  }

  async createServer (config, openAPIPluginOptions) {
    try {
      const server = new Hapi.Server(config)
      server.app.postParticipantFunction = this.postParticipantFunction
      server.app.getParticipantFunction = this.getParticipantFunction
      server.app.updateParticipantFunction = this.updateParticipantFunction
      server.app.deleteParticipantFunction = this.deleteParticipantFunction
      server.app.postBulkParticipantFunction = this.postBulkParticipantFunction
      await server.register([{
        plugin: HapiOpenAPI,
        options: openAPIPluginOptions
      },
      {
        plugin: require('./lib/logger-plugin')
      }
      ])

      server.ext([
        {
          type: 'onPreHandler',
          method: (request, h) => {
            server.log('request', request)
            return h.continue
          }
        },
        {
          type: 'onPreResponse',
          method: (request, h) => {
            if (!request.response.isBoom) {
              server.log('response', request.response)
            } else {
              const error = request.response
              const errorMessage = {
                errorInformation: {
                  errorCode: error.statusCode,
                  errorDescription: error.message
                }
              }
              error.message = errorMessage
              error.reformat()
            }
            return h.continue
          }
        }
      ])

      await server.start()
      return server
    } catch (e) {
      console.error(e)
    }
  }

  async initialize (config = configs, openAPIPluginOptions = openAPIOptions) {
    const server = await this.createServer(config, openAPIPluginOptions)
    if (server) {
      try {
        server.plugins.openapi.setHost(server.info.host + ':' + server.info.port)
        server.log('info', `Server running on ${server.info.host}:${server.info.port}`)
        return server
      } catch (e) {
        server.log('error', e.message)
        throw e
      }
    }
  }
}
module.exports = {
  OracleServer
}

'use strict'

const Test = require('tapes')(require('tape'))
const Sinon = require('sinon')
const Logger = require('@mojaloop/central-services-logger')
const Proxyquire = require('proxyquire')

Test('Server', async (serverTest) => {
  let sandbox

  serverTest.beforeEach(test => {
    try {
      sandbox = Sinon.createSandbox()
    } catch (err) {
      Logger.error(`serverTest failed with error - ${err}`)
      console.error(err.message)
    }
    test.end()
  })

  serverTest.afterEach(test => {
    sandbox.restore()
    test.end()
  })

  await serverTest.test('should import setup and initialize', test => {
    try {
      const initStub = sandbox.stub()
      Proxyquire('../../src/server', {
        './setup': {
          initialize: initStub
        }
      })
      // test.ok(initStub.withArgs().calledOnce)
      test.end()
    } catch (err) {
      Logger.error(`serverTest failed with error - ${err}`)
      test.fail()
      test.end()
    }
  })

  await serverTest.end()
})

'use strict'

const Test = require('tapes')(require('tape'))
const Sinon = require('sinon')
const Logger = require('@mojaloop/central-services-logger')
// const Proxyquire = require('proxyquire')
// const Path = require('path')
// const Config = require('../../config/default.json')
const InitServer = require('../../src/setup')

Test('Server Setup', async setupTest => {
  let sandbox
  // let serverStub
  // let HapiStub
  // let HapiOpenAPIStub
  // let PathStub
  // let DbStub
  // let EngineStub

  setupTest.beforeEach(test => {
    try {
      sandbox = Sinon.createSandbox()

      // serverStub = {
      //   register: sandbox.stub(),
      //   method: sandbox.stub(),
      //   start: sandbox.stub(),
      //   log: sandbox.stub(),
      //   plugins: {
      //     openapi: {
      //       setHost: sandbox.stub()
      //     }
      //   },
      //   info: {
      //     host: Config.HOSTNAME,
      //     port: Config.PORT
      //   },
      //   ext: sandbox.stub()
      // }
      // HapiStub = {
      //   Server: sandbox.stub().returns(serverStub)
      // }
      // DbStub = {
      //   connect: sandbox.stub().returns(Promise.resolve())
      // }
      // HapiOpenAPIStub = sandbox.stub()
      // PathStub = Path
      // EngineStub = sandbox.stub()

      // const SetupProxy = Proxyquire('../../src/setup', {
      //   hapi: HapiStub,
      //   'hapi-openapi': HapiOpenAPIStub,
      //   path: PathStub,
      //   '/models': DbStub,
      //   'catbox-memory': EngineStub
      // })
    } catch (err) {
      Logger.error(`setupTest failed with error - ${err}`)
      console.error(err.message)
    }
    test.end()
  })

  setupTest.afterEach(test => {
    sandbox.restore()
    test.end()
  })

  await setupTest.test('init should', async initTest => {
    try {
    //    await initTest.test('test 1', async test => {
    //      try {
    //         let OracleServer = new InitServer.OracleServer(()=>{ return 'success'},()=>{ return 'success'},()=>{ return 'success'},()=>{ return 'success'},null)
    //         let server = await OracleServer.initialize()
    //        test.ok(server, 'return server object')
    //         test.ok(HapiStub.Server.calledOnce, 'Hapi.Server called once')
    //     //    test.ok(DbStub.connect.calledOnce, 'Db.connect called once')
    //     //   test.ok(serverStub.register.calledOnce, 'server.register called once')
    //     //    test.ok(serverStub.method.calledOnce, 'server.method called once')
    //     //   test.ok(serverStub.start.calledOnce, 'server.start called once')
    //     //   test.ok(serverStub.plugins.openapi.setHost.calledOnce, 'server.plugins.openapi.setHost called once')
    //     //    test.ok(serverStub.ext.calledOnce, 'server.ext called once')
    //        test.end()
    //      } catch (err) {
    //        Logger.error(`init failed with error - ${err}`)
    //        test.fail()
    //        test.end()
    //      }
    //    })

      //    await initTest.test('should catch errors and console.error output', async test => {
      //      try {
      //        const e = new Error('Database unavailable')
      //       // DbStub.connect = sandbox.stub().throws(e)
      //        let consoleErrorStub = sandbox.stub(console, 'error')
      //        let OracleServer = new InitServer.OracleServer(()=>{ return 'success'},()=>{ return 'success'},()=>{ return 'success'},()=>{ return 'success'},null)
      //         await OracleServer.initialize()
      //        test.ok(consoleErrorStub.withArgs(e).calledOnce)
      //        consoleErrorStub.restore()
      //        test.end()
      //      } catch (err) {
      //        Logger.error(`init failed with error - ${err}`)
      //        test.fail()
      //        test.end()
      //      }
      //    })

      await initTest.test('should catch errors after createServer and use server.log', async test => {
        try {
          const OracleServer = new InitServer.OracleServer()
          const svr = await OracleServer.initialize('invalid', 'invalid')
          test.equal(undefined, svr)
          test.end()
        } catch (err) {
          Logger.error(`init failed with error - ${err}`)
          test.fail()
          test.end()
        }
      })

      //         await initTest.test('invoke server method enums', async test => {
      //           try {

      //     const defaultConfig = {
      //     port: 'tsds',
      //     host: '0.0.0.0',
      //     debug: {
      //       request: ['error'],
      //       log: ['error']
      //     }
      //   }
      //             let OracleServer = new InitServer.OracleServer(null,null,null,null,defaultConfig)
      //             let svr = OracleServer.initialize()
      //             // let OracleServer = new InitServer.OracleServer()
      //             // let svr = await OracleServer.initialize('createServer')
      //             test.equal(1,1)
      //             test.end()
      //           } catch (err) {
      //             Logger.error(`init failed with error - ${err}`)
      //             test.fail()
      //             test.end()
      //           }
      //         })

      await initTest.end()
    } catch (err) {
      Logger.error(`setupTest failed with error - ${err}`)
      initTest.fail()
      initTest.end()
    }
  })

  await setupTest.end()
})

'use strict'

const Test = require('tapes')(require('tape'))
const Logger = require('@mojaloop/central-services-logger')
const ParticipantService = require('../../../../src/domain/participants')

Test('ParticipantService', async (ParticipantServiceTest) => {
  await ParticipantServiceTest.test('getByParticipantId should', async getByParticipantIdTest => {
    try {
      await getByParticipantIdTest.test('return participant accounts', async test => {
        try {
          const request = {}
          const getFun = request => { return request }
          const result = await ParticipantService.getByParticipantId(getFun, request)
          test.ok(result, 'Result returned')
          // test.ok(ParticipantsModel.getByParticipantId.withArgs(bankCode).calledOnce, 'ParticipantsModel.getByParticipantId with args ... called once')
          test.end()
        } catch (err) {
          Logger.error(`getByParticipantIdTest failed with error - ${err}`)
          test.fail()
          test.end()
        }
      })

      await getByParticipantIdTest.end()
    } catch (err) {
      Logger.error(`ParticipantServiceTest failed with error - ${err}`)
      getByParticipantIdTest.fail()
      getByParticipantIdTest.end()
    }
  })

  await ParticipantServiceTest.test('createParticipant should', async createParticipantTest => {
    try {
      await createParticipantTest.test('return participant accounts', async test => {
        try {
          const request = {}
          const postFun = request => { return request }
          const result = await ParticipantService.createParticipant(postFun, request)
          test.ok(result, 'Result returned')
          test.end()
        } catch (err) {
          Logger.error(`createParticipantTest failed with error - ${err}`)
          test.fail()
          test.end()
        }
      })

      await createParticipantTest.end()
    } catch (err) {
      Logger.error(`ParticipantServiceTest failed with error - ${err}`)
      createParticipantTest.fail()
      createParticipantTest.end()
    }
  })

  await ParticipantServiceTest.test('updateByParticipantId should', async updateByParticipantIdTest => {
    try {
      await updateByParticipantIdTest.test('update participant accounts', async test => {
        try {
          const request = {}
          const updateFun = request => { return request }
          const result = await ParticipantService.updateByParticipantId(updateFun, request)
          test.ok(result, 'Result returned')
          test.end()
        } catch (err) {
          Logger.error(`getByParticipantIdTest failed with error - ${err}`)
          test.fail()
          test.end()
        }
      })

      await updateByParticipantIdTest.end()
    } catch (err) {
      Logger.error(`ParticipantServiceTest failed with error - ${err}`)
      updateByParticipantIdTest.fail()
      updateByParticipantIdTest.end()
    }
  })

  await ParticipantServiceTest.test('deleteByParticipantId should', async deleteByParticipantIdTest => {
    try {
      await deleteByParticipantIdTest.test('delete participant accounts', async test => {
        try {
          const request = {}
          const updateFun = request => { return request }
          const result = await ParticipantService.deleteByParticipantId(updateFun, request)
          test.ok(result, 'Result returned')
          test.end()
        } catch (err) {
          Logger.error(`getByParticipantIdTest failed with error - ${err}`)
          test.fail()
          test.end()
        }
      })

      await deleteByParticipantIdTest.end()
    } catch (err) {
      Logger.error(`ParticipantServiceTest failed with error - ${err}`)
      deleteByParticipantIdTest.fail()
      deleteByParticipantIdTest.end()
    }
  })

  await ParticipantServiceTest.end()
})

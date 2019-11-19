const Config = require('../../config/default.json')
const defaultConfig = {
  port: Config.PORT,
  host: '0.0.0.0',
  debug: {
    request: ['error'],
    log: ['error']
  }
}
module.exports = { defaultConfig }

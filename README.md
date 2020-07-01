# Shared-als-oracle


Shared code for Account Lookup Oracles

- [Deployment](#deployment)
- [Environment Variables](#Environment-variables)
- [Usage](#usage)
- [Tests](#tests)

## Deployment

TBA

## Environment Variables

Currently config is set in `./config/default.json`

## Usage

Import Shared Oracle Library library:
```javascript
const  sharedOracle  = require('@mojaloop/oracle-shared-library')
```

Instantiate required class:
```javascript
let OracleServer = new sharedOracle.OracleServer()
```

Initialize server method to start oracle with default config:
```JAVASCRIPT
OracleServer.initialize()

```

Usage example with default config:
Note 1: Server will return not Implemented for all methods, use host machine IP and random Port to start service. 

```javascript
const  sharedOracle  = require('@mojaloop/oracle-shared-library')
let OracleServer = new sharedOracle.OracleServer() 
// You may also start null params in OracleServer()
// let OracleServer = new sharedOracle.OracleServer(null,null,null,null,null) 
OracleServer.initialize()
```

Usage example with Inject all functions and custom server config:
```javascript
const  sharedOracle  = require('@mojaloop/oracle-shared-library')

const createFun = (request) => {
    console.log('create got called');
    return 'create got called'
};
const getFun = (request) => {
    console.log('get got called');
    return 'get got called'
};
const updateFun = (request) => {
    console.log('update got called');
    return 'update got called'
};
const deletFunc = (request) => {
console.log('delete got called');
    return 'delete got called'
};

const postBulkFunc = (request) => {
console.log('post bulk got called');
    return 'post bulk got called'
};
const customConfig = {
    port: 3050,
    host: '0.0.0.0',
    cache: [
      {
        name: 'memCache',
        engine: require('catbox-memory'),
        partition: 'cache'
      } ,
    debug: {
      request: ['error'],
      log: ['error']
    }
  }
let OracleServer = new sharedOracle.OracleServer(createFun,getFun,updateFun,deletFunc,postBulkFunc, customConfig)
OracleServer.initialize()
```

Usage example with only account resolution aka get function and custom server config:
Note : Server will start with custom config, get mothod and other methods return unimplemented.
```javascript
const  sharedOracle  = require('@mojaloop/oracle-shared-library')

const getFun = (request) => {
    console.log('get got called');
    return 'get got called'
};

const customConfig = {
    port: 3050,
    host: '0.0.0.0',
    cache: [
      {
        name: 'memCache',
        engine: require('catbox-memory'),
        partition: 'cache'
      } ,
    debug: {
      request: ['error'],
      log: ['error']
    }
  }
let OracleServer = new sharedOracle.OracleServer(null,getFun,null,null,null,customConfig)
OracleServer.initialize()
```

## Tests

Running the tests:

    npm run test:unit
    npm run test:coverage
        
Tests include code coverage via istanbul. See the test/unit/ folder for testing scripts.

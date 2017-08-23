'use strict';
/*eslint no-process-env:0*/

import path from 'path';
import _ from 'lodash';

/*function requiredProcessEnv(name) {
  if(!process.env[name]) {
    throw new Error('You must set the ' + name + ' environment variable');
  }
  return process.env[name];
}*/

// All configurations will extend these options
// ============================================
var all = {
  env: process.env.NODE_ENV,

  // Root path of server
  root: path.normalize(`${__dirname}/../../..`),

  // Browser-sync port
  browserSyncPort: process.env.BROWSER_SYNC_PORT || 3000,

  // Server port
  port: process.env.PORT || 9000,

  // Server IP
  ip: process.env.IP || '0.0.0.0',

  // Should we populate the DB with sample data?
  seedDB: false,

  // Secret for session, you will want to change this and make it an environment variable
  secrets: {
    session: 'amankaushal-secret'
  },

  // MongoDB connection options
  mongo: {
    options: {
      db: {
        safe: true
      }
    }
  },
  mysql: {
    db: 'blog',
    user: 'root',
    password: null,
    host: 'localhost',
    dialect: 'mysql',
    timezone: "+05:30",
    seederStorage: 'sequelize',
    supportBigNumbers: true,
  },
  auth: {
    google: {
      scope: 'https://www.googleapis.com/auth/plus.me https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/contacts.readonly',
      redirect_uri: 'http://localhost:3000/api/auth/google/callback',
      client_id: '314717213800-ioja19ir5u6kgtq0728p2oe8ku90nvpg.apps.googleusercontent.com',
      client_secret: '8jBw4mLqjawTe8vRpIiL4pKd',
    }
  }
};

// Export the config object based on the NODE_ENV
// ==============================================
module.exports = _.merge(
  all,
  require('./shared'),
  require(`./${process.env.NODE_ENV}.js`) || {});

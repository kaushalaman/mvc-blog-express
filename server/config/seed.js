/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import sqldb from '../sqldb';
sqldb.User.sync();
sqldb.AccessToken.sync();
sqldb.Article.sync();
sqldb.Comment.sync();

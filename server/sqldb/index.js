import _ from 'lodash';
import { mysql } from '../config/environment';
import Sequelize from 'sequelize';

const db = {
  Sequelize,
  sequelize: new Sequelize(mysql.db, mysql.user, mysql.password, mysql)
};

[
  'User', 'AccessToken', 'Article', 'Comment'
].forEach(model =>
  (db[model] = db.sequelize.import(`../api/${_.camelCase(model)}/${_.camelCase(model)}.model`)));

Object.keys(db).forEach((modelName) => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

module.exports = db;



const moment = require('moment');

module.exports = function AccessTokenModel(sequelize, DataTypes) {
  const AccessToken = sequelize.define('AccessToken', {
    id: {
      type: DataTypes.INTEGER(14),
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    accessToken: {
      type: DataTypes.STRING(256),
      allowNull: false,
    },
    refreshToken: {
      type: DataTypes.STRING(256),
      allowNull: true,
    },
    expires: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: function setExpires() {
        return moment().add(1, 'hours');
      },
    },
  }, {
    tableName: 'access_tokens',
    timestamps: true,

    classMethods: {
      associate(db) {
        AccessToken.belongsTo(db.User, {
          foreignKey: 'userId',
        });
      },
    },
  });

  return AccessToken;
};

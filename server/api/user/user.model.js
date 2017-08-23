export default function (sequelize, DataTypes) {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    gender: DataTypes.STRING,
    email: DataTypes.STRING,
    googleId: DataTypes.STRING,
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    link: DataTypes.STRING,
  }, {
    tableName: 'users',
    timestamps: true,
    paranoid: true,
    classMethods: {
      associate(db) {
        this.db = db;
      },
    },
  });

  return User;
}

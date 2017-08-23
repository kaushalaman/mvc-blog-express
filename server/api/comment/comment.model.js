export default function (sequelize, DataTypes) {
  const Comment = sequelize.define('Comment', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    text: DataTypes.STRING,
  }, {
    tableName: 'comments',
    timestamps: true,
    paranoid: true,
    classMethods: {
      associate(db) {
        this.db = db;
        Comment.belongsTo(db.User, {
          foreignKey: 'userId',
        });
        Comment.belongsTo(db.Article, {
          foreignKey: 'articleId',
        });
      },
    },
  });

  return Comment;
}

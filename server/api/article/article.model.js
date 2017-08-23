export default function (sequelize, DataTypes) {
  const Article = sequelize.define('Article', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
  }, {
    tableName: 'articles',
    timestamps: true,
    paranoid: true,
    classMethods: {
      associate(db) {
        this.db = db;
        Article.belongsTo(db.User, {
          foreignKey: 'userId',
        });
      },
    },
  });

  return Article;
}

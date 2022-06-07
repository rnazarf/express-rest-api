'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GiftRating extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Gift, {
        foreignKey: 'id',
        as: 'gift'
      });
    }
  }
  GiftRating.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    user_id: DataTypes.INTEGER,
    gift_id: DataTypes.INTEGER,
    rating: DataTypes.FLOAT,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'GiftRating',
    tableName: 'gift_ratings'
  });
  return GiftRating;
};
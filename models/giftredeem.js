'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GiftRedeem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  GiftRedeem.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    user_id: DataTypes.INTEGER,
    gift_id: DataTypes.INTEGER,
    qty: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'GiftRedeem',
    tableName: 'gift_redeems'
  });
  return GiftRedeem;
};
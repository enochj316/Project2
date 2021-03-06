'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Friends extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
        Friends.belongsTo(models.Users, {
          foreignKey: {
            allowNull : false
          }
        })
    }
  };
  Friends.init({
    first_name: {type: DataTypes.STRING,
      allowNull: false},
    last_name: {type: DataTypes.STRING,
        allowNull: false},
    img_url: {type: DataTypes.STRING,
        allowNull: false},
  }, {
    sequelize,
    modelName: 'Friends',
  });
  return Friends;
};
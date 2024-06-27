'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tasks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
    }
  }
  Tasks.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    dueDate: DataTypes.DATE,
    priority: DataTypes.BOOLEAN,
    userId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    isCompleted: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Tasks',
  });
  return Tasks;
};
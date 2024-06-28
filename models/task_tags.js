'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task_Tags extends Model {
    static associate(models) {}
  }
  Task_Tags.init({
    taskId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Task_Tags',
  });
  return Task_Tags;
};
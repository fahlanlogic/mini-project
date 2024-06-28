'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tasks extends Model {
    static associate(models) {
      Tasks.belongsTo(models.User, { foreignKey: "userId" });
      Tasks.belongsTo(models.Categories, { foreignKey: "categoryId" });
      Tasks.belongsToMany(models.Tags, {
        through: "Task_Tags",
        foreignKey: "taskId",
        as: "Tags",
      });
    } 
  }
  Tasks.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      dueDate: DataTypes.DATE,
      priority: DataTypes.BOOLEAN,
      userId: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
      isCompleted: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Tasks",
    }
  );
  return Tasks;
};
const { Tasks } = require("../../../models");

class TodoControllers {
  static getAll = async (req, res) => {
    try {
      const tasks = await Tasks.findAll();
      return res.status(200).json({ data: tasks });
    } catch (error) {
      console.error(error);
    }
  };

  static create = async (req, res) => {
    try {
      const { title, description } = req.body;

      if (title.trim() === "" || description.trim() === "") {
        return res.status(400).json({ message: "Please check your input" });
      }

      const newtask = await Tasks.create(req.body);
      return res.status(201).json({ message: "Task created", data: newtask });
    } catch (error) {
      console.error(error);
    }
  };
}

module.exports = TodoControllers;

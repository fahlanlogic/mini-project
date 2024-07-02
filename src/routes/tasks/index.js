const TodoControllers = require("../../controllers/tasks");

const router = require("express").Router();

router.get("/todos", TodoControllers.getAll);
router.post("/todos", TodoControllers.create);

module.exports = router;

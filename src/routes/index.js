const express = require("express");
const tasksRouter = require("./tasks");

const router = express.Router();

router.use("/api/", tasksRouter);

module.exports = router;

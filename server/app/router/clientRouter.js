const express = require("express");

const router = express.Router();

const clientActions = require("../controllers/clientActions");

router.get("/", clientActions.browse);

router.get("/:id", clientActions.read);

router.post("/", clientActions.add);

router.put("/:id", clientActions.edit);

router.delete("/:id", clientActions.destroy);

module.exports = router;

const express = require("express");

const router = express.Router();

const adminActions = require("../controllers/clientActions");

router.get("/profile", adminActions.read);

router.get("/", adminActions.browse);

router.get("/:id", adminActions.read);

router.post("/", adminActions.add);

router.put("/:id", adminActions.edit);

router.delete("/:id", adminActions.destroy);

module.exports = router;

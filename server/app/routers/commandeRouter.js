const express = require("express");

const router = express.Router();

const commandeActions = require("../controllers/commandeActions");

router.get("/", commandeActions.browse);

router.get("/:id", commandeActions.read);

router.post("/", commandeActions.add);

router.put("/:id", commandeActions.edit);

router.delete("/:id", commandeActions.destroy);

module.exports = router;

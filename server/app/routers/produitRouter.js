const express = require("express");

const router = express.Router();

const produitActions = require("../controllers/produitActions");

router.get("/", produitActions.browse);

router.get("/:id", produitActions.read);

router.post("/", produitActions.add);

router.put("/:id", produitActions.edit);

router.delete("/:id", produitActions.destroy);

module.exports = router;

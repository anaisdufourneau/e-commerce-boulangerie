const express = require("express");

const router = express.Router();

const categorieActions = require("../controllers/categorieActions");

router.get("/", categorieActions.browse);

router.get("/:id", categorieActions.read);

router.post("/", categorieActions.add);

router.put("/:id", categorieActions.edit);

module.exports = router;

const express = require("express");

const router = express.Router();

const clientRouter = require("./clientRouter");
const adminRouter = require("./adminRouter");
const commandeRouter = require("./commandeRouter");
const produitRouter = require("./produitRouter");

router.use("/client", clientRouter);
router.use("/admin", adminRouter);
router.use("/commande", commandeRouter);
router.use("/produit", produitRouter);

module.exports = router;

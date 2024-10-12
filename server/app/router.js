const express = require("express");

const router = express.Router();

const clientRouter = require("./router/clientRouter");
const adminRouter = require("./router/adminRouter");
const commandeRouter = require("./router/commandeRouter");
const produitRouter = require("./router/produitRouter");
const categorieRouter = require("./router/categorieRouter");
const uploadRouter = require("./router/uploadRouter");

router.use("/client", clientRouter);
router.use("/admin", adminRouter);
router.use("/commande", commandeRouter);
router.use("/produit", produitRouter);
router.use("/categorie", categorieRouter);
router.use("/upload", uploadRouter);

module.exports = router;

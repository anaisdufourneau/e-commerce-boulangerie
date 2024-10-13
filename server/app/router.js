const express = require("express");

const router = express.Router();

const userRouter = require("./router/userRouter");
const commandeRouter = require("./router/commandeRouter");
const produitRouter = require("./router/produitRouter");
const categorieRouter = require("./router/categorieRouter");
const uploadRouter = require("./router/uploadRouter");
const authRouter = require("./router/authRouter");

router.use("/user", userRouter);
router.use("/commande", commandeRouter);
router.use("/produit", produitRouter);
router.use("/categorie", categorieRouter);
router.use("/upload", uploadRouter);
router.use("/auth", authRouter);

module.exports = router;

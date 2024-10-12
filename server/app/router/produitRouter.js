const express = require("express");
const path = require("path");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const { verifyToken } = require("../services/auth");
const produitActions = require("../controllers/produitActions");

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/upload/");
  },
  filename: (req, file, cb) => {
    const id = uuidv4();
    const filename = `${id}${path.extname(file.originalname)}`;
    cb(null, filename);
    req.body.filename = filename;
  },
});

const upload = multer({ storage });

router.get("/", produitActions.browse);

router.get("/:id", produitActions.read);

router.get("/random", produitActions.readRandom);

router.post("/", verifyToken, upload.single("file"), produitActions.add);

router.put("/:id", produitActions.edit);

router.delete("/:id", produitActions.destroy);

module.exports = router;

const express = require("express");

const router = express.Router();

const clientRouter = require("./clientRouter");
const adminRouter = require("./adminRouter");

router.use("/client", clientRouter);
router.use("/admin", adminRouter);

module.exports = router;

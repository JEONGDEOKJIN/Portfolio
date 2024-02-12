const router = require("express").Router();

const { PortfolioMeta } = require("../controllers");

router.get("/", getPortfolioMeta);

router.post("/", postPortfolioMeta);

module.exports = router;

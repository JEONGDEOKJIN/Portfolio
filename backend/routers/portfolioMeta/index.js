import express from "express";

import { postPortfolioMeta } from "../../controllers/portfolioMeta/index.js";

const router = express.Router()

router.post("/", postPortfolioMeta);


export default router;

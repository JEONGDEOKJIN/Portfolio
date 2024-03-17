import express from "express"
import multer from "multer"
import { postFeedbackMessage } from "../../controllers/feedbackMessage/index.js";
// import {postFeedbackMessage} from "../../controllers/postFeedbackMessage/index.js"

const upload = multer() // multer 초기화
const router = express.Router();

router.post("/" , upload.none(), postFeedbackMessage);

export default router
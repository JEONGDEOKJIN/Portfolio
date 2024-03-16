import express from "express";
import { postFsdRequirement } from "../../controllers/fsdRequirement/index.js";

import multer from "multer"; // multer 불러오기
const upload = multer();  // muler 초기화 

const router = express.Router();

// 기능명세서 中 '요구사항'
router.post("/fsd_requirement/:id", upload.none(), postFsdRequirement);
// [체크] 해당 item의 id 를 보내서, 외래키 연결 해야 함.
// upload.none() : 어드민에서, '파일이 없고, 텍스트 데이터만' 들어가는 경우 -> upload.none() 를 넣어서 관리한다. ⭐⭐

export default router;

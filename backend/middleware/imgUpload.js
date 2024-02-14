import multer from "multer";
import path from "path";

export const Upload = multer({
  // storage : 저장할 '공간에 대한 정보'
  // diskStorage : '하드디스크'에 업로드한 파일을 저장
  storage: multer.diskStorage({
    // [경로 지정] 하드 디스크 안에서 저장할 위치를 지정
    destination(req, file, done) {
      done(null, "uploads/"); // uploads 라는 폴더 안에 저장
    },

    // [파일 이름] 해당 경로에, 어떤 식으로 이름을 저장할지
    filename: (req, file, done) => {
      // 원래파일에서 확장자 추출해서 ext 에 저장
      const ext = path.extname(file.originalname);

      // 전체 파일 이름 = originalName + 확장자 + 날짜
      const filename =
        path.basename(file.originalname, ext) + "_" + Date.now() + ext;

      // 파일 이름 설정
      done(null, filename);
    },
  }),
  // 용량을 5메가로 제한
  // limits: { fileSize: 5 * 1024 * 1024 * 5 },
});

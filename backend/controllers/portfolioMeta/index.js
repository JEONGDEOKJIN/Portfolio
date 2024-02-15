import db from "../../models/index.js";

export const postPortfolioMeta = async (req, res) => {
  console.log("req body 로 payload 가 들어오는지 테스트", req.body);
  console.log("req.files", req.files);
  /* 하나만 있을 때의 req.files 구조 
      req.files [{
        fieldname: 'architectureImg',
        originalname: 'ican.png',
        encoding: '7bit',
        mimetype: 'image/png',
        destination: 'uploads/',
        filename: 'ican_1707907151765.png',
        path: 'uploads\\ican_1707907151765.png',
        size: 3225
      }

      필드가 2개 일 때, req.fileds 구조 
  */

  const architectureImgsArr = []
  const demoVideosArr = []

  // 'architectureImg' 파일 처리
  if (req.files['architectureImg']) {
    req.files['architectureImg'].forEach((file, index) => {
      // 최대 5개의 파일만 처리
      if (index < 5) architectureImgsArr.push(file.filename); // 'filename' 저장
    });
  }

  // 'demoVideo' 파일 처리
  if (req.files['demoVideo']) {
    req.files['demoVideo'].forEach((file, index) => {
      // 최대 5개의 파일만 처리
      if (index < 5) demoVideosArr.push(file.filename); 
      // 'filename' 저장 | path 를 저장하지 않는 이유는, 
      // 이 app.use("/getImg", express.static(path.join(__dirname, "uploads"))); 미들웨어에서 
      // uploads 이런 디렉토리 경로가 있어야, 디버깅이 원활하기 때문에. 
      // 만약, path 전부를 저장하면, '이 사진 경로가 어디지?' 라고 찾을 때, 'DB 까지 가야 알 수 있음.' ⭐⭐⭐ 

    });
  }

  const {
    category,
    title,
    summary,
    subTasks,
    roles,
    stacks,
    parentProject,
    assignee,
    startDate,
    endDate,
    deployedURL,
    repository,
  } = req.body;

  try {
    const result = await db.PortfolioMeta.create({
      category,
      title,
      summary,
      subTasks,
      roles,
      stacks,
      architectureImg_1: architectureImgsArr[0] || null,
      architectureImg_2: architectureImgsArr[1] || null,
      architectureImg_3: architectureImgsArr[2] || null,
      architectureImg_4: architectureImgsArr[3] || null,
      architectureImg_5: architectureImgsArr[4] || null,
      demoVideo_1: demoVideosArr[0] || null,
      demoVideo_2: demoVideosArr[1] || null,
      demoVideo_3: demoVideosArr[2] || null,
      demoVideo_4: demoVideosArr[3] || null,
      demoVideo_5: demoVideosArr[4] || null,
      parentProject,
      assignee,
      startDate,
      endDate,
      deployedURL,
      repository,
    });

    if (result) return res.status(200).send(true);
    else return false;
  } catch (error) {
    console.log("@Login Controller", error);
    res.status(500).send("Error 📛");

  }
};


export const getItemById = async (req, res) => {

  console.log("path paramter 잘 넘어오는지 확인" , req.params)
  const {id} = req.params;

  try {

    const itemById = await db.PortfolioMeta.findByPk(id);
    if(itemById) return res.status(200).send(itemById)
    
  } catch (error) {
    console.log(error)
    res.status(500).send("Error 📛");
  }
}


export const updateItemById = async (req, res) => {

  const { id } = req.params; // id 값 가져오기
  let updateMetaData = req.body; // 업데이트할 데이터. 클라이언트에서 가져옴

// 파일 이름을 매핑하기 위한 객체 초기화 
let updateImgFields = {
  architectureImg_1: "",
  architectureImg_2: "",
  architectureImg_3: "",
  architectureImg_4: "",
  architectureImg_5: "",
  demoVideo_1: "",
  demoVideo_2: "",
  demoVideo_3: "",
  demoVideo_4: "",
  demoVideo_5: "",
};

// 아키텍처 이미지 파일 이름 처리 : 1) 해당 값이 있으면 파일 이름 넣고 2) 없으면 빈값 넣기
req.files['architectureImg']?.forEach((file, index) => {
  if (index < 5) {
    updateImgFields[`architectureImg_${index + 1}`] = file.filename;
  }
});

// 데모 비디오 파일 이름 처리 : 1) 해당 값이 있으면 파일 이름 넣고 2) 없으면 빈값 넣기
req.files['demoVideo']?.forEach((file, index) => {
  if (index < 5) {
    updateImgFields[`demoVideo_${index + 1}`] = file.filename;
  }
});

// updateMetaData 객체에 파일 정보를 합침
updateMetaData = { ...updateMetaData, ...updateImgFields };

  try {
    
    // 해당 item 찾아서 업데이트 하기 
    const [updatedResults] = await db.PortfolioMeta.update(updateMetaData, {
      where: { id: id }
    });
    
    if(updatedResults || updatedArchitectureImgResults || updatedDemoVideoResults){
      const storedItem = await db.PortfolioMeta.findByPk(id);   // 업데이트 되어 DB 에 저장된 아이템을 조회해서 가져옴
      if(storedItem) return res.status(200).json(storedItem); // JSON 형태로 응답 수정
    }

  } catch (error) {
    console.log(error)
    res.status(500).send("Error 📛");
  }
}

/*
  // const { id } = req.params; // id 값 가져오기 
  // const updateData = req.body;  // 업데이트할 데이터. 클라이언트에서 가져옴
  // const demoVideosArr = [];
  // const architectureImgsArr = [];

  // let updateArchitectureImgFields = {};
  // let updateDemoVideosFields = {};

  // console.log("update 넘어온 path parameter 확인" , id)
  // console.log("update updateData 확인" , updateData)
  // console.log("update updatefiles 확인" , req.files)

  // // 'demoVideo' 파일 처리
  // if (req.files['demoVideo']) {
  //   req.files['demoVideo'].forEach((file, index) => {
  //     // 최대 5개의 파일만 처리
  //     if (index < 5) demoVideosArr.push(file.filename); 
  //   });
  // }
  
  // // 'architectureImg' 파일 처리
  // if (req.files['architectureImg']) {
  //   req.files['architectureImg'].forEach((file, index) => {
  //     // 최대 5개의 파일만 처리
  //     if (index < 5) architectureImgsArr.push(file.filename); // ⭐'filename' 저장
  //   });
  // }

  // architectureImgsArr.forEach( (img, index) => {
  //   updateArchitectureImgFields[`architectureImg_${index + 1}`] = img;
  // })
  
  // demoVideosArr.forEach( (img, index) => {
  //   updateDemoVideosFields[`demoVideo_${index + 1}`] = img;
  // })


*/


/*
if (req.files && Array.isArray(req.files)) {
  for (let index = 0; index < req.files.length; index++) {
    // finename 을 저장하면, DB 에 파일만 저장됨 
    // 그러면, app.js 에서, app.use("/getImg", express.static(path.join(__dirname, "/upload"))); 이렇게 설정해주면 됨 

    // 만약, path 자체를 저장하면, db 에는 '\upload\test.jpg' 이렇게 저장되어서 -> 미들 웨어를 app.use("/getImg", express.static(path.join(__dirname, "/")));
      // 이렇게 저장해야 함 
      // 그러면, img 태그에서 src 에 'http://locahost:3000/getimg/admin_main_chartjs_1707908168730.jpg' 이렇게 요청이 오면 
      // 사실은 upload 파일에 저장되어 있는 파일을 가져와야 하는데, 
      // 어디에서 찾아야 할지 몰라서, 혼란이 옴. 
      
    // 결론은
      // 사진 경로를 DB 에 저장할 때, finename 만 저장하면 
      // __dirname 에서 이미지를 뽑아 쓸 때, 경로를 모두 기재해야 하므로, 
      // 사진이 어디에 있는가를 파악하기가 훨씬 편하다 ⭐⭐⭐⭐⭐ 

      architectureImgsArr[index] = req.files['architectureImg'].filename;
  }
}
if (req.files && Array.isArray(req.files)) {
  for (let index = 0; index < req.files.length; index++) {
    demoVideosArr[index] = req.files['demoVideo'].filename;
  }
}
*/
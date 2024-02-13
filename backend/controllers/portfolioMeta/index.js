import db from "../../models/index.js"


export const postPortfolioMeta = async (req, res) => {

  console.log("req body 로 payload 가 들어오는지 테스트", req.body);



  try {

    const result = await db.PortfolioMeta.update();

    if (result) return res.status(200).send(true);
    else return false;
  } catch (error) {
    console.log("@Login Controller", error);
  }
};

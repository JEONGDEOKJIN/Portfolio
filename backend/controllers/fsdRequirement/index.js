import { models, sequelize } from "../../models/index.js";

export const postFsdRequirement = async (req, res) => {
  console.log("postFsdRequirement 로 신호 가나? ");
  console.log("postFsdRequirement 값 들어가나?", req);
  console.log("postFsdRequirement 값 들어가나?", req.params);
  console.log("req.body 값 들어가나?", req.body);

  const { id } = req.params; // 이 외래키에 대해서 create 하고 싶음.

  const { fsd_requirement, fsd_description } = req.body;

  try {
    const result = await models.FSDRequirement.create({
      fsd_requirement, // key 와 value 가 동일한 변수로 들어가는 경우, 축약해서 작성 가능
      fsd_description,
      portfolioMetaId: id, // portfolioMetaId 외래키 필드에, 넘겨받은 id 할당
    });

    if (result)
      return res.status(200).send(result); // client 에게 true 를 반환!
    else return false;
  } catch (error) {
    console.log("@fsdRequirement Controller > postFsdRequirement", error);
    res.status(500).send("Error📛");
  }
};

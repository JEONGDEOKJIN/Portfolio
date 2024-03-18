import React from 'react'

const getSearchItem = () => {

// 테이블 portfolioMeta 에서만 검색쿼리 가져왔을 때 사용한 함수 
// 현재는 portfolioMeta 테이블과 FSDRequirement 테이블 모두에서 검색 결과 가져오고 있음.


// 기존 getSearchedItem 기능
const getSearchedItem = async (req, res) => {

  // const searchTerm = req.query.query // 이렇게 2번 query 로 접근해야 가져와짐

  // 와일드 카드
  const searchTerm = req.query.query + "*";

  console.log("검색 요청한 키워드 받아오기 searchTerm | 작동함 🔵", searchTerm);

  try {
    // full-text 인덱싱을 활용해서, 검색기능을 만들려면, sequelize 인스턴스를 직접 가져와서, 직접 쿼리를 실행해야
    const searchedItem = await sequelize.query(
      // full-text 인덱싱을 설정한 title, summary, subTasks, stacks 컬럼에서, AGAINST 메서드를 사용해서 검색하기
      // MYSQL 에서는 테이블 이름이 모두 ⭐소문자⭐

      // 일반 🔵 | 작동함
      // 'SELECT * FROM `portfoliometa` WHERE MATCH(title, summary, roles, stacks, fsd_largecategory, fsd_mediumcategory, fsd_smallcategory) AGAINST(:searchQuery IN NATURAL LANGUAGE MODE)',

      // 와일드 카드 : good 를 검색하면 -> goodmoring 까지 검색됨 : 좀 오류가 있음 🟧
      "SELECT * FROM `portfoliometa` WHERE MATCH(title, summary, roles, stacks, fsd_largecategory, fsd_mediumcategory, fsd_smallcategory  ) AGAINST(:searchQuery IN BOOLEAN MODE)",

      // 설정
      {
        replacements: { searchQuery: searchTerm }, // 여기서 searchQuery를 searchTerm으로 매핑
        model: models.PortfolioMeta, // 결과를 PortfolioMeta 모델 인스턴스로 매핑
        mapToModel: true, // Raw 쿼리 결과를 모델 인스턴스로 매핑하도록 설정
        type: sequelize.QueryTypes.SELECT, // 쿼리 타입을 SELECT로 지정
      }
    );

    // console.log("searchedItem" , searchedItem)

    // 검색결과가 없을 때의 send 도 있어야 할거 같은데
    if (searchedItem.length > 0) {
      return res.status(200).send(searchedItem);
    } else {
      return res
        .status(404)
        .send({ message: "해당 키워드에 대한 검색 결과가 없어요😥" });
    }
  } catch (error) {
    console.log("searchedItem 오류 발생", error);
    return res.status(500).send(error.message);
  }
};



}

export default getSearchItem
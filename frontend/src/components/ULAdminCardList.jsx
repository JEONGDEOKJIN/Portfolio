import React, { useState } from "react";
import AdminItem from "./AdminItem";

const ULAdminCardList = ({ metaData }) => {

  const [isSubmitting, setIsSubmitting] = useState(false)

  return (
    <>
      {/* cardListGridContainer : index.css 로 설정 */}
      <ul className="flex flex-row gap-[50px] w-full px-[72px]">
        {/* {filteredSortedData.map((item, index) => { */}
        {metaData.map((item, index) => {
          return (
            <li
              key={index}
              className="flex flex-col flex-wrap w-[300px]  cursor-pointer"
            >
              <figure
                className="relative h-0 bg-cover   bg-no-repeat  pb-75% rounded-lg hover:scale-105 transition-all duration-500 ease-in-out"
                style={{
                  // backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/${item.image})`,
                  backgroundImage: `url(http://localhost:7070/getImg/${item.demoVideo_1})`,
                }}
              ></figure>

              {/* description 부분 */}
              <div className="flex items-center justify-between py-3 font-medium text-stone-900 ">
                <div className="flex flex-col flex-wrap items-start gap-[20px]">
                  <AdminItem name="title" column={item.title} />
                  <AdminItem name="projectID" column={item.projectID} />
                  <AdminItem name="featureID" column={item.featureID} />
                  <AdminItem name="summary" column={item.summary} />
                  <AdminItem
                    name="fsd_largecategory"
                    column={item.fsd_largecategory}
                  />
                  <AdminItem
                    name="fsd_mediumcategory"
                    column={item.fsd_mediumcategory}
                  />
                  <AdminItem
                    name="fsd_smallcategory"
                    column={item.fsd_smallcategory}
                  />
                  
                  {/* 있으면 렌더링, 없으면 nono */}
                  {item.fsd_functionalrequirement 
                  ? (
                    <AdminItem
                      name="fsd_smallcategory"
                      column={item.fsd_smallcategory}
                    />
                  ) : (
                    ""
                  )}

                  
                  
                  <div className="flex flex-col w-full h-full gap-10 bg-gold-100 ">
                    <div className="flex flex-col w-full bg-gray-300">
                      <label className="flex items-center w-full h-10">
                        [요구사항] : 기능적 or 비기능적 작성
                      </label>
                      <input
                        name="fsd_functionalrequirement"
                        type="textarea"
                        placeholder="✍ [기능] 000 또는 [비기능] 000 이렇게 작성"
                        className="w-full h-10 border-2 border-black border-dotted"
                      />
                    </div>
                    <div className="flex flex-col w-full bg-gray-300">
                      <label className="flex items-center w-full h-10">
                        [설명]
                      </label>
                      <input
                        name="fsd_description"  // name 을 기준으로 append 값을 가져오는거지❓❓ 
                        type="textarea"
                        placeholder="✍ 설명 작성"
                        className="w-full h-10 border-2 border-black border-dotted"
                      />
                    </div>

                    <input
                      disabled = {isSubmitting} // isSubmitting 가 true 일 때, 버튼 비활성화
                      type="submit" 
                      className="px-4 py-2 text-white bg-gray-800 rounded-full w-fit">
                        create  
                    </input>
                  </div>
                  <AdminItem name="fsd_status" column={item.fsd_status} />
                  <AdminItem name="roles" column={item.roles} />
                  <AdminItem name="stacks" column={item.stacks} />
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ULAdminCardList;

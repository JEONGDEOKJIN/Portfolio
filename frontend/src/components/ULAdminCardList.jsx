import React, { useState } from "react";
import AdminItem from "./AdminItem";
import axios from "axios";
import FormPostFsdRequirement from "./FormPostFsdRequirement";

export const formData = new FormData(); // formData 객체 생성

const ULAdminCardList = ({ metaData }) => {
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
                <div className="flex flex-col flex-wrap items-start gap-[20px]  ">
                  <AdminItem name="title" column={item.title} />
                  <AdminItem name="projectID" column={item.projectID} />
                  {/* <AdminItem name="featureID" column={item.featureID} /> */}
                  <AdminItem name="summary" column={item.summary} />
                  <AdminItem name="roles" column={item.roles.split('"')[1]} />
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


                  <FormPostFsdRequirement 
                    id={item.id} />



                  {/* <AdminItem name="fsd_status" column={item.fsd_status} /> */}
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

import React, { useState } from "react";
import { UpdateComponent } from "../page/crud_test/contents/UpdateComponent";
import { CreateComponent } from "../page/crud_test/contents/CreateComponent";
import Header from "../page/crud_test/components/Header";
import Nav from "../page/crud_test/components/Nav";
import Article from "../page/crud_test/components/Article";
import ModeChangeButton from "../page/crud_test/components/ModeChangeButton";

export const formData = new FormData();


const AdminCreate = () => {
  const [mode, setMode] = useState(false);


  const topics = [
    { id: 1, title: "html", body: "html is ..." },
    { id: 2, title: "css", body: "css is ..." },
    { id: 3, title: "js", body: "js is ..." },
  ];

  return (
    <>
      <Header
        title="Update⛳" // Header 컴포넌트 안에 있는, props 객체에, title 키 와 "react🎯" value 를 바인딩
        onChangeMode={function () {
          alert("Header 임!");
        }}
        // Header 컴포넌트 안에 있는, props 객체에, onchangeMode 키에, "해당 함수" 를 바인딩
      />

      <section className="p-2 bg-blue-100">
        <p> [이벤트 처리 예제] 클릭하면, id 가 alert 되어 나옴 </p>
        <Nav
          topics={topics}
          onChangeMode={function (id) {
            alert(id);
          }}
        />
      </section>

      <Article title="Welasfdcome🙆‍♂️" body="Hello,asdf Web🙌" />

      <section className="p-2 bg-green-100">
        <p>
          [state 예제] 버튼클릭하면, mode 상태가 변경되어서, UI 가 변함 | UI
          먼저 만들고, 상태에 따라서 변화하는 로직 짜면 됨
        </p>
        <ModeChangeButton mode={mode} setMode={setMode} />
        {mode === true ? "🙆‍♂️🙆‍♂️🙆‍♂️🙆‍♂️🙆‍♂️" : "🤸‍♂️🤸‍♂️🤸‍♂️🤸‍♂️🤸‍♂️"}
      </section>

      <section className="p-2 bg-orange-100">
        <p> [form 태그로 create 예제] </p>
        <CreateComponent />
      </section>

      <section className="bg-indigo-100">
        <p> [Update 예제] </p>
        <UpdateComponent />
      </section>
    </>
  );
};

export default AdminCreate;

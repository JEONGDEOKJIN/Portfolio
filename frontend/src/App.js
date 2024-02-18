import "./App.css";

import ItemList from "./contents/ItemList/ItemList";
import READ_PROPS from "./page/crud_test/READ_PROPS";
import Event from "./page/crud_test/EVENT";
import State from "./page/crud_test/State";
import Create from "./page/crud_test/Create";
import Update from "./page/crud_test/Update";
import Delete from "./page/crud_test/page/Delete";
import { Route, Routes } from "react-router-dom";
import Feedback from "./components/Feedback";

function App() {
  return (
    <div className="App">
      
      {/* <READ_PROPS /> */}
      {/* <Event /> */}
      {/* <State /> */}
      {/* <Create /> */}
      {/* <Update /> */}
      {/* <Delete /> */}

      <Routes>
        <Route path="test/update" element={ <Update /> }  />

        {/* 메인 페이지 추가되면, 변경해야 함✅ */}
        {/* <Route path="itemList" element={ <ItemList /> }  /> */}
        <Route path="/" element={ <ItemList /> }  />


        {/* <Route path="feedback" element={ <Feedback /> }  /> */}
        

      </Routes>
    

    </div>
  );
}

export default App;

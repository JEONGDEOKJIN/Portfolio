import "./App.css";

import ItemList from "./contents/ItemList/ItemList";

import Event from "./page/crud_test/EVENT";
import State from "./page/crud_test/State";
import Create from "./page/crud_test/Create";
import Update from "./page/crud_test/Update";
import Delete from "./page/crud_test/page/Delete";
import { Route, Routes } from "react-router-dom";
import Feedback from "./components/Feedback";

import FeatureList from "./pages/FeatureList";
import AdminBoard from "./pages/AdminBoardPage";
import AdminCreate from "./pages/AdminCreate";
import AdminBoardPage from "./pages/AdminBoardPage";

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
        <Route path="test/update" element={<Update />} />

        {/* 메인 페이지 추가되면, 변경해야 함✅ */}
        {/* <Route path="itemList" element={ <ItemList /> }  /> */}
        <Route path="/" element={<FeatureList />} />

        <Route path="/admin/create" element={<AdminCreate/>} />
        <Route path="/admin/board" element={<AdminBoardPage />} />

        {/* <Route path="feedback" element={ <Feedback /> }  /> */}
      </Routes>
    </div>
  );
}

export default App;

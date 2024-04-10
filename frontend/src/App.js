import "./App.css";

import ItemList from "./contents/ItemList/ItemList";
import { Route, Routes } from "react-router-dom";
import FeatureList from "./pages/FeatureList";
import AdminBoard from "./pages/AdminBoardPage";
import AdminCreate from "./pages/AdminCreate";
import AdminBoardPage from "./pages/AdminBoardPage";

function App() {
  return (
    
    <div className="App">
      {/* <Event /> */}
      {/* <State /> */}
      {/* <Create /> */}
      {/* <Update /> */}

      <Routes>
        {/* <Route path="test/update" element={<Update />} /> */}

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

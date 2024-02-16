import "./App.css";

import ItemList from "./contents/ItemList/ItemList";
import READ_PROPS from "./page/crud_test/READ_PROPS";
import Event from "./page/crud_test/EVENT";
import State from "./page/crud_test/State";
import Create from "./page/crud_test/Create";
import Update from "./page/crud_test/Update";
import Delete from "./page/crud_test/page/Delete";

function App() {
  return (
    <div className="App">
      
      {/* <READ_PROPS /> */}
      {/* <Event /> */}
      {/* <State /> */}
      {/* <Create /> */}
      {/* <Update /> */}
      {/* <Delete /> */}


      <ItemList />
    </div>
  );
}

export default App;

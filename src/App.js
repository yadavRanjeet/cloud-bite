import { Outlet } from "react-router-dom";
import "./App.css";

import Faltu from "./components/Faltu";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <div>
        <Faltu />
        <Outlet />
      </div>
    </Provider>
  );
}



export default App ;

import "./App.css";
import Body from "./Components/Body";
import Header from "./Components/Header";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <Header />
      <Outlet />
    </Provider>
  );
}

export default App;

import Sidebar from "./components/Sidebar";
import Body from "./components/Body";
import Header from "./components/Header";
import store from "./redux/index.ts";
import "./App.css";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={store}>
      <div className="mainwrapper">
        <Header />
        <div className="mainBody">
          <Sidebar />
          <Body />
        </div>
      </div>
    </Provider>
  );
}
export default App;

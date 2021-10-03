import Sidebar from "./components/Sidebar";
import Body from "./components/Body";
import Header from "./components/Header";
import store from "./redux/index.ts";
import { Provider } from "react-redux";
import "./App.css";
function App() {
  return (
    <Provider store={store}>
      <div className="mainwrapper">
        <Header />
        <Sidebar />
        <div className="mainBody">
          <Body />
        </div>
      </div>
    </Provider>
  );
}
export default App;

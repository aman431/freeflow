import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer";

// store
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    (window as any).devToolsExtension
      ? (window as any).devToolsExtension()
      : (f: any) => f
  )
);

export default store;

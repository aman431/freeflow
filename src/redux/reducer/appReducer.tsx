import { createContext } from "react";

// export type SO = {
//   name: string;
//   orgid: string;
//   role: string;
//   usrid: string;
// };

export type AppState = {
  userCard: any;
};

// eslint-disable-next-line no-shadow
export enum AppActionType {
  setusercard = "setusercard",
}
export type AppActions = { type: AppActionType.setusercard; payload: any };

//initialState
const initialState = {
  userCard: {},
} as AppState;

export const AppContext = createContext(initialState);

//maintain a state of Cloud
const appReducer = (state = initialState, action: AppActions): AppState => {
  switch (action.type) {
    case AppActionType.setusercard:
      // console.log("payload", action.payload);
      return {
        ...state,
        userCard: action.payload,
      };
    default:
      return state;
  }
};

export default appReducer;

import { createContext } from "react";

export type SO = {
  name: string;
  brandname: string;
  cardname: string;
  image: string;
  colorpicker: string;
};

export type AppState = {
  userCard: SO;
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
      return {
        ...state,
        userCard: action.payload,
      };
    default:
      return state;
  }
};

export default appReducer;

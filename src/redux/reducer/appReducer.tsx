// type of data required
export type TYPECARD = {
  name: string;
  brandname: string;
  cardname: string;
  image: string;
  colorpicker: string;
};

// state
export type AppState = {
  userCard: TYPECARD;
};

// Action type
export enum AppActionType {
  setusercard = "setusercard",
}

//Actions
export type AppActions = { type: AppActionType.setusercard; payload: any };

//initialState
const initialState = {
  userCard: {},
} as AppState;

//maintain a state
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

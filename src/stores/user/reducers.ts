import { SET_NAME, SET_IDEA } from "./actions";
import { AnyAction } from "redux";

export interface UserState {
  name: string;
  idea: string;
}

const userInitialState: UserState = {
  name: "",
  idea: ""
};

// ユーザー情報の登録
// 認証
export const userReducer = (
  state: UserState = userInitialState,
  action: AnyAction
): UserState => {
  switch (action.type) {
    case SET_NAME:
      return {
        ...state,
        name: state.name
      };
    case SET_IDEA:
      return {
        ...state,
        idea: state.idea
      };
    default:
      return state;
  }
};

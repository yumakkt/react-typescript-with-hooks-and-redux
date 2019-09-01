import {
  SET_NAME,
  SET_ADDRESS,
  SET_MAIL_ADDRESS,
  SET_SEX,
  SET_ITEM
} from "./actions";
import { AnyAction } from "redux";

interface Input {
  name: string;
  address: string;
  mailAddress: string;
  sex: string;
}

export interface FormState {
  input: Input;
}

const formInitialState: FormState = {
  input: {
    name: "",
    address: "",
    mailAddress: "",
    sex: ""
  }
};

// ユーザー情報の登録
// 認証
export const formReducer = (
  state: FormState = formInitialState,
  action: AnyAction
): FormState => {
  const newItem = (item: "name" | "address" | "mailAddress" | "sex") => ({
    ...state,
    input: {
      ...state.input,
      [item]: action[item]
    }
  });
  switch (action.type) {
    case SET_NAME:
      return newItem("name");
    case SET_ADDRESS:
      return newItem("address");
    case SET_MAIL_ADDRESS:
      return newItem("mailAddress");
    case SET_SEX:
      return newItem("sex");
    case SET_ITEM:
      return {
        ...state,
        input: action.input
      };
    default:
      return state;
  }
};

import axios from "axios";
import { setItem } from "./actions";
import { RootState } from "stores";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

// ユーザーの認証をして認証に成功したらトークンを生成。
export const authUser = () => {
  return async (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
    getState: () => RootState
  ) => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/1`
    );
    console.log(response);
    const state = getState();
    console.log(state);
    dispatch(
      setItem({
        name: "",
        address: "",
        mailAddress: "",
        sex: ""
      })
    );
  };
};

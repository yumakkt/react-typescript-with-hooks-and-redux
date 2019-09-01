import React from "react";
import MyInputField from "components/atoms/MyInputField";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "stores";
import { authUser } from "stores/form/thunks";
import { setName } from "stores/form/actions";
import { Button } from "@material-ui/core";

const Registration: React.FC = () => {
  const { name } = useSelector((state: RootState) => state.form.input);
  const dispatch = useDispatch();
  const myCallBack = (e: string) => {
    dispatch(setName(e));
  };
  const callApi = () => {
    dispatch(authUser());
  };
  return (
    <div>
      <MyInputField myOnChange={myCallBack} disabled={false} value={name} />
      <Button onClick={callApi}>click It !!</Button>{" "}
    </div>
  );
};

export default Registration;

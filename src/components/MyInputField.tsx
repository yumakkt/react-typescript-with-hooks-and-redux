import React from "react";
import TextField from "@material-ui/core/TextField";

interface Params {
  myOnChange: (e: string) => void;
  value: string;
  disabled: boolean;
}

const MyInputField = ({ myOnChange, value, disabled }: Params) => {
  return (
    <TextField
      disabled={disabled}
      value={value}
      onChange={e => myOnChange(e.target.value)}
    />
  );
};

export default MyInputField;

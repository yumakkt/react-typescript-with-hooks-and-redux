// 文字列定数
export const SET_NAME = "SET_NAME";
export const SET_ADDRESS = "SET_ADDRESS";
export const SET_MAIL_ADDRESS = "SET_MAIL_ADDRESS";
export const SET_SEX = "SET_SEX";
export const SET_ITEM = "SET_ITEM";

//
export const setName = (name: string) => ({
  type: SET_NAME,
  name
});

export const setAddress = (address: string) => ({
  type: SET_ADDRESS,
  address
});

export const setMailAddress = (mailAddress: string) => ({
  type: SET_MAIL_ADDRESS,
  mailAddress
});

export const setSex = (sex: string) => ({
  type: SET_SEX,
  sex
});

export const setItem = (input: object) => ({
  type: SET_ITEM,
  input
});

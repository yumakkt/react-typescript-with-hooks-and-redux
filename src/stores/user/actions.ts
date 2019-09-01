// 文字列定数
export const SET_NAME = "SET_NAME";
export const SET_IDEA = "SET_IDEA";

//
export const setName = (name: string) => ({
  type: SET_NAME,
  name
});

export const setAddress = (idea: string) => ({
  type: SET_IDEA,
  idea
});

import React, { useState } from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import MyInputField from ".";

const TestComp = () => {
  const [item, setItem] = useState("");
  return <MyInputField myOnChange={setItem} disabled={false} value={item} />;
};

storiesOf("MyInputField", module).add("input field", () => <TestComp />);

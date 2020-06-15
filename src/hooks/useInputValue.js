/**
 * @fileoverview A React hook that sets value from input.
 * @exports object
 */

import { useState } from "react";

export const useInputValue = (initialValue) => {
  console.log(initialValue)
  const [value, setValue] = useState(initialValue);
  return {
    value,
    onChange: (e) => setValue(e.target.value),
  };
};

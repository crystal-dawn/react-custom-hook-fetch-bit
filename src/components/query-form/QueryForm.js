/**
 * @fileoverview A React component that renders a input form for querying fetch data.
 * @exports JSX.Element
 */

import React, { useState } from "react";

import PropTypes from "prop-types";
import QueryTextInput from "./query-text-input/QueryTextInput";
import SubmitButton from "./submit-button/SubmitButton";

/**
 * @function Renders input for querying data
 * @name QueryForm
 */
export default function QueryForm() {
  const [value, setValue] = useState(`redux`);

  return (
    <form>
      <QueryTextInput value={value} setValue={setValue} />
      <SubmitButton text="Search" />
    </form>
  );
}

QueryForm.propTypes = {
  /** query value for url slug */ 
  query: PropTypes.string,
  /** set state of query value for url slug */
  setQuery: PropTypes.func,
  /** Render input for query */
  QueryTextInput: PropTypes.elementType
};

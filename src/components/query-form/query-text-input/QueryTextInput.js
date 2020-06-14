/**
 * A React component that renders a text input with a default value.
 * @interface
 * @exports JSX.Element
 */

import PropTypes from "prop-types";
import React from "react";

/**
 * @name QueryTextInput
 * @augments `QueryForm`
 * @description Renders a text input element.
 * @returns {JSX.Element} A text input with query value. 
 */
const QueryTextInput = ({ value, setValue }) => (
  <input
    type="text"
    value={value}
    onChange={(event) => setValue(event.target.value)}
  />
);

export default QueryTextInput;

QueryTextInput.propTypes = {
  /** Placeholder text for the input element. */
  value: PropTypes.string.isRequired,
  /** A function to collect the query text. */
  setValue: PropTypes.func.isRequired,
  /** A function to update state.
   * #### Example <hr>
   * ```onChange={(event) => setValue(event.target.value)}```
   */
  onChange: PropTypes.func,
};

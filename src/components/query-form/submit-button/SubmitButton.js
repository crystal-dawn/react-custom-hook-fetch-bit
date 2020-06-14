/**
 * @fileoverview A React component that renders a submit button.
 * @exports JSX.Element
 */

import PropTypes from "prop-types";
import React from "react";

/**
 * Submit button
 * @name Submit
 * @property {string}   text
 */
const Button = ({ text }) => <button type="submit">{text}</button>;

export default Button;

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

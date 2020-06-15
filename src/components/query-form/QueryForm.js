/**
 * @fileoverview A React component that renders a input form for querying fetch data.
 * @exports JSX.Element
 */

import PropTypes from "prop-types";
import QueryTextInput from "./query-text-input/QueryTextInput";
import React from "react";
import SubmitButton from "./submit-button/SubmitButton";

/**
 * @function Renders input for querying data
 * @name QueryForm
 */
export default function QueryForm({ url, param, setParam, doFetch }) {
  return (
    <form
      onSubmit={(e) => {
        /** prevent browser from refreshing on submit */
        e.preventDefault();
        /** execute new data fetch */
        doFetch(url);
      }}
    >
      <QueryTextInput value={param} setValue={setParam} />
      <SubmitButton text="Search" />
    </form>
  );
}

QueryForm.propTypes = {
  /** Object parsed from URL string */
  url: PropTypes.string.isRequired,
  /** Current search parameter */
  param: PropTypes.string,
  /** A function to set param state */
  setParam: PropTypes.func,
  /** @listens Function listens for form change to refetch API */
  doFetch: PropTypes.func.isRequired,
  /** Used to pass param state to input element */
  value: PropTypes.string,
  /** A function to collect the input text for value state. */
  setValue: PropTypes.func,
  /** Parse search value to URL search param
   * #### examples
   * / /g,"_"     - replace all spaces with underscore
   */
  searchParam: PropTypes.string,
  /** Render input for query */
  QueryTextInput: PropTypes.elementType,
  /** Render submit button for query */
  SubmitButton: PropTypes.elementType,
};

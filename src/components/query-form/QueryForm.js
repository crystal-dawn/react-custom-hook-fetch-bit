/**
 * @fileoverview A React component that renders a input form for querying fetch data.
 * @exports JSX.Element
 */

import React, { useState } from "react";

import PropTypes from "prop-types";
import QueryTextInput from "./query-text-input/QueryTextInput";
import SubmitButton from "./submit-button/SubmitButton";
import { useDataApi } from "../../hooks/useDataApi";

/**
 * @function Renders input for querying data
 * @name QueryForm
 */
export default function QueryForm() {
  const [value, setValue] = useState(`great beer`);
  const searchParam = value.replace(/ /g, "_");
  const url = new URL(
    `https://api.punkapi.com/v2/beers?beer_name=${searchParam}`
  );
  const [{ data, isLoading, isError }, doFetch] = useDataApi(url.href, {
    hits: [],
  });

  return (
    <form
      onSubmit={(e) => {
        /** execute new data fetch */
        doFetch(url.href);

        /** prevent browser from refreshing on submit */
        e.preventDefault();
      }}
    >
      <QueryTextInput value={value} setValue={setValue} />
      <SubmitButton text="Search" />
    </form>
  );
}

QueryForm.propTypes = {
  /** query value for url slug */
  value: PropTypes.string,
  /** set state of query value for url slug */
  setValue: PropTypes.func,
  /** Parse search value to URL search param
   * #### examples
   * / /g,"_"     - replace all spaces with underscore
   */
  searchParam: PropTypes.string.isRequired,
  /** Object parsed from URL string */
  url: PropTypes.object.isRequired,
  /** @listens Function listens for form change to refetch API */
  doFetch: PropTypes.func.isRequired,
  /** Render input for query */
  QueryTextInput: PropTypes.elementType,
  /** Render submit button for query */
  SubmitButton: PropTypes.elementType,
};

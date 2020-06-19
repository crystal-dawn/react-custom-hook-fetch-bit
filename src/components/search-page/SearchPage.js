/**
 * A React component that renders the apps query form and results.
 * @exports JSX.Element
 * @todo useInput hook
 */

import React, { useState } from "react";

import ErrorMessage from "../error-message/ErrorMessage";
import FilterDropdown from "../filter-dropdown/FilterDropdown";
import { Loading } from "../loading/Loading";
import PropTypes from "prop-types";
import QueryForm from "../query-form/QueryForm";
import Results from "../results/Results";
import { useDataApi } from "../../hooks/useDataApi";

function SearchPage() {
  const [param, setParam] = useState(`apple`);
  const mwApiKey = `${process.env.REACT_APP_MW_API_KEY}`
  // const searchParam = param.replace(/ /g, "_");
  const url = new URL(
    `https://www.dictionaryapi.com/api/v3/references/learners/json/${param}?key=${mwApiKey}`
  ).href;
  const [{ isLoading, isError, data, error }, doFetch] = useDataApi(url);

  return (
    <>
      <QueryForm
        url={url}
        param={param}
        setParam={setParam}
        doFetch={doFetch}
      />
      {isError ? (
        <ErrorMessage error={error} />
      ) : !isLoading && data !== undefined ? (
        <>
          <Results data={data} />
          <FilterDropdown data={data} />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default SearchPage;

SearchPage.propTypes = {
  /** query param for url slug */
  param: PropTypes.string,
  /** set state of query param for url slug */
  setParam: PropTypes.func,
  /** Parse search param to URL search param
   * #### examples
   * / /g,"_"     - replace all spaces with underscore
   */
  searchParam: PropTypes.string,
  /** Object parsed from URL string */
  url: PropTypes.object,
  /** Data fetched from API */
  data: PropTypes.object,
  /** String of error message for displaying in error message */
  error: PropTypes.string,
  /** Boolean that toggles **is loading** element during fetch */
  isLoading: PropTypes.bool,
  /** Boolean that toggles **error** element  */
  isError: PropTypes.bool,
  /** @listens Function listens for form change to refetch API */
  doFetch: PropTypes.func,
  /** Render error message if failed */
  ErrorMessage: PropTypes.elementType,
  /** Render input for query */
  QueryTextInput: PropTypes.elementType,
  /** Render submit button for query */
  SubmitButton: PropTypes.elementType,
  /** Render dropdown box with keys from first level of data */
  FilterDropdown: PropTypes.elementType,
};

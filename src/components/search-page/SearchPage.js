/**
 * A React component that renders the apps query form and results.
 * @exports JSX.Element
 */

import React, { useState } from "react";

import Loading from "../loading/Loading";
import PropTypes from "prop-types";
import QueryForm from "../query-form/QueryForm";
import Results from "../results/Results";
import { useDataApi } from "../../hooks/useDataApi";

function SearchPage() {
  const [param, setParam] = useState(`Lager`);
  const searchParam = param.replace(/ /g, "_");
  const url = new URL(
    `https://api.punkapi.com/v2/beers?beer_name=${searchParam}`
  ).href;
  const [{ data, isLoading, isError }, doFetch] = useDataApi(url);

  return (
    <>
      <QueryForm
        url={url}
        param={param}
        setParam={setParam}
        doFetch={doFetch}
      />
      {!isLoading && data !== undefined ? <Results data={data} /> : <Loading />}
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
  /** Boolean that toggles **is loading** element during fetch */
  /** Boolean that toggles **error** element  */
  isError: PropTypes.bool,
  /** @listens Function listens for form change to refetch API */
  doFetch: PropTypes.func,
  /** Render input for query */
  QueryTextInput: PropTypes.elementType,
  /** Render submit button for query */
  SubmitButton: PropTypes.elementType,
};

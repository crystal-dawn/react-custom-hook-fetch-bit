/**
 * @fileoverview A React hook that fetches API data.
 * @exports object
 */

import { useEffect, useReducer, useState } from "react";

import PropTypes from "prop-types";

/**
 * @function Reducer to fetch API data, trigger loading and error messages
 */
export const fetchApiDataReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INIT":
      return {
        ...state,
        // destructure state to mutate
        isLoading: true,
        isError: false,
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case "FETCH_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.payload,
      };
    default:
      throw new Error();
  }
};
fetchApiDataReducer.propTypes = {
  /** @enum { data, isLoading, isError } */
  state: PropTypes.string.isRequired,
  /** An object for the fetched data payload */
  action: PropTypes.object.isRequired,
  /** Boolean for triggering is loading component */
  isLoading: PropTypes.bool,
  /** Boolean for triggering is error component */
  isError: PropTypes.bool,
  /** @return API data object */
  data: PropTypes.object.isRequired,
};

/**
 * @function Custom fetch hook
 */
export const useDataApi = (initialUrl, initialData) => {
  const [url, setUrl] = useState(new URL(initialUrl));

  const [state, dispatch] = useReducer(fetchApiDataReducer, {
    isLoading: false,
    isError: false,
    data: initialData,
    error: "",
  });

  // effect hook for data fetching
  useEffect(() => {
    // abort data fetching
    let didCancel = false;

    fetchData(didCancel, url, dispatch);
    // use cleanup to not perform state transition for unmounted component
    return () => (didCancel = true);

    // track query value to refetch data
  }, [url]);

  // state object returned from reducer { isLoading, isError, data}
  return [state, setUrl];
};

useDataApi.propTypes = {
  /** URL for initial API data fetch */
  initialUrl: PropTypes.string.isRequired,
  /** Data returned from initial API fetch */
  initialData: PropTypes.object.isRequired,
  /** URL based on query input */
  url: PropTypes.string.isRequired,
  /** Function to update URL state based on query input */
  setUrl: PropTypes.func.isRequired,
  /** String for URL query slug */
  state: PropTypes.string.isRequired,
  /** Object for fetched data */
  dispatch: PropTypes.object.isRequired,
  /** Boolean for triggering is loading component */
  isLoading: PropTypes.bool,
  /** Boolean for triggering is error component */
  isError: PropTypes.bool,
  /** @return API data object */
  data: PropTypes.object.isRequired,
  /** Boolean to not perform state transition for unmounted component
   * ### example<hr>
   * ```return () => (didCancel = true);```
   */
  didCancel: PropTypes.bool,
};

/**
 * Function to fetch data
 * @async
 */
const fetchData = async (didCancel, url, dispatch, action) => {
  dispatch({ type: "FETCH_INIT" });

  // wrap in try/catch block for error handling
  try {
    const result = await fetch(url);

    const resultData = await result.json();
    // abort data fetching
    if (!didCancel) {
      dispatch({ type: "FETCH_SUCCESS", payload: resultData });
    }
  } catch (error) {
    // abort data fetching
    const errorMessage = error.toString();
    if (!didCancel) {
      dispatch({ type: "FETCH_FAILURE", payload: errorMessage });
    }
  }
};

fetchData.propTypes = {
  /** Function to set switch case */
  dispatch: PropTypes.func.isRequired,
  /** String of switch case value */
  type: PropTypes.string.isRequired,
  /** Target API response */
  result: PropTypes.func.isRequired,
  /** Access the Fetch API */
  fetch: PropTypes.func.isRequired,
  /** URL based on query input */
  url: PropTypes.string.isRequired,
  /** @return API data object */
  data: PropTypes.object.isRequired,
  /** String of error message for displaying in error message */
  error: PropTypes.string,
  /** Returns a promise that resolves with the result of parsing the body text as JSON. */
  json: PropTypes.func.isRequired,
  /** Boolean to not perform state transition for unmounted component */
  didCancel: PropTypes.bool,
  /** Send data to update state of application data */
  payload: PropTypes.object,
};

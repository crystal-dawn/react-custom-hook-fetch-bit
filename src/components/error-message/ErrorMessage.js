import PropTypes from "prop-types";
import React from "react";

export const ErrorMessage = ({ error }) => (
  <section>
    <h1>{error}</h1>
    <p>This is likely caused by the API url in the fetch request.</p>
  </section>
);

ErrorMessage.propTypes = {
  /** Error message */
  error: PropTypes.string.isRequired,
};

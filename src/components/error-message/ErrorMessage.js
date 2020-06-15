import PropTypes from "prop-types";
import React from "react";

const ErrorMessage = ({ error }) => (
  <>
    {console.log(error)}
    <section>
      <h1>{error}</h1>
      <p>This is likely caused by a problem with the API fetch URL</p>
    </section>
  </>
);

export default ErrorMessage;

ErrorMessage.propTypes = {
  error: PropTypes.string.isRequired,
};

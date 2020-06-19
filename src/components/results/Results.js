import ListItem from "../list-item/ListItem";
import PropTypes from "prop-types";
import React from "react";

function Results({ data }) {
  const filterArg = `Pale Ale`;

  return (
    <ol>
      {/* map data from fetch request */}
      {data
        // .filter((item) => item.ingredients.malt[0].name !== filterArg)
        .map((item, id) => (
          <ListItem key={item.id} item={item.name} />
        ))}
    </ol>
  );
}

export default Results;

Results.propTypes = {
  /** Data fetched from API */
  data: PropTypes.object,
};

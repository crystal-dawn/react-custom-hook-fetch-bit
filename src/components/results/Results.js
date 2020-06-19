import ListItem from "../list-item/ListItem";
import PropTypes from "prop-types";
import React from "react";

function Results({ data }) {
  const filterArg = undefined;
  let audio =  data.find((entry) => entry.hwi.prs[0].sound.audio !== undefined)

  return (
    <ol>
      {/* map data from fetch request */}
        <ListItem key={audio} 
         item={audio.hwi.prs[0].sound.audio} 
         />
        
    </ol>
  );
}

export default Results;

Results.propTypes = {
  /** Data fetched from API */
  data: PropTypes.object,
};

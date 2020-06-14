import PropTypes from 'prop-types';
import React from "react";

/**
 * A React component that renders the results as list items.
 * @exports JSX.Element
 */
const ListItem = ({ item }) => <li>{item}</li>;

export default ListItem;

ListItem.propTypes = {
    /** String from data property to be displayed as list */
    item: PropTypes.string.isRequired
}
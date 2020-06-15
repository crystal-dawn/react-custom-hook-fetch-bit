import React, { useEffect, useState } from "react";

import PropTypes from "prop-types";

/**
 * Dropdown list from keys in teh first left of API data
 */
function FilterDropdown({ data }) {
  const [keys, setKeys] = useState([]);
  /** Extract first level keys from data */
  useEffect(() => {
    const flattenKeys = flattenObject(data);
    setKeys(Object.keys(flattenKeys));
  }, []);

  /** {@link https://stackoverflow.com/a/61100233/10380507} */
  const flattenObject = (obj) => {
    let flat = {};
    for (const [key, value] of Object.entries(obj)) {
      if (typeof value === "object" && value !== null) {
        for (const [subkey, subvalue] of Object.entries(value)) {
          // avoid overwriting duplicate keys: merge instead into array
          typeof flat[subkey] === "undefined"
            ? (flat[subkey] = subvalue)
            : Array.isArray(flat[subkey])
            ? flat[subkey].push(subvalue)
            : (flat[subkey] = [flat[subkey], subvalue]);
        }
      } else {
        flat = { ...flat, ...{ [key]: value } };
      }
    }
    return flat;
  };

  return (
    <>
      <label htmlFor="keys">Data Keys </label>

      <select id="keys">
        {keys.map((key, id) => (
          <option key={id} value={key}>
            {key}
          </option>
        ))}
      </select>
    </>
  );
}
export default FilterDropdown;

FilterDropdown.propTypes = {
  /** Data recieved from fetch */
  data: PropTypes.array,
  /** Array for keys */
  keys: PropTypes.object,
  /** Function for setting keys state */
  setKeys: PropTypes.func,
  /** Flattened keys returned from flattenObject function */
  flattenKeys: PropTypes.object,
  /**
   * Function to flatten object one level
   * #### Source code
   * [Stackoverflow](https://stackoverflow.com/a/61100233/10380507)
   * {@link https://stackoverflow.com/a/61100233/10380507}
   */
  flattenObject: PropTypes.func,
  /** Key to be used for dropdown box */
  key: PropTypes.string,
};

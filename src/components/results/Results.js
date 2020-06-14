import ListItem from '../list-item/ListItem';
import React from 'react';

function Results({data}) {
  return (
    <ul>
      {/* map data from fetch request */}
      {data.map((item, id) => (
        <ListItem key={item.id} item={item.name} />
      ))}
    </ul>
  );
}

export default Results;

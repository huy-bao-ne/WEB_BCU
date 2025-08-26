import React from 'react';

const ListItem = React.memo(function ListItem({ item, onDelete }) {
  console.log('Render ListItem:', item.id);
  return (
    <li>
      {item.text}
      <button onClick={() => onDelete(item.id)}>Delete</button>
    </li>
  );
});

export default ListItem;

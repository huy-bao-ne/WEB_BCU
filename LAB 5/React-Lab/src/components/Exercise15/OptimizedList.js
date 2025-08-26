import React, { useState, useCallback } from 'react';
import ListItem from './ListItem';
import './OptimizedList.css';

function OptimizedList() {
  const [items, setItems] = useState([
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 3' }
  ]);
  const [count, setCount] = useState(0);

  const handleDeleteItem = useCallback((id) => {
    setItems(items => items.filter(item => item.id !== id));
  }, []);

  return (
    <div className="optimized-list">
      <h2>Exercise 15: Optimized List with React.memo & useCallback</h2>
      <button onClick={() => setCount(c => c + 1)}>
        Update Parent State ({count})
      </button>
      <ul>
        {items.map(item => (
          <ListItem key={item.id} item={item} onDelete={handleDeleteItem} />
        ))}
      </ul>
    </div>
  );
}

export default OptimizedList;

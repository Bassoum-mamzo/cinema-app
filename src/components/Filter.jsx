import React from 'react';

const Filter = ({ titleFilter, setTitleFilter, ratingFilter, setRatingFilter }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Filtrer par titre..."
        value={titleFilter}
        onChange={(e) => setTitleFilter(e.target.value)}
      />
      <input
        type="number"
        placeholder="Note minimale"
        min="0"
        max="10"
        value={ratingFilter}
        onChange={(e) => setRatingFilter(Number(e.target.value))}
        style={{ marginLeft: '10px' }}
      />
    </div>
  );
};

export default Filter;

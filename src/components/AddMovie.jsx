import React, { useState } from 'react';

const AddMovie = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = { title, description, posterURL, rating };
    onAdd(newMovie);
    setTitle('');
    setDescription('');
    setPosterURL('');
    setRating(0);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input type="text" placeholder="Titre" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
      <input type="text" placeholder="URL Affiche" value={posterURL} onChange={(e) => setPosterURL(e.target.value)} required />
      <input type="number" placeholder="Note" min="0" max="10" value={rating} onChange={(e) => setRating(Number(e.target.value))} required />
      <button type="submit">Ajouter Film</button>
    </form>
  );
};

export default AddMovie;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Genre() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    // Realiza una solicitud GET al backend para obtener la lista de géneros
    axios.get('/api/genres')
      .then(response => {
        setGenres(response.data);
      })
      .catch(error => {
        console.error('Error al obtener géneros:', error);
      });
  }, []);

  return (
    <div>
      <h2>Géneros</h2>
      <ul>
        {genres.map(genre => (
          <li key={genre._id}>{genre.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Genre;

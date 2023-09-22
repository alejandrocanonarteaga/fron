
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Media() {
  const [mediaList, setMediaList] = useState([]);
  const [newMedia, setNewMedia] = useState({
    title: '',
    genre: '',
    director: '',
    year: '',
    synopsis: '',
    url: '',
    coverImage: '',
    type: '',
    productora: '',
  });

  useEffect(() => {
    // Realiza una solicitud GET al backend para obtener la lista de películas y series
    axios.get('/api/media')
      .then(response => {
        setMediaList(response.data);
      })
      .catch(error => {
        console.error('Error al obtener películas y series:', error);
      });
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewMedia({
      ...newMedia,
      [name]: value,
    });
  };

  const handleAddMedia = () => {
    // Realiza una solicitud POST al backend para agregar una nueva película o serie
    axios.post('/api/media', newMedia)
      .then(response => {
        setMediaList([...mediaList, response.data]);
        setNewMedia({
          title: '',
          genre: '',
          director: '',
          year: '',
          synopsis: '',
          url: '',
          coverImage: '',
          type: '',
          productora: '',
        });
      })
      .catch(error => {
        console.error('Error al agregar película o serie:', error);
      });
  };

  return (
    <div>
      <h2>Películas y Series</h2>
      <ul>
        {mediaList.map(media => (
          <li key={media._id}>
            <strong>{media.title}</strong> - {media.type}
          </li>
        ))}
      </ul>
      <h3>Agregar Nueva Película o Serie</h3>
      <form>
        <div>
          <label>Título:</label>
          <input type="text" name="title" value={newMedia.title} onChange={handleInputChange} />
        </div>
        <div>
          <label>Género:</label>
          <input type="text" name="genre" value={newMedia.genre} onChange={handleInputChange} />
        </div>
        <div>
          <label>Director:</label>
          <input type="text" name="director" value={newMedia.director} onChange={handleInputChange} />
        </div>
        <div>
          <label>Año de Estreno:</label>
          <input type="text" name="year" value={newMedia.year} onChange={handleInputChange} />
        </div>
        <div>
          <label>Sinopsis:</label>
          <textarea name="synopsis" value={newMedia.synopsis} onChange={handleInputChange}></textarea>
        </div>
        <div>
          <label>URL de la Película:</label>
          <input type="text" name="url" value={newMedia.url} onChange={handleInputChange} />
        </div>
        <div>
          <label>Imagen de Portada:</label>
          <input type="text" name="coverImage" value={newMedia.coverImage} onChange={handleInputChange} />
        </div>
        <div>
          <label>Tipo:</label>
          <input type="text" name="type" value={newMedia.type} onChange={handleInputChange} />
        </div>
        <div>
          <label>Productora:</label>
          <input type="text" name="productora" value={newMedia.productora} onChange={handleInputChange} />
        </div>
        <button type="button" onClick={handleAddMedia}>Agregar</button>
      </form>
    </div>
  );
}

export default Media;

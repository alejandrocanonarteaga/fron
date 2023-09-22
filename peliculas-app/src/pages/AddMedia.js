import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AddMedia() {
  const [title, setTitle] = useState('');
  const [sinopsis, setSinopsis] = useState('');
  const [url, setUrl] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [year, setYear] = useState('');
  const [genre, setGenre] = useState('');
  const [director, setDirector] = useState('');
  const [productora, setProductora] = useState('');
  const [tipo, setTipo] = useState('');
  const [genres, setGenres] = useState([]);
  const [directors, setDirectors] = useState([]);
  const [productoras, setProductoras] = useState([]);
  const [tipos, setTipos] = useState([]);

  useEffect(() => {
    // Realiza solicitudes GET al backend para obtener listas de géneros, directores, productoras y tipos
    axios.get('/api/genres')
      .then(response => {
        setGenres(response.data);
      })
      .catch(error => {
        console.error('Error al obtener géneros:', error);
      });

    axios.get('/api/directors')
      .then(response => {
        setDirectors(response.data);
      })
      .catch(error => {
        console.error('Error al obtener directores:', error);
      });

    axios.get('/api/productoras')
      .then(response => {
        setProductoras(response.data);
      })
      .catch(error => {
        console.error('Error al obtener productoras:', error);
      });

    axios.get('/api/tipos')
      .then(response => {
        setTipos(response.data);
      })
      .catch(error => {
        console.error('Error al obtener tipos:', error);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Realiza una solicitud POST al backend para agregar una nueva película o serie
      const response = await axios.post('/api/media', {
        title,
        sinopsis,
        url,
        coverImage,
        year,
        genre,
        director,
        productora,
        tipo,
      });

      // Muestra un mensaje de éxito o redirecciona a otra página
      console.log('Película/Serie agregada con éxito:', response.data);
      // Redirecciona a la página de inicio o a otra página según sea necesario
    } catch (error) {
      console.error('Error al agregar película/serie:', error);
    }
  };

  return (
    <div>
      <h2>Agregar Película/Serie</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Sinopsis:</label>
          <textarea value={sinopsis} onChange={(e) => setSinopsis(e.target.value)} required />
        </div>
        <div>
          <label>URL de la Película/Serie:</label>
          <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} required />
        </div>
        <div>
          <label>Imagen de Portada (URL):</label>
          <input type="text" value={coverImage} onChange={(e) => setCoverImage(e.target.value)} />
        </div>
        <div>
          <label>Año de Estreno:</label>
          <input type="text" value={year} onChange={(e) => setYear(e.target.value)} required />
        </div>
        <div>
          <label>Género:</label>
          <select value={genre} onChange={(e) => setGenre(e.target.value)} required>
            <option value="">Selecciona un género</option>
            {genres.map((g) => (
              <option key={g._id} value={g._id}>
                {g.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Director:</label>
          <select value={director} onChange={(e) => setDirector(e.target.value)} required>
            <option value="">Selecciona un director</option>
            {directors.map((d) => (
              <option key={d._id} value={d._id}>
                {d.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Productora:</label>
          <select value={productora} onChange={(e) => setProductora(e.target.value)} required>
            <option value="">Selecciona una productora</option>
            {productoras.map((p) => (
              <option key={p._id} value={p._id}>
                {p.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Tipo:</label>
          <select value={tipo} onChange={(e) => setTipo(e.target.value)} required>
            <option value="">Selecciona un tipo</option>
            {tipos.map((t) => (
              <option key={t._id} value={t._id}>
                {t.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <button type="submit">Agregar Película/Serie</button>
        </div>
      </form>
    </div>
  );
}

export default AddMedia;

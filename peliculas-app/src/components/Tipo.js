import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Tipo() {
  const [tipos, setTipos] = useState([]);
  const [nuevoTipo, setNuevoTipo] = useState('');

  useEffect(() => {
    // Realiza una solicitud GET al backend para obtener la lista de tipos
    axios.get('/api/tipos')
      .then(response => {
        setTipos(response.data);
      })
      .catch(error => {
        console.error('Error al obtener tipos:', error);
      });
  }, []);

  const handleAgregarTipo = () => {
    // Realiza una solicitud POST al backend para agregar un nuevo tipo
    axios.post('/api/tipos', { name: nuevoTipo })
      .then(response => {
        setTipos([...tipos, response.data]);
        setNuevoTipo('');
      })
      .catch(error => {
        console.error('Error al agregar tipo:', error);
      });
  };

  return (
    <div>
      <h2>Tipos de Multimedia</h2>
      <ul>
        {tipos.map(tipo => (
          <li key={tipo._id}>{tipo.name}</li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Nuevo Tipo"
          value={nuevoTipo}
          onChange={e => setNuevoTipo(e.target.value)}
        />
        <button onClick={handleAgregarTipo}>Agregar</button>
      </div>
    </div>
  );
}

export default Tipo;

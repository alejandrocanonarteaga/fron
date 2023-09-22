import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Productora() {
  const [productoras, setProductoras] = useState([]);

  useEffect(() => {
    // Realiza una solicitud GET al backend para obtener la lista de productoras
    axios.get('/api/productoras')
      .then(response => {
        setProductoras(response.data);
      })
      .catch(error => {
        console.error('Error al obtener productoras:', error);
      });
  }, []);

  return (
    <div>
      <h2>Productoras</h2>
      <ul>
        {productoras.map(productora => (
          <li key={productora._id}>
            <strong>Nombre:</strong> {productora.name}<br />
            <strong>Slogan:</strong> {productora.slogan}<br />
            <strong>Descripción:</strong> {productora.description}<br />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Productora;

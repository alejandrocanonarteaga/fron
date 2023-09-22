import React from 'react';
import Genre from '../components/Genre';
import Director from '../components/Director';
import Productora from '../components/Productora';
import Tipo from '../components/Tipo';
import Media from '../components/Media';

function Home() {
  return (
    <div>
      <h1>Administrador de Películas</h1>
      <Genre />
      <Director />
      <Productora />
      <Tipo />
      <Media />
    </div>
  );
}

export default Home;


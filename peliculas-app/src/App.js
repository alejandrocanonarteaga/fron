import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import AddMedia from './pages/AddMedia';

function App() {
  return (
    <Router>
      <div>
        {/* Aquí puedes agregar encabezados, barras de navegación, o componentes que quieras que estén presentes en todas las páginas */}
        <header>
          <h1>Mi Aplicación de Películas</h1>
        </header>

        {/* Configura las rutas */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/add-media" component={AddMedia} />
          {/* Agrega más rutas aquí si necesitas más páginas */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import Formulario from './components/Formulario';

function App() {
  return (
    <div className="conatiner">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de imágenes</p>
        <Formulario />
      </div>
    </div>
  );
}

export default App;

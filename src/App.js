import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario';

function App() {

  // state de la app
  const [busqueda, guardarBusqueda] = useState('');

  useEffect(() => {
    const consultarAPI = async () => {
      if (busqueda === '') return;

      const imagenesPorPagina = 10;
      const key = '15913934-01d4071c3e9a1516dda3a7bd3';
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}`;

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      guardarBusqueda(resultado.hits)
    }
    consultarAPI();
  }, [busqueda])

  return (
    <div className="conatiner">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de imágenes</p>
        <Formulario
          guardarBusqueda={guardarBusqueda}
        />
      </div>
    </div>
  );
}

export default App;

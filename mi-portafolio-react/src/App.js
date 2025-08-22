import React from 'react';
import './App.css';
import Cabecera from './components/cabecera/cabecera';
import Acerca from './components/acerca/acerca';
import Proyectos from './components/proyectos/proyectos';
import Experiencia from './components/experiencia/experiencia';

function App() {
    return (
        <div className="App">
            <div className="main-grid-container">
                {/* Contenedor de la izquierda */}
                <div className="left-container">
                    <Cabecera />
                </div>
                {/* Contenedor de la derecha */}
                <div className="right-container">
                    <Acerca />
                    <Proyectos />
                    <Experiencia />
                </div>
            </div>
        </div>
    );
}

export default App;
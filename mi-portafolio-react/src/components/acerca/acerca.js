import React from 'react';
import './acerca.css';
import githubIcon from '../../images/github-icon.png';
import linkedinIcon from '../../images/linkedin-icon.png';
import emailIcon from '../../images/email-icon.png';

function Acerca() {
    return (
        <section className="seccion-contenido" id="acerca">
            {/* Nuevo contenedor para el contenido de Acerca de mí */}
            <div className="acerca-contenido">
                <h2>Acerca de mí</h2>
                <p>Me caracterizo por ser perfeccionista y organizada, lo que me permite anticiparme a los detalles y entregar resultados de calidad. Disfruto trabajar en proyectos que requieren planificación, claridad en la comunicación y visión técnica, con el objetivo de generar valor real en cada solución desarrollada.</p>
                <ul className="info-contacto-acerca">
                    <li>
                        <a href="mailto:soofiaa.menzel@gmail.com" target="_blank" rel="noopener noreferrer">
                            <img src={emailIcon} alt="Email" className="icon" />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Soofiaa" target="_blank" rel="noopener noreferrer">
                            <img src={githubIcon} alt="GitHub" className="icon" />
                        </a>
                    </li>
                    <li>
                        <a href="https://linkedin.com/in/sofia-menzel-madrid/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedinIcon} alt="LinkedIn" className="icon" />
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Acerca;
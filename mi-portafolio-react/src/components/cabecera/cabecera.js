import React from 'react';
import './cabecera.css';
import githubIcon from '../../images/github-icon.png';
import linkedinIcon from '../../images/linkedin-icon.png';
import emailIcon from '../../images/email-icon.png';

function Cabecera() {
    return (
        <header className="cabecera">
            <h1>Sofía Menzel</h1>
            <p className="cabecera-titulo">Ingeniera en Ejecución Informática</p>
            <ul className="info-contacto-acerca">
                <li>
                    <a href="mailto:soofiaa.menzel@gmail.com" target="_blank" rel="noopener noreferrer">
                        {/* Agregamos la clase 'icon-email' aquí */}
                        <img src={emailIcon} alt="Email" className="icon icon-email" />
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
        </header>
    );
}

export default Cabecera;
import React from 'react'

import imgPerfil from '../assets/images/fotoperfil.png'
import CV from '../assets/pdf/cv.pdf'

const Inicio = () => {
    return (
        <main class="main">
        <div class="info-content">
          <h1>Yo soy <span>Yamid</span> Ortiz</h1>
          <p>
            Programador enfocado al desarrollo de software web, me capacito
            constantemente de forma autodidacta, para lograr estar al marge de
            desarrollo tecnologico.Con experiencia de 6 meses en tecnologias
            frontend HTML5, CSS3, JavaScript y backend Java, Python, bases de
            datos relacionales como MySQL
          </p>
          <a
            download="cv.pdf"
            hRef={CV}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button class="download-cv">Descargar CV</button>
          </a>
        </div>
        <img src={imgPerfil} alt="foto perfil" />
      </main>
    )
}

export default Inicio

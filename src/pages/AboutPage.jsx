import { useEffect } from "react";
import { Footer, NavBar } from "../components"
import { handleObserver } from "../helpers";

import aboutHeaderBackground from '../assets/backgrounds/about-header.png';
import aboutMeImage from '../assets/about_me_image.png';
import aboutMeTattoo from '../assets/about-tattoo.png';
import aboutMePainting from '../assets/about_painting.png';

export const AboutPage = () => {

  useEffect(() => {
    handleObserver('.about-container');
  }, [])
  

  return (
    <div className="wrapper">
      <NavBar/>
      <section className="about-section">
        

        <header className="about-header">
          <img src={aboutHeaderBackground}/>
          <div className="about-header-text">
            <h3>Acerca de mí</h3>
            <p>Conóceme</p>
          </div>
        </header>


        <main className="about-main">
          <h3>¡Hola, soy Danae!</h3>
          <div className="about-container">
              <div className="about-container-text">
                <h2 className="about-container-title">Tatuadora creativa</h2>
                <p className="about-container-paragraph">Mi nombre es Danae, soy una tatuadora apasionada y creativa. Mi objetivo es convertir tus ideas en arte duradero en la piel. Con mi estilo diverso y atención meticulosa, estoy aquí para crear tatuajes significativos y personalizados que reflejen tu estilo. </p>
                <p className="about-container-italic-text">¡Espero trabajar contigo y llevar tu visión a la vida!</p>
              </div>
              <img src={aboutMeImage} />
          </div>


          <div className="about-container reverse">
              <div className="about-container-text">
                <h2 className="about-container-title">Diseño a tu medida</h2>
                <p className="about-container-paragraph">Mi estilo abarca desde el realismo detallado hasta el estilo tradicional y 
geométrico. Siempre estoy explorando nuevas técnicas y tendencias 
en el mundo del tatuaje para asegurarme de ofrecer a mis clientes 
opciones diversas y emocionantes.</p>
              </div>
              <img src={aboutMeTattoo} className="tattoo-border"/>
          </div>

          <div className="about-container">
              <div className="about-container-text">
                <h2 className="about-container-title">Más allá del tatuaje</h2>
                <p className="about-container-paragraph">Cuando no estoy tatuando, me gusta sumergirme 
en otras formas de arte, como la pintura y el 
dibujo. Siempre estoy en busca de inspiración en 
diferentes disciplinas para expandir mi creatividad 
y mejorar mis habilidades como artista.</p>
              </div>
              <img src={aboutMePainting} className="painting-border" />
          </div>
        </main>

        <Footer/>

      </section>
    </div>
  )
}

import { useEffect } from 'react';
import { NavBar, HomeHeader, TattoosPreview, Socials, Footer } from '../components';
import { handleObserver } from '../helpers';

import homeInfoBackground from '../assets/backgrounds/home-info.jpg';
import tattooInfo from '../assets/tattoo-info-section.png';

export const HomePage = () => {

  useEffect(() => {
    handleObserver('.info-section-container');
    const navlink = document.querySelectorAll(".nav-link");
    const burgerMenu = document.querySelector(".burger-menu");
    burgerMenu.classList.add("fil-non");
    navlink.forEach(link => {
      link.classList.add("color-b");
    });
  }, []);

  return (
    <div className="wrapper">
      <NavBar/>
      <HomeHeader />
      <section id="info-section" className="info-section" >
          <img src={homeInfoBackground} alt="background" className="info-section-background" />
          <div className="info-section-container" >
              <div className="info-section-text">
                  <h2 className="info-section-title">Estudio de tatuajes <span>Gugost</span></h2>
                  <p className="info-section-paragraph">Gugost estudio ofrece la oportunidad de obtener un tatuaje único y personalizado. Trabajo estrechamente contigo para convertir tus ideas en un diseño exclusivo que refleje tu estilo y personalidad.
Tu seguridad y satisfacción es mi máxima prioridad. Gugost estudio cumple con todas las normas de higiene y esterilización, utilizando equipos desechables y esterilizados para garantizar un ambiente limpio y seguro. Además, se cuenta con personal altamente capacitado y con amplia experiencia en el arte del tatuaje.</p>
              </div>
              <img src={tattooInfo} alt="tattoo image" className="info-section-image" />
          </div>
      </section>
      <TattoosPreview/>
      <Socials/>
      <Footer/>
    </div>
  )
}

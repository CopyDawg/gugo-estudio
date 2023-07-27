import { useEffect } from "react";
import { Footer, NavBar } from "../components"

import galleryBackground from '../assets/backgrounds/tattoo-header.jpg';

const getTattoPath = (tattooNumber) => `/tattoo_gallery/tattoo-${tattooNumber}.jpg`;

const tattoItemsCount = 50;

const tattoItems = new Array(tattoItemsCount).fill(0).map((_, index) => getTattoPath(index+1));

export const TattoosPage = () => {

  useEffect(() => {
    let modal = document.querySelector(".popup-gallery-image-container");
    modal.style.display = "none";
  }, [])
  

  const handleOpenModal = (event) => {

    let modal = document.querySelector(".popup-gallery-image-container");
    let modalImage = document.querySelector(".popup-gallery-image");

    modalImage.src = event.target.currentSrc; 
    modal.style.display = "flex";
    modal.style.top = screenY+'px';
  }

  const handleCloseModal = () => {
    let modal = document.querySelector(".popup-gallery-image-container");
    modal.style.display = "none";
  }


  // const imagesList = [];
  // for (let i=1; i<=50; i++) {
  //   imagesList.push(<img loading="lazy" onClick={handleOpenModal} key={i} src={tattoo2.replace('2', i)}/>)
  // }

  return (
    <div className="wrapper">
      <NavBar/>
      <section className="about-section">

        <header className="about-header">
          <img id="gallery-header-background" src={galleryBackground}/>
          <div className="about-header-text">
            <h3>Galeria de tatuajes</h3>
            <p>Echa un vistazo a algunos de mis trabajos</p>
          </div>
        </header>

        <main className="gallery-section">
          <div className="gallery-container">
            <h3>Explora tatuajes</h3>
            <div className="gallery-images-container">
              { tattoItems.map((tattoItem, index) => (
                <img  src={tattoItem} alt={`tattoo preview-${index}`} key={index} loading="lazy" onClick={handleOpenModal} className="gallery-image" />
              ))}
            </div>
          </div>
        </main>

        <Footer/>

      </section>

      <div className="popup-gallery-image-container">
            <span onClick={handleCloseModal}>&times;</span>
            <img src="/tattoo_gallery/tattoo-2.jpg" alt="tattoo preview" className="popup-gallery-image" />
      </div>

    </div>    
  )
}

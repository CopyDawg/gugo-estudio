import { useEffect } from "react";
import { Footer, NavBar } from "../components"

export const TattoosPage = () => {

  useEffect(() => {
    let modal = document.querySelector(".popup-gallery-image-container");
    modal.style.display = "none";
  }, [])
  

  const handleOpenModal = (event) => {
    let modal = document.querySelector(".popup-gallery-image-container");
    let modalImage = document.querySelector(".popup-gallery-image");

    document.querySelector(".wrapper").style.overflowY = "hidden"; 
    modalImage.src = event.target.currentSrc.replace(event.view.origin,'');
    modal.style.display = "flex";
    modal.style.top = screenY+'px';
  }

  const handleCloseModal = () => {
    let modal = document.querySelector(".popup-gallery-image-container");
    document.querySelector(".wrapper").style.overflowY = "auto";
    modal.style.display = "none";
  }

  const imagesList = [];
  for (let i=1; i<=50; i++) {
    imagesList.push(<img loading="lazy" onClick={handleOpenModal} key={i} src={`src/assets/tattoo_gallery/tattoo-${i}.jpg`}/>)
  }

  return (
    <div className="wrapper">
      <NavBar/>
      <section className="about-section">

        <header className="about-header">
          <img id="gallery-header-background" src="src\assets\backgrounds\tattoo-header.jpg"/>
          <div className="about-header-text">
            <h3>Galeria de tatuajes</h3>
            <p>Echa un vistazo a algunos de mis trabajos</p>
          </div>
        </header>

        <main className="gallery-section">
          <div className="gallery-container">
            <h3>Explora tatuajes</h3>
            <div className="gallery-images-container">
              {imagesList}
            </div>
          </div>
        </main>

        <Footer/>

      </section>

      <div className="popup-gallery-image-container">
            <span onClick={handleCloseModal}>&times;</span>
            <img src="src\assets\tattoo_gallery\tattoo-2.jpg" alt="tattoo preview" className="popup-gallery-image" />
      </div>

    </div>    
  )
}

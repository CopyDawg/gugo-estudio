import { NavLink } from 'react-router-dom'
import { imageScroller } from '../helpers';
import { useEffect } from 'react';

export const TattoosPreview = () => {

    const handleOpenModal = (event) => {
        let modal = document.querySelector(".popup-image-container");
        let modalImage = document.querySelector(".popup-image");

        document.querySelector(".wrapper").style.overflowY = "hidden"; 
        modalImage.src = event.target.currentSrc.replace(event.view.origin,'');
        modal.style.display = "flex";
    }

    const handleCloseModal = () => {
        let modal = document.querySelector(".popup-image-container");
        document.querySelector(".wrapper").style.overflowY = "auto";
        modal.style.display = "none";
    }

    useEffect(() => {
        imageScroller();
    }, []);
    
    return (
        <>
            <section id="tattoos-section" className="tattoos-section">
                <div className="tattoos-section-container">
                    <h1 className="tattoos-section-title" >Últimos tatuajes</h1>
                    <div className="tattoo-section-scroller-wrapper">
                        <img id="prevBtn" src="src\assets\icons\left-arrow.png" alt="left arrow" />
                        <div  className="tattoos-section-scroller" >
                            <a href="#tattoos-section">
                                <img onClick={handleOpenModal} src="src\assets\tattoo_gallery\tattoo-1.jpg" alt="tattoo preview" className="tattoo-section-image" />
                                <img onClick={handleOpenModal} src="src\assets\tattoo_gallery\tattoo-2.jpg" alt="tattoo preview" className="tattoo-section-image" />
                                <img onClick={handleOpenModal} src="src\assets\tattoo_gallery\tattoo-3.jpg" alt="tattoo preview" className="tattoo-section-image" />
                                <img onClick={handleOpenModal} src="src\assets\tattoo_gallery\tattoo-4.jpg" alt="tattoo preview" className="tattoo-section-image" />
                                <img onClick={handleOpenModal} src="src\assets\tattoo_gallery\tattoo-13.jpg" alt="tattoo preview" className="tattoo-section-image" />
                                <img onClick={handleOpenModal} src="src\assets\tattoo_gallery\tattoo-14.jpg" alt="tattoo preview" className="tattoo-section-image" />
                                <img onClick={handleOpenModal} src="src\assets\tattoo_gallery\tattoo-15.jpg" alt="tattoo preview" className="tattoo-section-image" />
                                <img onClick={handleOpenModal} src="src\assets\tattoo_gallery\tattoo-16.jpg" alt="tattoo preview" className="tattoo-section-image" />
                                <img onClick={handleOpenModal} src="src\assets\tattoo_gallery\tattoo-17.jpg" alt="tattoo preview" className="tattoo-section-image" />
                            </a>
                        </div>
                        <img id="nextBtn" src="src\assets\icons\right-arrow.png" alt="right arrow" />
                    </div>
                    <NavLink to="/tattoos" className="styled-button" >Ver todos los tatuajes</NavLink>
                </div>
            </section>
            <div className="popup-image-container">
                <span onClick={handleCloseModal}>&times;</span>
                <img src="src\assets\tattoo_gallery\tattoo-2.jpg" alt="tattoo preview" className="popup-image" />
            </div>
        </>
    )
}

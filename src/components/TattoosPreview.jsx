import { NavLink } from 'react-router-dom'
import { imageScroller } from '../helpers';
import { useEffect } from 'react';

import leftArrow from '../assets/icons/left-arrow.png';
import rightArrow from '../assets/icons/right-arrow.png';
import tattoo1 from '../assets/tattoo_gallery/tattoo-1.jpg';
import tattoo2 from '../assets/tattoo_gallery/tattoo-2.jpg';
import tattoo3 from '../assets/tattoo_gallery/tattoo-3.jpg';
import tattoo4 from '../assets/tattoo_gallery/tattoo-4.jpg';
import tattoo5 from '../assets/tattoo_gallery/tattoo-5.jpg';
import tattoo6 from '../assets/tattoo_gallery/tattoo-6.jpg';
import tattoo7 from '../assets/tattoo_gallery/tattoo-7.jpg';
import tattoo8 from '../assets/tattoo_gallery/tattoo-8.jpg';
import tattoo9 from '../assets/tattoo_gallery/tattoo-9.jpg';

export const TattoosPreview = () => {

    const handleOpenModal = (event) => {    
        let modal = document.querySelector(".popup-image-container");
        let modalImage = document.querySelector(".popup-image");

        document.querySelector(".wrapper").style.overflowY = "hidden"; 
        modalImage.src = event.target.currentSrc; //.replace(`${event.view.origin}`,'')
        console.log(modalImage)
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
                        <img id="prevBtn" src={leftArrow} alt="left arrow" />
                        <div  className="tattoos-section-scroller" >
                            <a href="#tattoos-section">
                                <img onClick={handleOpenModal} src={tattoo1} alt="tattoo preview" className="tattoo-section-image" />
                                <img onClick={handleOpenModal} src={tattoo2} alt="tattoo preview" className="tattoo-section-image" />
                                <img onClick={handleOpenModal} src={tattoo3} alt="tattoo preview" className="tattoo-section-image" />
                                <img onClick={handleOpenModal} src={tattoo4} alt="tattoo preview" className="tattoo-section-image" />
                                <img onClick={handleOpenModal} src={tattoo5} alt="tattoo preview" className="tattoo-section-image" />
                                <img onClick={handleOpenModal} src={tattoo6} alt="tattoo preview" className="tattoo-section-image" />
                                <img onClick={handleOpenModal} src={tattoo7} alt="tattoo preview" className="tattoo-section-image" />
                                <img onClick={handleOpenModal} src={tattoo8} alt="tattoo preview" className="tattoo-section-image" />
                                <img onClick={handleOpenModal} src={tattoo9} alt="tattoo preview" className="tattoo-section-image" />
                            </a>
                        </div>
                        <img id="nextBtn" src={rightArrow} alt="right arrow" />
                    </div>
                    <NavLink to="/tattoos" className="styled-button" >Ver todos los tatuajes</NavLink>
                </div>
            </section>
            <div className="popup-image-container">
                <span onClick={handleCloseModal}>&times;</span>
                <img src={tattoo2} alt="tattoo preview" className="popup-image" />
            </div>
        </>
    )
}

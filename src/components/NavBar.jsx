import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { scrollWatcher } from '../helpers';

export const NavBar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleNavMenu = () => {
        const navMenu = document.querySelector('.nav-list-mobile');
        const wrapper = document.querySelector(".wrapper");

        if(isMenuOpen) {
            navMenu.style.right = '-100%';
            wrapper.style.overflowY = "auto"; 
        }
        else {
            navMenu.style.right = 0;
            wrapper.style.overflowY = "hidden"; 
        }

        setIsMenuOpen(!isMenuOpen);

    }

    useEffect(() => {
        scrollWatcher();
    }, []);
    

    return (
        <div className="navbar" >
            <div className="logo-container">
                <Link to="/" >
                <img src="src\assets\apple-logo.png" alt="Logotipo Gugo" />
                </Link>
            </div>
            <div className="navigation-container">
                <nav className="nav-list">
                    <NavLink className="nav-link" to="/tattoos" >Tatuajes</NavLink>
                    <NavLink className="nav-link" to="/about" >Acerca de mí</NavLink>
                    <NavLink className="nav-link" to="/faq" >FAQ</NavLink>
                    <div className="contact-container">
                        <NavLink to="/contact" className="styled-button" >Cotiza tu tatuaje</NavLink>
                    </div>
                </nav>
                <img src="src\assets\icons\burger-menu.png" className="burger-menu" onClick={ handleNavMenu }/>
                <nav className="nav-list-mobile">
                    <img src="src\assets\icons\right-arrow-navmenu.png" className="back-arrow-menu" onClick={ handleNavMenu }/>
                    <Link onClick={ handleNavMenu } className="nav-link-logo" to="/" >
                        <img src="src\assets\apple-logo.png" alt="Logotipo Gugo" />
                    </Link>
                    <NavLink onClick={ handleNavMenu } className="nav-link" to="/tattoos" >Tatuajes</NavLink>
                    <NavLink onClick={ handleNavMenu } className="nav-link" to="/about" >Acerca de mí</NavLink>
                    <NavLink onClick={ handleNavMenu } className="nav-link" to="/faq" >FAQ</NavLink>
                    <NavLink onClick={ handleNavMenu } className="nav-link" to="/contact" >Cotiza tu tatuaje</NavLink>
                </nav>
            </div>
            
        </div>
    )
}

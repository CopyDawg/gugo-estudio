import { Navigate, Route, Routes } from "react-router-dom"
import { AboutPage, ContactPage, FAQPage, HomePage, TattoosPage, Loading } from '../pages';
import { useState } from "react";

export const AppRouter = () => {

    const [isLoaded, setIsLoaded] = useState(false);
    window.addEventListener('load', (event) => {
        // setTimeout(() => {
        //     setIsLoaded(true);
        //   }, 3000);
          setIsLoaded(true);
    });

    return (
        <Routes>
            {
                isLoaded
                ? <Route path="/" element={ <HomePage/> } />
                : <Route path="/" element={ <Loading/> } />
            }
            <Route path="/tattoos" element={ <TattoosPage/> } />
            <Route path="/about" element={ <AboutPage/> } />
            <Route path="/faq" element={ <FAQPage/> } />
            <Route path="/contact" element={ <ContactPage/> } />

            <Route path="/*" element={ <Navigate to="/" /> } />
        </Routes>
    );
}

import { Navigate, Route, Routes } from "react-router-dom"
import { AboutPage, ContactPage, FAQPage, HomePage, TattoosPage, Loading } from '../pages';
import { useEffect, useState } from "react";

export const AppRouter = () => {

    return (
        <Routes>
      
            <Route path="/" element={ <HomePage/> } />
    
            <Route path="/tattoos" element={ <TattoosPage/> } />
            <Route path="/about" element={ <AboutPage/> } />
            <Route path="/faq" element={ <FAQPage/> } />
            <Route path="/contact" element={ <ContactPage/> } />

            <Route path="/*" element={ <Navigate to="/" /> } />
        </Routes>
    );
}

import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { Footer, NavBar, EmailResponseMsg } from "../components";
import { useForm } from "../hooks";

import contactBackground from '../assets/backgrounds/contact-header.jpg'

const contactFormFields = {
  name:         '',
  phone:        '',
  email:        '',
  size:         '',
  description:  '',
}

export const ContactPage = () => {

  const form = useRef();
  const { name, phone, email, size, description, onInputChange, onResetForm } = useForm( contactFormFields );

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {

      let response = await emailjs.sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID, 
        import.meta.env.VITE_EMAIL_TEMPLATE_ID, 
        form.current, 
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      );
      console.log(response.text);
      document.querySelector('.email-success').style.display = "flex";
      document.querySelector('.email-success').classList.add("vanish");
      setTimeout(() => {
        document.querySelector('.email-success').style.display = "none";
      }, 5000);
      onResetForm();
    }
    catch(error) {
      console.log(error);
      document.querySelector('.email-error').style.display = "flex";
      document.querySelector('.email-error').classList.add("vanish");
      setTimeout(() => {
        document.querySelector('.email-error').style.display = "none";
      }, 5000);
    }
  }

  return (
    <div className="wrapper">
      <NavBar/>
      <section className="about-section">
        

        <header className="about-header">
          <img src={contactBackground}/>
          <div className="about-header-text">
            <h3>Contacto</h3>
            <p>Me encantaría escuchar tu idea</p>
          </div>
        </header>


        <main className="faq-main">
          <div className="faq-container">
            <h3>Llena los campos</h3>



            <form ref={form} onSubmit={ handleSubmit } className="contact">
              <input 
                type="text" 
                placeholder="Nombre" 
                name="name" 
                value={ name }
                onChange={ onInputChange }
                required 
                className="contact-field" 
              />
              <input 
                type="text" 
                placeholder="Teléfono" 
                name="phone" 
                value={ phone }
                onChange={ onInputChange }
                required 
                className="contact-field" 
              />
              <input 
                type="email" 
                placeholder="Email" 
                name="email" 
                value={ email }
                onChange={ onInputChange }
                required 
                className="contact-field" 
              />
              <input 
                type="text" 
                placeholder="Tamaño del tatuaje ( ej. 10cm, brazo completo, etc)" 
                name="size" 
                value={ size }
                onChange={ onInputChange }
                required 
                className="contact-field" 
              />
              <textarea 
                placeholder="Describe tu idea de tatuaje" 
                name="description" 
                value={ description }
                onChange={ onInputChange }
                required
                rows={8} cols={100}
              />
              <input 
                type="submit" 
                value="Enviar" 
                className="contact-submit" 
              />
            </form>

            <EmailResponseMsg/>
            

          </div>
        </main>

        <Footer/>

      </section>
    </div>
  )
}

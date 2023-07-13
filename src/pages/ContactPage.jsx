import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { Footer, NavBar } from "../components";
import { useForm } from "../hooks";

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

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs.sendForm('service_ux8x8or', 'template_t4tpgic', form.current, 'TYo-PGRkLyc-xCmx7')
      .then((result) => {
          console.log(result.text);
          onResetForm();
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <div className="wrapper">
      <NavBar/>
      <section className="about-section">
        

        <header className="about-header">
          <img src="src\assets\backgrounds\contact-header.jpg"/>
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

            <div id="email-success" className="email-msg">
              <img src="src\assets\icons\success.png" />
              <h4 className="success-msg">Mensaje enviado correctamente.</h4>
            </div>

            <div id="email-error" className="email-msg">
              <img src="src\assets\icons\error.png" />
              <h4 className="error-msg">Error al enviar el mensaje, vuelva a intentar.</h4>
            </div>
            

          </div>
        </main>

        <Footer/>

      </section>
    </div>
  )
}

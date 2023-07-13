import { Footer, NavBar } from "../components"

export const FAQPage = () => {
  return (
    <div className="wrapper">
      <NavBar/>
      <section className="about-section">
        

        <header className="about-header">
          <img src="src\assets\backgrounds\faq-header.jpg"/>
          <div className="about-header-text">
            <h3>Preguntas frecuentes y cuidados</h3>
            <p>Tips y medidas para cuidar tu tatuaje</p>
          </div>
        </header>


        <main className="faq-main">
          <div className="faq-container">
            
            <h3>Cuidados de un tatuaje</h3>
            <ol>
              <li>Remover el plástico luego de 2 horas a 3 horas máximo.</li>
              <li>Lava el tatuaje con agua tibia, jabón neutro, frotándolo solo con tus manos, hasta que tu piel quede suave (remover la capa gelatinosa).</li>
              <li>Deja que el tatuaje seque al ambiente, una vez seco aplica una capa ligeramente del ungüento recomendado por el tatuador.</li>
              <li>Lávalo 3 veces al día durante 5 días y aplica el ungüento.</li>
              <li>Suspende el ungüento y los lavados. Comienza a lubricar la zona con crema humectante cuando lo sientas reseco, durante otros 5 días.</li>
            </ol>

            <h4 className="faq-red-message">Importante</h4>
            <ul>
              <li>No te metas a albercas, spas, saunas y playa durante 2 semanas.</li>
              <li>No rasques el tatuaje o lo toques con las manos sucias.</li>
              <li>Deja que la costra que se forme se caiga por sí sola.</li>
              <li>No utilices otro producto o ungüento distinto a los recomendados por tu tatuador.</li>
            </ul>

            <br/>
            <h3>Preguntas frecuentes</h3>

            <div className="faq-question">
              <h4>¿Cuánto costará mi tatuaje?</h4>
              <p>El costo es en base al diseño y detalle, diseños personalizados tienen un costo extra, puedes mandar una idea de lo que se busca vía Facebook, Whatsapp, Instagram o en la página web para recibir una cotización.</p>
            </div>

            <div className="faq-question">
              <h4>¿Debo de pagar un anticipo?</h4>
              <p>Sí, para realizar una cita se debe de pagar un anticipo de $250 MXN.</p>
            </div>

            <div className="faq-question">
              <h4>¿Cómo hago una cita?</h4>
              <p>Para realizar una cita puedes contactarme por cualquiera de mis redes sociales, estaré encantada de ayudarte.</p>
            </div>

            <div className="faq-question">
              <h4>¿Qué debo de hacer antes de mi cita?</h4>
              <p>Organiza tu tiempo para llegar a tiempo a la cita, no tomes bebidas alcoholicas antes de tu cita, come algo para que no llegues con el estómago vacío, toma agua.</p>
            </div>

          </div>
        </main>

        <Footer/>

      </section>
    </div>
  )
}

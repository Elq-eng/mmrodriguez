import { FormData } from "../components/FormData";
import "../css/inicio.css";
import Image1 from '../assets/images/Inicio/1.jpg'
import Image2 from '../assets/images/Inicio/2.jpg'
import Image3 from '../assets/images/Inicio/3.jpg'
import Image4 from '../assets/images/Inicio/4.jpg'
import Image5 from '../assets/images/Inicio/5.jpg'
import Image6 from '../assets/images/Inicio/6.jpg'




export const Inicio = () => {
  return (
    <div className="page">
      <div className="textTitle">
        <h1>Bienvenido</h1>
        <h2>"Desarrolla, adapta y disena la idea con MM"</h2>
      </div>
      <div className="imagesFront">
        <img src={Image1} alt="" />
        <img src={Image2} className="image-2" alt="" />
      </div>

      <div className="bg-pink">
        <div> <h1 className="font-family-all">Manualidades a tu imaginación </h1> </div>
        <div className="divMedium">
          <div className="imageMenu" >
            <img src={Image3} alt="" />
            <img src={Image4} alt="" />
            <img src={Image5} alt="" />
          </div>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <h4 className="font-family-text">Tematica BabyShower</h4>
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <span className="font-family-text" style={{'font-size': '25px' }}>Es una forma divertida de decorar y organizar la celebración para dar la bienvenida al próximo bebé.</span>
                  
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <h4 className="font-family-text">Cumpleaños Sorpresa</h4>
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <span className="font-family-text" style={{'font-size': '25px' }}>¡Organizar un cumpleaños sorpresa es una excelente manera de hacer sentir especial a alguien en su día especial! Aquí tienes algunos pasos para planificar un cumpleaños sorpresa exitoso</span>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <h4 className="font-family-text">Tematica de Halloween</h4>
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <span className="font-family-text" style={{'font-size': '25px' }}>Es una oportunidad perfecta para organizar una fiesta llena de diversión y sustos. Puedes decorar con elementos clásicos de terror, como calabazas talladas, telarañas, velas negras y calaveras. También puedes crear un ambiente espeluznante con luces tenues y música ambiental. Para añadir más emoción, puedes organizar actividades como un concurso de disfraces, juegos de miedo o incluso una casa embrujada. ¡Asegúrate de tener comida y bebidas temáticas, como golosinas espeluznantes, cócteles de colores llamativos y pasteles decorados de Halloween!</span>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>

      <div className="formDataDiv">
        <FormData></FormData>
        <div className="image_3">
          <img src={Image6} alt="" />
          <div className="borderSpan">
            <span className="font-family-text" style={{'font-size': '20px' }} >Danos tu idea y nosotros la
construimos con los mejores
materiales, la disposición y
creatividad posible.</span>
          </div>

        </div>

      </div>
    </div>
  );
};

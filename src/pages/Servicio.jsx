import "../css/servicio.css";
import { useForm } from "../hook/useForm";


import fondo from '../assets/images/Servicios/fondo.jpg';
import Image1 from '../assets/images/Servicios/1.jpg';
import Image2 from '../assets/images/Servicios/2.jpg';
import Image3 from '../assets/images/Servicios/3.jpg';
import Image4 from '../assets/images/Servicios/4.jpg';
import Image5 from '../assets/images/Servicios/5.jpg';
import Image6 from '../assets/images/Servicios/6.jpg';
import Image7 from '../assets/images/Servicios/7.jpg';
import Image8 from '../assets/images/Servicios/8.jpg';
import Image9 from '../assets/images/Servicios/9.jpg';
import Image10 from '../assets/images/Servicios/10.jpg';






const Servicio = () => {

  const { name,email,motivo, onInputChange,onSubmitForm} = useForm({
    name:'',
    email:'',
    motivo:''
  })

  return (
    <div className="page " >
      <div className="servicesDiv mb-4" >
        <img
          className="imageService"
          src={fondo}
          alt=""
        />
        <h1 className="text-light font-family-all" style={{fontSize:'50px', padding:'50px'}}    >Servicios</h1>
        <div className="center">
          <div className="paddingImage p-4">
            <p className="p-2 font-family-text bg-section1" style={{'fontSize':'35px', textAlign:'justify'}} >
            En nuestro catálogo de servicios para ocasiones especiales, nos especializamos en la creación de productos hechos a mano con atención y dedicación personalizada. No somos una empresa que produce productos al azar; nos enfocamos en brindar resultados únicos y de calidad que reflejen el tiempo y esfuerzo invertidos en cada pieza. Confía en nosotros para crear momentos especiales con productos hechos con amor y cuidado.
            </p>
          </div>
          <div className="contactenosServices">
            <form>
              <h1 className="font-family-text color-text">Contactenos</h1>
              <div className="mb-3">
                <input
                  type="text"
                  name="name"                
                  value={name}
                  onChange={ onInputChange }
                  style={{fontSize:20}}
                  className="form-control font-family-text"
                  id="exampleInputEmail1"
                  placeholder="Nombre"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={ onInputChange }
                  className="form-control font-family-text"
                  style={{fontSize:20}}
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Correo"
                />
              </div>
              <div className="mb-3 ">
                <textarea
                  name="motivo"
                  value={motivo}
                  onChange={ onInputChange }
                  className="form-control font-family-text"
                  style={{fontSize:20}}
                  id=""
                  cols="20"
                  rows="7"
                  placeholder="Cuentanos tu idea..."
                ></textarea>
              </div>
              <div className="d-grid gap-2 col-6 mx-auto">
                <button
                  type="submit"
                  onClick={onSubmitForm}
                  className="btn btn-warning btn-lg text-white"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="paddind-second-image">
        <h1 className="font-family-all">Diseños</h1>
        <div className="col1 ">
       
          <img
            className="imageService-second"
            src={Image1}
            alt=""
          />
          
          <img className="hide-colSer" src={Image2} alt="" />
          <img className="hide-colSer" src={Image3} alt="" />
          <img className="hide-colSer" src={Image4}alt="" />
          <img className="hide-colSer" src={Image5}alt="" />
          
        </div>
        <div className="col2 hide-colSer">
          <img src={Image6} alt="" />
          <img src={Image7} alt="" />
          <img src={Image8} alt="" />
          <img src={Image9} alt="" />
          <img src={Image10} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Servicio;

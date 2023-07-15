import "../css/planes.css";
import { useForm } from "../hook/useForm";

import image1 from '../assets/images/Planes/1.jpg'
import image2 from '../assets/images/Planes/2.jpg'
import image3 from '../assets/images/Planes/3.jpg'
import image4 from '../assets/images/Planes/4.jpeg'
import image5 from '../assets/images/Planes/5.jpg'
import image6 from '../assets/images/Planes/6.jpg'
import image7 from '../assets/images/Planes/7.jpg'



export const Planes = () => {

  const { name,email,motivo,formState, onInputChange,onSubmitForm} = useForm({
    name:'',
    email:'',
    motivo:''
  })

  return (
    <div className="page">
      <div className="title">
        <h1 className="font-family-all style-title" >Planes</h1>
        <p>
          En esta sección encontrará los planes que les ofrecemos para que
          conozca un poco acerca de nosotros y las ideas que se tienen hasta el
          momento, igualmente estamos a la espera de mejores ideas para crecer
          como idea innovadora.
        </p>
      </div>

      <div className="box-middle">
        <div className="bg-gray"></div>
        <div className="bg-planes">
          <div className="image-card">
            <img src={image1} alt="" />
            <h1 className="font-family-all" >Bombonera</h1>
          </div>
          <div className="circle-setup">
            <div className="circle">
              <img src={image4} alt="" />
            </div>
            <h1 className="font-family-all">Lugar sorpresa</h1>
          </div>
        </div>

        <div className="bg-planes hidden-resp">
          <div className="image-card">
            <img src={image2} alt="" />
            <h1 className="font-family-all">Cena Romantica</h1>
          </div>
          <div className="circle-setup">
            <div className="circle">
              <img src={image5}alt="" />
            </div>
            <h1 className="font-family-all">Desparche</h1>
          </div>
        </div>
        <div className="bg-planes hidden-resp">
          <div className="image-card">
            <img src={image3} alt="" />
            <h1 className="font-family-all">Halloween</h1>
          </div>
          <div className="circle-setup">
            <div className="circle">
              <img src={image6} alt="" />
            </div>
            <h1 className="font-family-all">Conquista</h1>
          </div>
        </div>
      </div>

      <div className="title-inte">
        <h1 className="font-family-all style-title  ">¿Te interesa?</h1>
      </div>

      <div className="form-bg">
          <div className="hidden-resp">
            <img src={image7} alt="" />
          </div>

        <form>
          
          <h1 className="text-white font-family-text">Contactenos</h1>
          <div className="mb-3">
            <input
              type="text"
              name="name"
              value={name}
              onChange={ onInputChange }
              className="form-control font-family-text"
              style={{'fontSize':'20px'}}
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
              style={{'fontSize':'20px'}}
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
              style={{'fontSize':'30px'}}
              id=""
              cols="20"
              rows="5"
              placeholder="Cuentanos tu idea..."
            ></textarea>
          </div>
          <div className="d-grid gap-2 col-6 mx-auto">
            <button type="submit" onClick={onSubmitForm}  className="btn btn-warning btn-lg text-white">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "react-datepicker/dist/react-datepicker.css";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import "../css/tienda.css";
import { useForm } from "../hook/useForm";

import image1 from '../assets/images/Alejandra.jpg'
import image2 from '../assets/images/juliana.jpg'




const MySwal = withReactContent(Swal)

export const Tienda = () => {

  
  const { name,email,motivo,formState, onInputChange,onSubmitForm} = useForm({
    name:'',
    email:'',
    motivo:''
  })
  const [ meeting, setMeeting] = useState({
    date: '',
    hours: '',
    motive:''
  });

  

  const {date, hours,motive} = meeting;


  const onInput = ({$d}) => {
    setMeeting({
      ...meeting,
      date: $d,
    })
  }

  const onTimeChange = ( {$d} ) => {
    
    setMeeting({
      ...meeting,
      hours: $d,
    })
  }



  const onMotiveChange = ({target}) => {
   
    setMeeting({
      ...meeting,
      motive: target.value,
    })
   }


  const onAgent = (e) => {
    e.preventDefault()

    console.log( meeting )
    if (date != '' && hours != '' && motive != ''){
      MySwal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Tu cita fue agendada con éxito',
        showConfirmButton: false,
        timer: 2500
      })
      setMeeting({
        date: '',
        hours: '',
        motive:''
      })
    }else{
      MySwal.fire({
        position: 'top-end',
        icon: 'warning',
        title: 'Existen campos vacios',
        showConfirmButton: false,
        timer: 1500
      })
    }
    
  }

  



  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <section className="p-2">
        <h1 className="text-center font-family-all ">Tienda</h1>
        <span className="paragraph text-center font-family-text ">
        <p className="justify-text">
          ¡Celebra momentos especiales con nuestra experiencia en manualidades personalizadas! Desde la comodidad de tu hogar, nos encargamos de crear detalles únicos para diferentes ocasiones. Ya sea un cumpleaños, una boda, una cena romántica, una noche de diversión con amigos, halloween o un babyshower, estamos aquí para hacerlo inolvidable.
          Cuéntanos tu idea y nosotros nos encargaremos de convertirla en realidad. No te preocupes por los detalles, déjalos en nuestras manos expertas. Estamos listos para hacer de cada ocasión un momento especial y único. Contáctanos ahora y descubre cómo podemos hacer realidad tus ideas creativas desde casa.
        </p>
        </span>
      </section>

      <section className="p-4 calendar-section">
        <h1 className="text-center font-family-all">Agenda tu cita</h1>
        <form action="" className="calendar">
          <DatePicker
            label="Fecha"
            selected={date}
            value={date}

            onChange={onInput}
          />

          <DemoContainer components={["TimePicker"]}
          
          >
            <TimePicker 
              value={hours}
              onChange={onTimeChange}
              label="Hora" />
          </DemoContainer>
         
          <textarea 
            name= "motive"
            value={motive}
            onChange={onMotiveChange}
            placeholder='Motivo'
            className="form-control font-family-text"
            style={{'fontSize':'25px'}}
            id="" 
            cols="30" 
            rows="5" ></textarea>
          <button className="btn btn-primary mt-4" onClick={ onAgent }> Enviar </button>
        </form>
      </section>

      <section className="bg-black">
        <section className="circle-profile p-4">
          <div className="section2-div-image">
            <img
              className="border-radius-imgs"
              src={image1}
              alt=""
            />
            <h4 className="text-light text-center">
              Maria Alejandra 
            </h4>
          </div>
          <div className="section2-div-image">
            <img
              className="border-radius-imgs"
              src={image2}
              alt=""
            />
            <h4 className="text-light text-center mx-2">
               Maria Juliana 
            </h4>
          </div>
        </section>

        <section className="form-mapa">
          <section className="formulario">
            <form className="d-flex justify-content-center">
              <h1 className="text-white d-flex justify-content-center font-family-text">Contactenos</h1>
              <div className="mb-3">
                <label className="form-label text-white font-family-text" style={{fontSize:'20px'}}>Nombre</label>
                <input
                  name="name"
                  value={name}
                  onChange={ onInputChange }
                  type="email"
                  className="form-control font-family-text"
                  style={{fontSize:'20px'}}
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label className="form-label text-white font-family-text" style={{fontSize:'20px'}}>Correo</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={ onInputChange }
                  className="form-control font-family-text"
                  style={{fontSize:'20px'}}
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>

              <div className="mb-3 ">
                <textarea
                  name="motivo"
                  value={motivo}
                  onChange={ onInputChange }
                  className="form-control font-family-text"
                  placeholder="Cuentanos tu idea"
                  style={{fontSize:'20px'}}
                  id=""
                  cols="30"
                  rows="5"
                ></textarea>
              </div>
              <div className="d-grid gap-2 col-6 mx-auto">
                <button type="submit" className="btn btn-warning btn-lg" onClick={onSubmitForm}>
                  Enviar
                </button>
              </div>
            </form>
          </section>

          <section className="mapa">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d3733.3836847970842!2d-103.39386822512469!3d20.653963595389975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e0!4m0!4m3!3m2!1d20.6544405!2d-103.391583!5e0!3m2!1ses!2smx!4v1460436070427"
              width="100%"
              height="552"
              frameBorder="0"
              style={{ border: "0" }}
              allowFullScreen
              title="Mapa"
            ></iframe>
          </section>
        </section>
      </section>
    </LocalizationProvider>
  );
};


import { useForm } from "../hook/useForm";


export const FormData = () => {

  const { name,email,motivo,formState, onInputChange,onSubmitForm} = useForm({
    name:'',
    email:'',
    motivo:''
  })


  return (
    <div className="formDataContainer" style={{padding:'10px'}}>
      

      <div className="contact-m">
        
        <form>
        <h1 className="font-family-text">Contactenos</h1>
          <div className="mb-3">
            <label  className="form-label font-family-text" style={{fontSize:'25px'}}>
              Nombre
            </label>
            <input
              type="text"
              name="name"
              value={name}
              placeholder="Nombre"
              onChange={ onInputChange }
              className="form-control font-family-text"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label  className="form-label font-family-text" style={{fontSize:'25px'}}>
              Correo
            </label>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Correo"
              onChange={ onInputChange }
              className="form-control font-family-text"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          
          <div className="mb-3 ">
            <textarea 
            style={{'font-size':'20px'}}
            placeholder="Cuentanos tu idea"
            name="motivo"
            value={motivo}
            onChange={ onInputChange }
            className="form-control font-family-text" id="" cols="30" rows="5"></textarea>
          </div>
          <div className="d-grid gap-2 col-6 mx-auto">
            <button type="submit" onClick={onSubmitForm} className="btn btn-primary btn-lg">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

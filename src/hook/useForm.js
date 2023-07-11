import { useState } from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)


export const useForm = ( initialValue = {}) => {
  const [formState, setFormState] = useState( initialValue);
  

  const onInputChange = ({ target }) =>{
    const { name, value } = target
    setFormState({
      ...formState,
      [ name ]:value
    })
  }

  const onSubmitForm = (e) => {
    e.preventDefault()

  
    
    if ( formState.name  != '' && formState.email != '' && formState.motivo != ''){
      MySwal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Gracias por contactarnos, te escribiremos lo mas pronto posible',
        showConfirmButton: false,
        timer: 2500
      })
      setFormState({name:'',email:'',motivo:''})
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

  return {
    ...formState,
    formState,
    onInputChange,
    onSubmitForm

  }
}

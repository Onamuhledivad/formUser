import userFormulario from '../hooks/userFomulario';
import Button from './Button';
import Input from './input'

const UserForm = ({submit}) => {

    const [formulario, handleChange, reset] = userFormulario(
        { 
          name: '', 
          lastname: '',
          email: '',
        })

    const handleSubmit = (e: { preventDefault: () => void; }) => {
            e.preventDefault()
            submit(formulario)
            reset()
        }
        
    return(
        <form onSubmit={ handleSubmit }>
        <Input  
              name="name"
              value={formulario.name}
              onChange={handleChange} 
              label='Nombre'
              placeholder='Nombre'
          />
          <Input  
              name="lastname"
              value={formulario.lastname}
              onChange={handleChange} 
              label='Apellido'
              placeholder='Apellidos'
          />
           <Input  
              name="email"
              value={formulario.email}
              onChange={handleChange} 
              label='Correo'
              placeholder='Email'
          />
          <Button>Enviar</Button>
          </form>
    )
}

export default UserForm
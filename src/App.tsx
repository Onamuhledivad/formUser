

import Card from './components/Card'
import userFormulario from './hooks/userFomulario'
import Container from './components/Container';

import { useState } from 'react';
import UserForm from './components/UserForm';



function App() {

  const [ usuarios, setUsuarios] = useState<any[]>([])

 

  const submit = (usuario: any) => {
    setUsuarios([
      ...usuarios,
      usuario
    ])
  }


  return (
    <Container>
        <Card>
          <UserForm  submit={submit}/>
      </Card>
      <Card>
        <ul>
        { 
        usuarios.map( x => 
            <li key={x.email}>{`${x.name} ${x.lastname} : ${x.email}`}</li>
          )
        }
        </ul>
      </Card>
    </Container>
  )
}

export default App

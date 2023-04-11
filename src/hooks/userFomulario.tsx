import { useState } from "react"

const userFormulario = (dataForm: any) => {

    const [formulario, setFormulario] = useState(dataForm)

    const handleChange = (e:any) => {
      setFormulario({
        ...formulario,
        [e.target.name]: e.target.value
      })
    }

    const reset = () => {
        setFormulario(dataForm)
    }

    return [formulario, handleChange, reset]
}

export default userFormulario
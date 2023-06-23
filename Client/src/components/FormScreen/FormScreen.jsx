import React, { useEffect, useState } from 'react';
import style from './FormScreen.module.css';
import { useNavigate } from 'react-router-dom';
import axios from "axios"


/* VALIDACIONES DE LO QUE INGRESA ------------------------------------------------------------------- */

const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
export function validate(input) {
    let errors = {}
    //validaciones de usuario 
    if (input.email.length > 25) { errors.email = "El usuario no puede tener mas de 25 caracteres" }
    if (!regexEmail.test(input.email)) { errors.email = "Debe ser un correo electrónico" }
    if (!input.email) { errors.email = "Se requiere un usuario" }
    // validaciones de pasword 
    if (input.password.length < 6 || input.password.length > 10) { errors.password = `contraseña tiene que tener una longitud entre 6 y 10 caracters` }
    if (!/\d/.test(input.password)) { errors.password = "contraseña tiene que tener al menos un numero" }
    return errors

}



const FormScreen = () => {

    /* ESTADOS LOCALES QUE CONTROLAN LO QUE SE INGRESA Y ERRORES ------------------------- */
    let [input, setInput] = useState({
        email: "",
        password: "",
    })
    let [error, setError] = useState({
        email: "",
        password: "",
    })

    /* FUNCION QUE ENVIA EN TIEMPO REAL LOS VALORES A LOS ESTADOS  ------------------------- */

    let handleChange = (event) => {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })
        setError(validate({
            ...input,
            [event.target.name]: event.target.value
        }))    
}



/* FUNCION  verifica email y pasword ----------------------------------- */
const navigate = useNavigate()

let [access, setAccess] = useState(false)

async function login(event) {
    event.preventDefault()
    const { email, password } = input;
    const URL = 'http://localhost:3001/rickandmorty/login/';
    let {data} = await axios(URL + `?email=${email}&password=${password}`)

 
    setAccess(data.access);
    access && navigate("/HomeScreen");
};
useEffect(() => {
    if (access) {
        navigate("/HomeScreen");
    } else {
        navigate("/");
    }
}, [access, navigate])

/* RETORNO DEL ELEMENTO JSX ------------------------------------------------------ */
return (
    <div>
        <div className={style.container}>
            <form className="form" onSubmit={login}>
                <h2 className={style.formheading}>REGISTRO</h2>
                <div className={style.formgroup}>
                    <label >email:</label>
                    <input type="text" name="email" value={input.email} onChange={handleChange} placeholder='Escribe tu usuario...' />
                    {error.email ? <p className={style.danger}>{error.email}</p> : ""}
                </div>
                <div className={style.formgroup}>
                    <label >Password: </label>
                    <input type="password" name="password" value={input.password} onChange={handleChange} placeholder='Escribe tu contraseña...' />
                    {error.password ? <p className={style.danger}>{error.password}</p> : ""}
                </div>
                <button disabled={Object.keys(error).length !== 0} type="submit" className={style.button} >Log in</button>
            </form>
        </div>
    </div>

);
}

export default FormScreen;

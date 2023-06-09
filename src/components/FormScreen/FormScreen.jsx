import React, { useEffect, useState } from 'react';
import style from './FormScreen.module.css';
import { useNavigate } from 'react-router-dom';


/* VALIDACIONES DE LO QUE INGRESA ------------------------------------------------------------------- */

const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
export function validate(input) {
    let errors = {}
    //validaciones de usuario 
    if (input.username.length > 25) { errors.username = "El usuario no puede tener mas de 25 caracteres" }
    if (!regexEmail.test(input.username)) { errors.username = "Debe ser un correo electrónico" }
    if (!input.username) { errors.username = "Se requiere un usuario" }
    // validaciones de pasword 
    if (input.password.length < 6 || input.password.length > 10) { errors.password = `contraseña tiene que tener una longitud entre 6 y 10 caracters` }
    if (!/\d/.test(input.password)) { errors.password = "contraseña tiene que tener al menos un numero" }
    return errors

}



const FormScreen = () => {

    /* ESTADOS LOCALES QUE CONTROLAN LO QUE SE INGRESA Y ERRORES ------------------------- */
    let [input, setInput] = useState({
        username: "",
        password: "",
    })
    let [error, setError] = useState({
        username: "",
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

    /* FUNCION QUE SE DISPARA AL CLICKEAR EL BOTON  verifica email y pasword ----------------------------------- */
    const navigate = useNavigate()
    const email = "german@hotmail.com"
    const contraseña = "1234567"

    let [acces, setAcces] = useState(false)

    const login = () => {
        if (input.username === email && input.password === contraseña) {
            setAcces= true;
            navigate("/HomeScreen")
        } else { alert("Usuario o contraseña incorrecta") }
    }

    useEffect(() => {
        !acces && navigate("/")
    }, [acces])

    /* RETORNO DEL ELEMENTO JSX ------------------------------------------------------ */
    return (
        <div>
            <div className={style.container}>
                <form className="form">
                    <h2 className={style.formheading}>REGISTRO</h2>
                    <div className={style.formgroup}>
                        <label >Username:</label>
                        <input type="text" name="username" value={input.username} onChange={handleChange} placeholder='Escribe tu usuario...' />
                        {error.username ? <p className={style.danger}>{error.username}</p> : ""}
                    </div>
                    <div className={style.formgroup}>
                        <label >Password: </label>
                        <input type="password" name="password" value={input.password} onChange={handleChange} placeholder='Escribe tu contraseña...' />
                        {error.password ? <p className={style.danger}>{error.password}</p> : ""}
                    </div>
                    <button disabled={Object.keys(error).length !== 0} type="submit" onClick={login} className={style.button} >Log in</button>
                </form>
            </div>
        </div>

    );
}

export default FormScreen;

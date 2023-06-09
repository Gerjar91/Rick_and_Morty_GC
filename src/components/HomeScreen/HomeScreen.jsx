import React from 'react';
import style from "./HomeScreen.module.css";
import { useNavigate } from 'react-router-dom';





const HomeScreen = () => {
  const navigate = useNavigate()
  return (
    <div className={style.container}>
      <h2>Welcome to </h2>
      <h1 style={{ marginTop: "-8px" }}>My Portfolio</h1>
      <div>
        <button className={style.button} onClick={() => { navigate("/App") }}>
          Projects
        </button>
        <button className={style.button} onClick={() => { navigate("/AboutMeScreen") }}>
          About Me
        </button>
        <button className={style.button} onClick={{}}>
          Contact
        </button>
      </div>
      <div className={style.presentation}>
        <h2>About Me</h2>
        <p>
          I am a passionate architect with a deep interest in technology and web programming. At the age of 32, I made a career transition and dedicated myself to web development, specializing in full-stack development. I am a graduate of Henry, a renowned programming academy, where I acquired the necessary skills and knowledge to create modern and efficient web applications.          </p>
      </div>
      <button className={style.button} onClick={() => { navigate("/") }}>
          Log Out
        </button>
    </div>
  );
}



export default HomeScreen;




/* import style from "./Boton.module.css";
import { useNavigate } from "react-router-dom";



const HomeScreen = () => {
    const navigate = useNavigate()

    return (
        <div style={{ alignItems: "center", justifyContent: "center", fontSize:"10px"}}>
            <h1>HOME</h1>
            <h2>Preyects</h2>
            <button className={style.botonStyle} onClick={() => { navigate("/App") }}>
                Rick and Morty
            </button>
        </div>
    )
}

export default HomeScreen;  */
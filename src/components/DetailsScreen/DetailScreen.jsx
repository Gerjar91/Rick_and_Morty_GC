import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import style from "./DetailScreen.module.css"

const DetailScreen = () => {
    const navigate = useNavigate()
    let { id } = useParams()
    let [character, setCharacter] = useState({})


    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
            if (data.name) {
                setCharacter(data);
            } else {
                window.alert('No hay personajes con ese ID');
            }
        });
        return setCharacter({});
    }, [id]);

    /*   **name**
    -  **status**
    -  **species**
    -  **gender**
    -  **origin** (ten en cuenta que el nombre se guarda dentro de otra propiedad "_name_")
    -  **image** */


    return (
        <div style={{ backgroundColor: "black", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "10%" }}>
            <div className={style.container}>
              <div className={style.containerCard}>
                <div className={style.containerText}>
                  <h2>{character.name}</h2>
                  <p>Estado: {character.status}</p>
                  <p>Especie: {character.species}</p>
                  <p>Género: {character.gender}</p>
                  <div className={style.img}></div>
                </div>
                <img src={character.image} alt="" />
              </div>
            </div>
            <button className={style.botonStyle} onClick={() => { navigate("/App") }}>Cerrar personaje</button>
          </div>
        </div>
      );
      



    
}
export default DetailScreen; 
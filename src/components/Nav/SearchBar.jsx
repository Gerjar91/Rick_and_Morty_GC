import { useState } from "react";
import style from "./Boton.module.css"
import { useNavigate } from "react-router-dom";



function SearchBar({ onSearch, onCloseAll }) {

   const navigate = useNavigate()



   //seleccionamos el id del del elemento para eliminarlo 

   let [id, setId] = useState("");
   const handleChange = (event) => {
      setId(event.target.value);
   }
   // funcion para ejecutar onSearch y dejar el input vacio 
   const handAddleChange = () => {
      onSearch(id)
      setId("")
   }

   //generamos un personaje aleatorio 
   let idRandow = () => {
      let idR = Math.floor(Math.random() * 821)
      setId(idR)
      return idR
   }

   return (
      <div style={{ display: "flex", flexDirection: "row" }}>
         <input type='search' value={id} onChange={handleChange} className={style.input} placeholder=" Add Nº" />
         <button className={style.botonStyle} onClick={handAddleChange}>Add characters ID</button>
         <button className={style.botonStyle} onClick={() => onSearch(idRandow())}> ♻ Add randow</button>
         <button className={style.botonCloseAll} onClick={onCloseAll}> X </button>

      </div>
   );
}
export default SearchBar
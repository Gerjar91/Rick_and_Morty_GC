
import Cards from '../Cards/Cards.jsx';
import { useState } from "react"
import axios from 'axios';
import Nav from '../Nav/Nav.jsx';
import style from "./App.module.css"



function App() {

   let [characters, setCharacters] = useState([]);

   // llamada a un servidor 
   async function onSearch(id) {

      if (isNaN(id) || Number(id) > 820 || id === 0 || id === "") {
         alert("Ingrese un ID válido, ingrese un numero del 1 al 826");
         return;
      }

      const response = await axios(`http://localhost:3001/rickandmorty/character/${id}`)

      let found = false
      characters.forEach(element => { // recorremos el character para verificar que no exista el elemento ya
         if (element.id === response.data.id) {
            found = true
            return alert("La tarjeta ya se encuentra disponible ")
         }
      });

      if (response.data.name && !found) {
         setCharacters((characters) => [...characters, response.data]); // si existe el nombre se modifica el estado de characters 
      } else if (!response.data.name) {
         window.alert('¡No hay personajes con este ID!');
      }
      ;
   }

   // funcion para cerrar la carta 

   const onClose = (id) => {
      const characterfilter = characters.filter(elem => elem.id !== id)
      setCharacters(characterfilter)
   }
   const onCloseAll = () => {
      setCharacters([])
   }

   // retorno a la pantalla 
   return (
      <div className={style.container} >
         <div style={{ textAlign: "center" }}>
            <Nav onSearch={onSearch} onCloseAll={onCloseAll} />
            <Cards characters={characters} onClose={onClose} />
         </div>
      </div>
   );
}



export default App



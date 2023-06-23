import style from "./Card.module.css"
import { useNavigate } from "react-router-dom";
import { addFav, removeFav } from "../../Redux/actions.js"
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import React from "react";






//COMPONENTE FUNCIONAL ------------------------------------
function Card({ id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites }) {

   // linea para navegar en la pagina 
   const navigate = useNavigate()


   // Estado que controla las card con favorite 
   let [isFav, setIsFav] = useState(false)
   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false)
         removeFav(id)
      } else {
         setIsFav(true)
         addFav({ id, name, status, species, gender, origin,image })
      }
   }
console.log(isFav);

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites,id]);


   return (
      <div >
         {<div className={style.container}>
            <h2 className={style.title}> {name}</h2>
            <button className={style.botonStyle} onClick={() => onClose(id)}>✖ Close Card</button>
            <p> {status}</p>
            <hr></hr>
            <p> {species} {" - ID "+id}</p>
            <hr></hr>
            <p> {gender} </p>
            <hr></hr>
            <p> {origin}</p>
            <div style={{ width: "100%", height: "auto" }}>
               <img className={style.img} src={image} alt={{}} />
               <button className={ isFav? style.butonLike : style.butonLikeUns} onClick={handleFavorite}> {isFav ? "❤️" : "🤍"} </button>
            </div>
            <button className={style.botonStyle} onClick={() => { navigate(`/DetailScreen/${id}`) }}
            >Details</button>
         </div>}
      </div>
   );
}

//Esta funcion despacha acciones  ----------------------------
function mapDispatchToProps(dispatch) {
   return {
      //importamos las actions addfav y removeFav las ejecutamos para obtener su retorno un objeto  y pasamos los parametros 
      addFav: (character) => dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id))
   };
};


//traigo el estado completo -------------------------------
function mapStateToProps(state) {
   return {
      myFavorites: state.myFavorites
   }
}


// conectamos a redux con el componente  ----------------------------------------
export default connect(
   mapStateToProps, // traer nuestro estado global 
   mapDispatchToProps // despacha las actions al reducer 
)(Card)



import axios from "axios"


export const addFav =  (character) => {

const endpoint = 'http://localhost:3001/rickandmorty/fav';
return async (dispatch) => {
   const data = await axios.post(endpoint, character)
   return dispatch({
      type: 'ADD_FAV',
      payload: data,
   });
   ;
};
   
};

export const removeFav = (id) => {
   const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
   return (dispatch) => {
      axios.delete(endpoint).then(({ data }) => {
         return dispatch({
            type: 'REMOVE_FAV',
            payload: data,
         });
      });
   };
};

export const filterCards = (gender) => {
   return {
      type: "FILTER",
      payload: gender
   }
}
export const orderCards = (A) => {
   return {
      type: "ORDER",
      payload: A
   }
}



/* 


### **👩‍💻 EJERCICIO 1 | Actions**

Dirígete al archivo **`actions`** y crea las siguientes funciones:

1. **`filterCards`**: esta función recibe por parámetro un **gender**. Debe retornar una action con el **type** igual a "**FILTER**" y el payload será igual al parámetro recibido.

2. **`orderCards`**: esta función recibe por parámetro un **orden** (será: **A**: ascendente o **D**: descendente). Debe retornar una action con el **type** igual a "**ORDER**" y el payload será igual al parámetro recibido.

<br />

---

 */
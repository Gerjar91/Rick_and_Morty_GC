
const initialstate = {
    myFavorites: [],
    allCharacters: []

}

const reducer = (state = initialstate, { type, payload }) => {
    switch (type) {
        case "ADD_FAV":
            return {
                ...state,
                allCharacters: [...state.allCharacters, payload]
            }
        case "REMOVE_FAV":
            return {
                ...state,
                allCharacters: state.allCharacters.filter(item => item.id !== payload)
            }
        case "FILTER":
            if (payload === "") {
                return { ...state, myFavorites: [...state.allCharacters] }
            } else {
                return {
                    ...state,
                    myFavorites: state.allCharacters.filter(item => item.gender === payload)
                }
            }
        case "ORDER":
            if(payload === "A" ){return {
                ...state,
                myFavorites: [...state.myFavorites].sort((a, b) => a.id - b.id)
            }}
            
        default:
            return {
                ...state
            }

    }

}


export default reducer

/* 
### **👩‍💻 EJERCICIO 2 | Reducer**

Dirígete al archivo **`reducer`** y sigue estos pasos:

1. En tu estado inicial crea una nueva propiedad llamada **allCharacters** que debe ser igual a un arreglo vacío.

2. Modificaremos el caso **ADD_FAV** de la siguiente manera:

   -  Dentro de la copia de tu estado global, reemplaza la propiedad **myFavorites** por **allCharacters**.
   -  Cuando retornes tu estado, agrega la propiedad **`allCharacters`** que también sea igual a la copia en la que agregaste el nuevo personaje.

   </br >

3. Crea un nuevo caso con el nombre "**FILTER**". Aquí debes crear una copia de tu estado global **allCharacters**. A partir de esta copia filtra todos aquellos personajes que tengan el mismo género que recibes por payload. Finalmente retorna una copia de tu estado, pero que la propiedad **myFavorites** sea igual a este filtrado.

4. Crea un nuevo caso con el nombre "**ORDER**". Aquí vamos a ordenar nuestros personajes favoritos de forma ascendente y descendente. Para esto:

   -  Crea una copia de tu estado global **allCharacters**.
   -  Utiliza el método **`sort`** para ordenar tus personajes de acuerdo a su **id**.
   -  Si el payload es igual a "**A**", los personajes deben ordenarse de menor a mayor.
   -  Si el payload es igual a "**D**, los personajes deben ordenarse de mayor a menor.
   -  Finalmente retorna tu estado global y en la propiedad **myFavorites** guarda el ordenamiento que hiciste.

> [**NOTA**]: investiga en la web cómo funciona el método **`sort`**.

<br />

--- */
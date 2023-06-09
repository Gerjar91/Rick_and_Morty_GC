

export const addFav = (character) => {
    return {
        type: "ADD_FAV",
        payload: character,
    }
}

export const removeFav = (id) => {
    return {
        type: "REMOVE_FAV",
        payload: id,
    }

}

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
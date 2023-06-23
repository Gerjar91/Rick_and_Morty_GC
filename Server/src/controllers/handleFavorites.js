
let myFavorites = []


//agregar a favoritos 
const postFav = (req, res) => {
    const character = req.body
        myFavorites.push(character)
        return res.json(myFavorites)
}

// eliminar de favoritos 
const deleteFav = (req, res) => {
    let id = req.params.id
    myFavorites.filter((fav) => fav.id !== id)
    return res.json(myFavorites)
}

module.exports = {
    postFav,
    deleteFav
}
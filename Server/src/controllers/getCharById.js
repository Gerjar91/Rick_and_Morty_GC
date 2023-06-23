
const axios = require("axios")

const URL = "https://rickandmortyapi.com/api/character"

const getCharById = async (req, res) => {

    try {
        let id = req.params.id
        // Peticion a la API 
        console.log(id);
        let response = await axios(`${URL}/${id}`)
        let character = {
            name: response.data.name,
            id: id,
            gender: response.data.gender,
            species: response.data.species,
            origin: response.data.origin.name,
            image: response.data.image,
            status: response.data.status
        }
        return res.status(200).json(character)
    } catch (error) {
        (error => res.status(500).send(error.message))
    }
}







module.exports = getCharById;






// llamado a un api con expresss -----------
/* const axios = require("axios")
const getCharById = (res, id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => response.data)
        .then((data) => {
            const character = {
                name: data.name,
                id: id,
                gender: data.gender,
                species: data.species,
                origin: data.origin.name,
                image: data.image,
                status: data.status
            }
            return res
                .writeHead(200, { "Content-type": "application/json" })
                .end(JSON.stringify(character))
        })
        .catch(error => {
            return res
            .writeHead(500, { "Content-type": "text-plain" })
            .end(error.message)
        })
}


module.exports = { 
    getCharById 
};

 */
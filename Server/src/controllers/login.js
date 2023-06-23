
const usuarios = require("../utils/users")



const login = (req, res) => {
    const { email } = req.query
    const { password } = req.query
    console.log(req.url);
    const check = usuarios.find((user) => user.email == email && user.password == password)

    if (check) {
        return res.status(200).send({ access: true })
    } else {
        return res.status(200).send({ access: false })
    }

}


module.exports = login
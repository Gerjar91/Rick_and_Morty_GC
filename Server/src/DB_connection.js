require('dotenv').config();
const { Sequelize } = require('sequelize');
const FavoriteModel = require('./models/Favorite');
const UserModel = require('./models/User');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;;

const sequelize = new Sequelize(
   // URL para conectar a la base de datos 
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
   { logging: false, native: false }
);


// Debajo de este comentario puedes ejecutar la función de los modelos.
FavoriteModel(sequelize);
UserModel(sequelize);




// Ejercicio 06
// desestructuramos los modelos que tenemos creados para relacionarlos 
const { User, Favorite } = sequelize.models;

User.belongsToMany(Favorite, { through: "User_Favorite" })
Favorite.belongsToMany(User, { through: "User_Favorite" })

module.exports = {
   conn: sequelize,
   Favorite,
   User
};

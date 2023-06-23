import Card from '../Card/Card';
import style from "../Cards/Cards.module.css"
// el componente cards se encarga de retornar diferentes Card pero con diferentes informaciones 
// 
export default function Cards({ characters, onClose }) { // recibo un array con objetos con diferentes propiedades 
   return <div className={style.container}>
      {characters.map(character =>
         <div className={style.card} key={character.id}>
            <Card
               id={character.id}
               key={character.id}
               name={character.name}
               species={character.species}
               gender={character.gender}
               image={character.image}
               onClose={onClose}
            />
         </div>

      )}
   </div>;
}

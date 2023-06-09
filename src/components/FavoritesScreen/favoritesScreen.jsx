import Card from "../Card/Card";
import { connect } from "react-redux";
import style from "./favoriteScreen.module.css";
import { filterCards, orderCards } from "../../Redux/actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";




const FavoriteScreen = ({ myFavorites }) => {
    /*    let [aux, letAux] = useState(false) */

    const navigate = useNavigate();

    const dispatch = useDispatch()

    const handleFilter = (event) => {
        let gender = event.target.value
        dispatch(filterCards(gender))
    }
    const handleOrder = (event) => {
        let id = event.target.value
        dispatch(orderCards(id))
    }

    useEffect(() => {
        dispatch(filterCards("")); // Filtrar con un valor vacío para mostrar todas las cartas
    }, [dispatch]);


    return (
        <div>

            <div className={style.container}>
                <div className={style.container}>
                    <button className={style.botonStyleHomeFav} onClick={() => { navigate("/App") }}>
                        Ir al Album
                    </button>
                    <button className={style.botonStyleHomeFav} onClick={handleOrder} value={"A"}>
                        Ordenar ascendente                    </button>
                    <select className={style.botonStyleHomeFav} onChange={handleFilter} placeholder="gender">
                        {["","Male","Female","Genderless","unknown"].map((gender)=>(
                        <option value={gender}>{gender?gender:"All Genders"}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className={style.cardContainer}>

                {myFavorites?.map((fav) => {
                    return (
                        <div className={style.cardWrapper} key={fav.id}>
                            <Card
                                id={fav.id}
                                name={fav.name}
                                species={fav.species}
                                gender={fav.gender}
                                image={fav.image}
                            />
                        </div>
                    );
                })}
            </div>
        </div>




    );
};

const mapStateProp = (state) => {
    return {
        myFavorites: state.myFavorites,
    };
};

export default connect(
    mapStateProp, 
    null)(FavoriteScreen);


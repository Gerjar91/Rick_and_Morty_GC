import SearchBar from "./SearchBar";
import style from "./Boton.module.css";
import { useNavigate } from "react-router-dom";

function Nav( {onSearch, onCloseAll}) {
    const navigate = useNavigate()



    return (
        <div className={style.container}>
          <button className={style.botonStyleHomeFav} onClick={() => { navigate("/HomeScreen") }}>
                Home
            </button>
          <button className={style.botonStyleHomeFav} onClick={()=>{navigate('/FavoritesScreen')}}>
          ✪ Favorites
            </button>
            <h2 className={style.title}>This is an album of Rick and Morty created with React.</h2>
            <SearchBar onSearch={onSearch}  onCloseAll={onCloseAll}/>

        </div>

    )

}

export default Nav;
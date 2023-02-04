import React from "react"
import { getGenres } from "../request/favmoviesApi"
import "../css/genresList.css"

const GenresList = ({ setGenreId, genreId }) => {
    const [genres, setGenres] = React.useState([])
    React.useEffect(() => {
        getGenres().then((data) => {
            setGenres(data)
        })
    }, [])
    return (
        <div id="genres">
            <h1>Generos</h1>
            <ul className="list-group list-group-horizontal d-grid">
                {genres.map((genre) => (
                    <li className={`list-group-item list-group-item-info ${genreId === genre.id ? "active" : ""}`} key={genre.id}
                        onClick={()=>setGenreId(genre.id)}>
                        {genre.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default GenresList
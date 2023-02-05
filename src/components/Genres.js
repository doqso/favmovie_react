import React from "react"
import "../css/genres.css"
import Loading from "./Loading"
import { useParams } from "react-router-dom"
import { getGenres } from "../services/favmoviesApi"

export default function Genres({ setGenreId }) {
    const [genres, setGenres] = React.useState(null)
    const { id } = useParams()
    React.useEffect(() => {
        getGenres().then((data) => {
            setGenres(data)
        })
    }, [])
    const navigate = (genreId) => {
        setGenreId(genreId)
    }
    console.log(id);
    if (!genres) return <Loading />
    return (
        <div id="genres" className="mb-5">
            <h1>Generos</h1>
            <ul className="list-group d-grid ">
                {genres.map((genre) => (
                    <li className={`list-group-item bg-dark
                    text-light ${parseInt(id) === genre.id ? "active" : ""}
                    border-0 p-0`} key={genre.id}>
                        <button onClick={() => navigate(genre.id)} className="btn btn-outline-info">
                            {genre.name}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
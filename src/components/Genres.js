import React from "react"
import { getGenres, getMoviesByGenre } from "../services/favmoviesApi"
import "../css/genres.css"
import Loading from "./Loading"
import { Link } from "react-router-dom"

const Genres = ({ setMovies }) => {
    const [genres, setGenres] = React.useState(null)
    const [selectedGenreId, setSelectedGenreId] = React.useState(12)
    React.useEffect(() => {
        getGenres().then((data) => {
            setGenres(data)
        })
    }, [])

    React.useEffect(() => {
        getMoviesByGenre(selectedGenreId).then((data) => {
            setMovies(data)
        })
    }, [selectedGenreId, setMovies])
    if (!genres) return <Loading />
    return (
        <div id="genres" className="mb-5">
            <h1>Generos</h1>
            <ul className="list-group d-grid ">
                {genres.map((genre) => (
                    <li className={`list-group-item list-group-item-dark 
                    text-light ${selectedGenreId === genre.id ? "active" : ""}
                    border-0`} key={genre.id}
                        onClick={() => setSelectedGenreId(genre.id)}>
                        {genre.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Genres
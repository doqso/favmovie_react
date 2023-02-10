import React from "react"
import Loading from "./Loading"
import { Link, useParams } from "react-router-dom"
import { getGenres } from "../services/apiRequests"
import "../css/genres.css"

const Genres = () => {
    const [genres, setGenres] = React.useState(null)
    const { id: currentGenre } = useParams()
    
    React.useEffect(() => {
        getGenres().then((data) => {
            setGenres(data)
        })
    }, [])
    console.log(currentGenre);
    if (!genres) return <Loading />
    return (
        <div id="genres" className="mb-5">
            <h1>Generos</h1>
            <ul className="list-group d-grid ">
                {genres.map((genre) => (
                    <li className={`list-group-item list-group-item-dark 
                    text-light ${parseInt(currentGenre) === genre.id ? "active" : ""}
                    border-0 p-0`} key={genre.id}>
                        <Link to={`/genre/${genre.id}?page=1`} className="text-decoration-none text-light">
                            {genre.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Genres
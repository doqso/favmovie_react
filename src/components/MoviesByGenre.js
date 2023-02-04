import React from "react"
import { getMoviesByGenre } from "../request/favmoviesApi"
import "../css/moviesByGenre.css"

export default function MoviesByGenre({ genreId }) {
    const [movies, setMovies] = React.useState([{
        id: 0,
        title: "Loading...",
        overview: "",
        poster_path: "",
        release_date: [0, 0, 0],
        budget: 0,
        revenue: 0,
        genres: [{
            id: 0,
            name: ""
        }]
    }])
    React.useEffect(() => {
        getMoviesByGenre(genreId).then((data) => {
            setMovies(data)
        })
    }, [genreId])

    return (
        <div id="moviesByGenre">
            <h1>Peliculas</h1>
            <ul className="d-grid">
                {movies.map((movie) => {
                    console.log({movie});
                    return(
                    <li className="card mt-5" style={{ width: "10rem" }} key={movie.id}>
                        <img src={movie.poster_path} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h6 class="card-title">{movie.title}</h6>
                            {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                                <p className="mb-0">Estreno</p>
                                <p className="mb-0">{new Date(movie.release_date[0],
                                    movie.release_date[1],
                                    movie.release_date[2]).toLocaleDateString()}</p> 
                                </li>
                        </ul>
                    </li>
                )}
                )}
            </ul>
        </div>
    )
}
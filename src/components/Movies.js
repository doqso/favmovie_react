import React, { useState } from "react"
import "../css/movies.css"
import { Link, useParams, useSearchParams } from "react-router-dom";

// eslint-disable-next-line no-unused-vars
import Movie from "../models/Movie";
import Loading from "./Loading";
import { getDataByGenre } from "../services/favmoviesApi";
import Pagination from "./Pagination";

/**
 * 
  *@param {object} props - The properties passed to the component
 * @param {Movie[]} props.movies - The list of movies to be displayed
 * @returns 
 */
export default function Movies() {
    const [movies, setMovies] = useState(null)
    const { id: selectedGenreId } = useParams()
    const [searchParams] = useSearchParams()
    const page = searchParams.get("page")
    React.useEffect(() => {
        getDataByGenre(selectedGenreId, page).then((data) => {
            setMovies(data.results)
        })
    }, [page, selectedGenreId])
    if (!movies) return <Loading />;
    return (
        <div id="movies">
            <div className="d-flex justify-content-between align-items-center">
            <h1>Peliculas</h1>
            <Pagination />
            </div>
            <ul className="d-grid p-0">
                {movies.map((movie) => (
                    <li className="card text-bg-dark mt-5 border border-info" key={movie.id}>
                        <Link to={`/movie/${movie.id}`} className="rounded">
                            <img src={movie.poster_path} className="card-img-top" alt="poster" />
                        </Link>
                        <div className="card-header border-bottom-0">
                            <h6 className="card-title">{movie.title}</h6>
                        </div>
                        <article className="card-body d-grid pt-0">
                            <section className="border-top pt-4">
                                <p className="mb-0">Estreno</p>
                                <p className="mb-0">{Movie.getReleaseDateFormated(movie.release_date)}</p>
                            </section>
                        </article>
                    </li>
                ))}
            </ul>
        </div>
    )
}
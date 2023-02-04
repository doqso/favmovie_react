import React from "react"
import "../css/movies.css"
import { Link } from "react-router-dom";

// eslint-disable-next-line no-unused-vars
import Movie from "../models/Movie";
import Loading from "./Loading";

/**
 * 
  *@param {object} props - The properties passed to the component
 * @param {Movie[]} props.movies - The list of movies to be displayed
 * @returns 
 */
export default function Movies({ movies }) {
    if (!movies) return <Loading />;
    return (
        <div id="movies">
            <h1>Peliculas</h1>
            <ul className="d-grid mb-0 p-0">
                {movies.map((movie) => (
                    <li className="card text-bg-dark mt-5 border border-info" key={movie.id}>
                        <Link to={`/movie/${movie.id}`} className="rounded">
                            <img src={movie.poster_path} className="card-img-top"  alt="poster" />
                        </Link>
                        <div class="card-header border-bottom-0">
                            <h6 class="card-title">{movie.title}</h6>
                        </div>
                        <article className="card-body d-grid pt-0">
                            <section className="border-top pt-4">
                                <p className="mb-0">Estreno</p>
                                <p className="mb-0">{
                                    new Date(movie.release_date[0],
                                        movie.release_date[1],
                                        movie.release_date[2])
                                        .toLocaleDateString()}
                                </p>
                            </section>
                        </article>
                    </li>
                ))}
            </ul>
        </div>
    )
}
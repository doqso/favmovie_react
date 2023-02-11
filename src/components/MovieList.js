import React from "react"
import { Link } from "react-router-dom";
import Loading from "./Loading";
import ClassMovie from "../models/ClassMovie";
import "../css/movies.css"

/**
 * 
  *@param {object} props - The properties passed to the component
 * @param {ClassMovie[]} props.movies - The list of movies to be displayed
 * @returns 
 */
export default function MovieList({ movies }) {
  if (!movies) return <Loading />;
  return (
    <div id="movies">
      <ul className="movie-list p-0 d-flex gap-4 flex-wrap ">
        {movies.map((movie) => {
          movie = new ClassMovie(movie)
          return (
            <li key={movie.id} className="card text-bg-dark border border-info">
              <Link to={`/movie/${movie.id}`} className="rounded">
                <img src={movie.poster_path} className="card-img-top" alt="poster" />
              </Link>
              <div className="card-header border-bottom-0">
                <h6 className="card-title">{movie.title}</h6>
              </div>
              <article className="card-body d-grid pt-0">
                <section className="border-top pt-4">
                  <p className="mb-0">Estreno</p>
                  <p className="mb-0">{movie.release_date}</p>
                </section>
              </article>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
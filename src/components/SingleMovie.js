import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import Movie from "../models/Movie";
import { getMovieById } from "../services/favmoviesApi";
import Loading from "./Loading";
import "../css/singleMovie.css";

export default function SingleMovie() {
    const { id: movieId } = useParams();
    const [movie, setMovie] = React.useState(null);
    useEffect(() => {
        getMovieById(movieId).then((data) => {
            setMovie(new Movie(data));
        });
    }, [movieId]);
    if (!movie) return <Loading />;
    return (
        <div id="single-movie">
            <h1 className="text-center mb-4 mt-2 fst-italic">{movie.title}</h1>
            <article className="d-flex">
                <img src={movie.poster_path} className="img-fluid 
                    w-50" alt={movie.title} />
                <section>
                    <h4 className="text-center text-info">Sinopsis</h4>
                    <p>{movie.overview}</p>
                    <h5 className="text-info">Fecha de estreno</h5>
                    <p> {movie.release_date}</p>
                    <h5 className="text-info">Presupuesto</h5>
                    <p> {movie.budget}$</p>
                    <h5 className="text-info">Recaudación</h5>
                    <p> {movie.revenue}$</p>
                    <h5 className="text-info">Género</h5>
                    <p> {movie.genres.map(genre => genre.name).join(", ")}</p>
                    <div className="d-flex gap-3">
                        <button className="btn btn-outline-danger"  title="Favoritos">Favoritos ❤</button>
                        <button className="btn btn-outline-warning" title="Ver más tarde">Pendientes 🕜</button>
                    </div>
                </section>
            </article>
        </div>
    );
}
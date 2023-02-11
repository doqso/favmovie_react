import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieById, updateMovieWrapper } from "../services/apiRequests";
import Loading from "./Loading";
import MovieWrapper from "../models/MovieWrapper";
import "../css/singleMovie.css";

export default function SingleMovie() {
    const { id: movieId } = useParams();
    const [movieWrapper, setMovieWrapper] = React.useState(null);
    useEffect(() => {
        getMovieById(movieId).then((data) => {
            setMovieWrapper(new MovieWrapper(data));
        });
    }, [movieId]);
    const updateMovieStatus = (newFavoriteStatus, newWatchlistStatus) => {
        let newMovieWrapper = new MovieWrapper(movieWrapper);
        newMovieWrapper.isFavorite = newFavoriteStatus;
        newMovieWrapper.isWatchlist = newWatchlistStatus;
        updateMovieWrapper(newMovieWrapper)
            .then((data) => {
                if (data.status === 200) setMovieWrapper(newMovieWrapper);
            });
    }
    if (!movieWrapper) return <Loading />;
    const { movie, isFavorite, isWatchlist } = movieWrapper;
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
                        <button className={`btn
                        ${isFavorite ? "btn-outline-success text-light" : "btn-outline-danger"}`}
                            title="Favoritos"
                            onClick={() => updateMovieStatus(!isFavorite, isWatchlist)}>
                                Favoritos {isFavorite ? "✔" : "❤"}
                        </button>
                        <button className={`btn 
                        ${isWatchlist ? "btn-outline-success text-light" : "btn-outline-warning"} `}
                            title="Ver más tarde"
                            onClick={() => updateMovieStatus(isFavorite, !isWatchlist)}>
                                Pendientes {isWatchlist ? "✔" : "🕜"} 
                        </button>
                    </div>
                </section>
            </article>
        </div>
    );
}
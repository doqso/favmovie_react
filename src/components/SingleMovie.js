import React, { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import Movie from "../models/Movie";
import { getMovieById } from "../services/favmoviesApi";
import Genres from "./Genres";
import Loading from "./Loading";

export default function SingleMovie() {
    const { id: movieId } = useParams();
    const [movie, setMovie] = React.useState(null);
    useEffect(() => {
        getMovieById(movieId).then((data) => {
            setMovie(data);
        });
    }, [movieId]);
    if (!movie) return <Loading />;
    else return (
        <Fragment>
            <div className="single-movie">
                <img src={movie.poster_path} class="img-fluid" alt={movie.title} />
                <div className="movie-info">
                    <h2>{movie.title}</h2>
                    <p>{movie.overview}</p>
                    <p>Release Date: {movie.release_date}</p>
                    <p>Budget: {movie.budget}</p>
                    <p>Revenue: {movie.revenue}</p>
                    <p>Genres: {movie.genres.map(genre => genre.name).join(", ")}</p>
                </div>
            </div>
        </Fragment>
    );
}
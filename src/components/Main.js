import React, { useState } from "react";
import Genres from "./Genres";
import Movies from "./Movies";
import Navigation from "./Navigation";

export default function Main() {
    const [movies, setMovies] = useState(null)
    return (
        <React.Fragment>
            <Genres setMovies={setMovies} />
            <Movies movies={movies} />
        </React.Fragment>
    );
}
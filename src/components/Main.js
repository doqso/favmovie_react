import React, { useState } from "react";
import GenresList from "./GenresList";
import MoviesByGenre from "./MoviesByGenre";

export default function Main() {
    const [genreId, setGenreId] = useState(null);
    if (genreId === null) {
        return (
            <React.Fragment>
                <GenresList setGenreId={setGenreId} />
            </React.Fragment>
        );
    }
    return (
        <React.Fragment>
            <GenresList setGenreId={setGenreId} genreId={genreId}/>
            <MoviesByGenre genreId={genreId} />
        </React.Fragment>
    );
}
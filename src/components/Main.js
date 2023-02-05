import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Genres from "./Genres";
import Movies from "./Movies";
import Pagination from "./Pagination";

export default function Main() {
    const [genreId, setGenreId] = React.useState(12);
    const [page, setPage] = React.useState(1);
    const navigate = useNavigate();
    useEffect(() => {
    navigate(`/genre/${genreId}?page=${page}`);
    }, [genreId, page]);
    console.log(genreId);
    return (
        <React.Fragment>
            <Genres setGenreId={setGenreId} />
            <Movies />
            <Pagination />
        </React.Fragment>
    );
}
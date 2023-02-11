import React, { Fragment } from "react";
import { useSearchParams } from "react-router-dom";
import { getFavorites } from "../services/apiRequests";
import Movies from "./Movies";
import Pagination from "./Pagination";

export default function Favorites() {
    const [favorites, setFavorites] = React.useState(null)
    const [searchParams, setSearchParams] = useSearchParams()
    React.useEffect(() => {
        getFavorites().then((data) => {
            setFavorites(data.map(movie => movie.movie))
        })
    }, [])
    return (
        <Fragment>
            <h2 className="mt-5 ">Favoritos</h2>
            <Movies movies={favorites} />
            <Pagination searchParams={searchParams} setSearchParams={setSearchParams} />
        </Fragment>
    )
}
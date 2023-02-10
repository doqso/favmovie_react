import React, { Fragment } from "react";
import { useSearchParams } from "react-router-dom";
import { getFavorites, getWatchlist } from "../services/apiRequests";
import Movies from "./Movies";
import Pagination from "./Pagination";

export default function Watchlist() {
    const [watchList, setWatchList] = React.useState(null)
    const [searchParams, setSearchParams] = useSearchParams()
    React.useEffect(() => {
        getWatchlist().then((data) => {
            setWatchList(data.map(movie => movie.movie))
        })
    }, [])
    console.log({ watchList });
    return ( 
        <Fragment>
            <h2 className="mt-5 ">Pendientes</h2>
            <Movies movies={watchList} />
            <Pagination searchParams={searchParams} setSearchParams={setSearchParams} />
        </Fragment>
    )
}
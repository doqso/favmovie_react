import React, { Fragment } from "react";
import { useSearchParams } from "react-router-dom";
import { getFavorites, getWatchlist } from "../services/apiRequests";
import MovieList from "./MovieList";
import Pagination from "./Pagination";

export default function Watchlist() {
  const [watchList, setWatchList] = React.useState(null)
  const [searchParams, setSearchParams] = useSearchParams()
  React.useEffect(() => {
    getWatchlist().then((data) => {
      setWatchList(data.map(movie => movie.movie))
    })
  }, [])
  return (
    <Fragment>
      <h2 className="mt-4">Pendientes</h2>
      {watchList && watchList.length === 0
        ?
        <h4 className="text-center mt-4">No tienes pendientes</h4>
        :
        <Fragment>

          <MovieList movies={watchList} />
          <Pagination searchParams={searchParams} setSearchParams={setSearchParams} />
        </Fragment>
      }
    </Fragment>
  )
}
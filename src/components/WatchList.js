import React, { Fragment } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getWatchlist } from "../services/apiRequests";
import MovieList from "./MovieList";

export default function Watchlist() {
  const [watchList, setWatchList] = React.useState(null)
  const navigate = useNavigate()
  React.useEffect(() => {
    getWatchlist().then((response) => {
      if (response.redirectTo) return navigate(response.redirectTo)
      setWatchList(response.map(movie => movie.movie))
    })
  }, [])
  return (
    <Fragment>
      <h2 className="mt-4">Pendientes</h2>
      {watchList && watchList.length === 0
        ?
        <h4 className="text-center mt-4">No tienes peliculas pendientes por ver</h4>
        :
        <Fragment>
          <MovieList movies={watchList} />
          {/* <Pagination setSearchParams={setSearchParams} /> */}
        </Fragment>
      }
    </Fragment>
  )
}
import React, { Fragment } from "react";
import { useSearchParams } from "react-router-dom";
import { getFavorites } from "../services/apiRequests";
import MovieList from "./MovieList";
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
      <h2 className="mt-4 ">Favoritos</h2>
      {favorites && favorites.length === 0
        ?
        <h4 className="text-center mt-4">No tienes favoritos</h4>
        :
        <Fragment>
          <MovieList movies={favorites} />
          <Pagination searchParams={searchParams} setSearchParams={setSearchParams} />
        </Fragment>
      }
    </Fragment>
  )
}
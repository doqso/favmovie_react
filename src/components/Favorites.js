import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { getFavorites } from "../services/apiRequests";
import MovieList from "./MovieList";

export default function Favorites() {
  const [favorites, setFavorites] = React.useState(null)
const navigate = useNavigate()
  React.useEffect(() => {
    getFavorites().then((response) => {
      if (response.redirectTo) return navigate(response.redirectTo)
      setFavorites(response.map(movie => movie.movie))
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
          {/* <Pagination setSearchParams={setSearchParams} /> */}
        </Fragment>
      }
    </Fragment>
  )
}
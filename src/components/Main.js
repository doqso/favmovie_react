import React, { useState } from "react";
import { Navigate, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { getDataByGenre } from "../services/apiRequests";
import Genres from "./Genres";
import MovieList from "./MovieList";
import Pagination from "./Pagination";

export default function Main() {
  const { id: currentGenre } = useParams()
  const naviate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const currentPage = searchParams.get("page")
  const [movies, setMovies] = useState(null)
  React.useEffect(() => {
    getDataByGenre(currentGenre, currentPage).then((response) => {
      if (response.redirectTo) return naviate(response.redirectTo)
      else setMovies(response.results)
    })
  }, [currentPage, currentGenre])
  if (!currentGenre || currentGenre === undefined)
    return <Navigate key={"navigate"} to="/genre/12?page=1" />
  if (!currentPage || currentPage < 1)
    return <Navigate key={"navigate"} to={`/genre/${currentGenre}?page=1`} />
  return (
    <React.Fragment>
      <Genres />
      <h2 className="mt-4">Peliculas</h2>
      <MovieList movies={movies} />
      <Pagination searchParams={searchParams} setSearchParams={setSearchParams} />
    </React.Fragment>
  );
}
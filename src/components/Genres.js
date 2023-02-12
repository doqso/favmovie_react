import React from "react"
import Loading from "./Loading"
import { Link, useNavigate, useParams } from "react-router-dom"
import { getGenres } from "../services/apiRequests"
import "../css/genres.css"

const Genres = () => {
  const [genres, setGenres] = React.useState(null)
  const { id: currentGenre } = useParams()
  const navigate = useNavigate()

  React.useEffect(() => {
    getGenres().then((response) => {
      if (response.redirectTo) return navigate(response.redirectTo)
      else setGenres(response)
    })
  }, [])
  if (!genres) return <Loading />
  return (
    <div id="genres" className="mb-5">
      <h2 className="mt-4">Generos</h2>
      <ul className="list-group d-grid ">
        {genres.map((genre) => (
          <li className={`list-group-item rounded-2 m-1 text-light text-center 
                    ${parseInt(currentGenre) === genre.id ? "active" : ""}
                    border-0 p-0`} key={genre.id}>
            <Link to={`/genre/${genre.id}?page=1`} className="d-block p-2">
              {genre.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Genres
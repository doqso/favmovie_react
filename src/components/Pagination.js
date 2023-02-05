import { NavLink, useParams, useSearchParams } from "react-router-dom"

export default function Pagination() {
    const [pages] = useSearchParams()
    const { id } = useParams()
    const currentPage = pages.get("page")
    return (
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item">
                    <NavLink to={`/genre/${id}?page=${parseInt(currentPage) - 1}`} class="page-link" aria-label="Previous" >Previous</NavLink>
                </li>
                <li class="page-item">
                    <NavLink to={`/genre/${id}?page=${parseInt(currentPage) + 1}`} class="page-link" aria-label="Next" >Next</NavLink>
                </li>
            </ul>
        </nav>
    )
}
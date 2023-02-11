export default function Pagination({ searchParams, setSearchParams }) {
  const handlePageChange = (isNext) =>{
    if (isNext) {
      setSearchParams(prev => {
        const currentPage = prev.get("page")
        return { page: parseInt(currentPage) + 1 }
      })
    } else {
      setSearchParams(prev => {
        const currentPage = prev.get("page")
        return { page: (parseInt(currentPage) - 1) || 1 }
      })
    }
  }
  return (
    <nav aria-label="Page navigation">
      <ul class="pagination m-0 gap-4">
        <li class="page-item">
          <button style={{ width: "90px" }}
            className="btn btn-outline-warning"
            onClick={() => handlePageChange(false)}>
            Anterior
          </button>
        </li>
        <li class="page-item">
          <button style={{ width: "90px" }} className="btn btn-outline-warning"
            onClick={() => handlePageChange(true)}>
            Siguiente
          </button>
        </li>
      </ul>
    </nav>
  )
}
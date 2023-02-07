export default function Pagination({searchParams, setSearchParams}) {
    const currentPage = searchParams.get("page")
    console.log(currentPage);
    return (
        <nav aria-label="Page navigation">
            <ul class="pagination m-0 gap-4">
                <li class="page-item">
                    <button style={{ width: "90px" }} 
                    className="btn btn-outline-warning"
                    onClick={()=>setSearchParams({page: parseInt(currentPage) - 1 || 1})}>
                        Anterior
                    </button>
                </li>
                <li class="page-item">
                    <button style={{ width: "90px" }} className="btn btn-outline-warning"
                    onClick={()=>setSearchParams({page: parseInt(currentPage) + 1 || 2})}>
                        Siguiente
                    </button>
                </li>
            </ul>
        </nav>
    )
}
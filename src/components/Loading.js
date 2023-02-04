import "../css/loading.css"
export default function Loading() {
    return (
        <div class="spinner-border position-absolute 
        top-50 start-50 text-info" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    )
}
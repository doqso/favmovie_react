const style = {
    width: "7rem",
    height: "7rem",
    translate: "-50% -50%"
}

export default function Loading() {
    return (
        <div id="loading" className="spinner-border position-absolute 
        top-50 start-50 text-info" role="status" style={style}>
            <span className="visually-hidden">Loading...</span>
        </div>
    )
}
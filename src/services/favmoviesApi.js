export async function getGenres() {
    return await fetch("http://localhost:8081/genres")
    .then(response => response.json())
}

export async function getDataByGenre(genreId, page = 1) {
    return await fetch(`http://localhost:8081/genre/${genreId}?page=${page}`)
    .then(response => response.json())
}

export async function getMovieById(movieId) {
    return await fetch(`http://localhost:8081/movie/${movieId}`)
    .then(response => response.json())
}
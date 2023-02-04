export async function getGenres() {
    return await fetch("http://localhost:8081/genres")
    .then(response => response.json())
}

export async function getMoviesByGenre(genreId) {
    return await fetch(`http://localhost:8081/genre/${genreId}`)
    .then(response => response.json())
}
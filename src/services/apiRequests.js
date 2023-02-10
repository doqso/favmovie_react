let BASE_URL = "http://localhost:8081";

export async function login(username, password) {
  return await fetch(`${BASE_URL}/login`, {
    method: "POST",
    mode: "cors",
    body: JSON.stringify({id:0, username, password }),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.text())
    .then(data => {
      if (data === "") return document.cookie = `apiToken=;Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
      else document.cookie = `apiToken=${data}`;
      return data;
    })

}

export async function getGenres() {
  return await fetch(`${BASE_URL}/genres`)
    .then(response => response.json())
}

export async function getDataByGenre(genreId, page = 1) {
  return await fetch(`${BASE_URL}/genre/${genreId}?page=${page}`, {
    redirect: "follow"
  })
    .then(response => {
      console.log(response.status);
      if (response.status === 401) return response;
      else return response.json()
    })
    .catch(error => {
      console.log(error)
    })
}

export async function getMovieById(movieId) {
  return await fetch(`${BASE_URL}/movie/${movieId}`)
    .then(response => response.json())
}

export async function updateMovieWrapper(movieWrapper) {
  console.log(movieWrapper);
  return await fetch(`${BASE_URL}/movie/update`, {
    method: "POST",
    body: JSON.stringify(movieWrapper),
    headers: {
      "Content-Type": "application/json"
    }
  })
}

export async function getFavorites() {
  return await fetch(`${BASE_URL}/favorites`)
    .then(response => response.json())
}

export async function getWatchlist() {
  return await fetch(`${BASE_URL}/watchlist`)
    .then(response => response.json())
}

import { useNavigate } from "react-router-dom";
import { setCookie } from "../util/cookieManager";

let BASE_URL = "http://localhost:8081";

export async function getTokenFromApi(username, password) {
  return await fetch(`${BASE_URL}/login`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    body: JSON.stringify({ id: 0, username, password }),
    headers: {
      "Content-Type": "application/json",
    }
  })
    .then(response => response.text())

}

export async function getGenres() {
  return await fetch(`${BASE_URL}/genres`, {
    mode: "cors",
    redirect: "follow",
    credentials: "include"
  })
    .then(response => manageResponse(response))
}

export async function getDataByGenre(genreId, page = 1) {
  return await fetch(`${BASE_URL}/genre/${genreId}?page=${page}`, {
    mode: "cors",
    credentials: "include",
  })
    .then(response => manageResponse(response))
    .catch(error => {
      console.log(error)
    })
}

export async function getMovieById(movieId) {
  return await fetch(`${BASE_URL}/movie/${movieId}`, {
    mode: "cors",
    credentials: "include",
  })
    .then(response => manageResponse(response))
}

export async function updateMovieWrapper(movieWrapper) {
  return await fetch(`${BASE_URL}/movie/update`, {
    method: "POST",
    credentials: "include",
    mode: "cors",
    body: JSON.stringify(movieWrapper),
  })
}

export async function getFavorites() {
  return await fetch(`${BASE_URL}/favorites`, {
    mode: "cors",
    credentials: "include",
  })
    .then(response => manageResponse(response))
}

export async function getWatchlist() {
  return await fetch(`${BASE_URL}/watchlist`, {
    credentials: "include",
    mode: "cors"
  })
    .then(response => manageResponse(response))
}

const manageResponse = (response) => {
  if (response.status === 401) {
    response.redirectTo = "/logout"
    return response
  }
  else return response.json()
}


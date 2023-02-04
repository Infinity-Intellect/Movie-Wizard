import { MovieDetail } from "./models/movies";
import { Default, SearchResponse } from "./models/responses";

const API_KEY = process.env.REACT_APP_API_KEY || "please_provide_api_key"
const BASE_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`

export const getMoviesByTitle = (title: string, page: number): Promise<Default & SearchResponse> =>{
  return fetch(`${BASE_URL}&s=${title}&page=${page}&type=movie`).then((response) => {
    if(response.ok) {
      return response.json() as Promise<Default & SearchResponse>
    }
    else {
      throw new Error(response.statusText)
    }
  })
}

export const getMovieDetailsById = (imdbId: string): Promise<Default & MovieDetail> => {
  return fetch(`${BASE_URL}&i=${imdbId}&plot=full`).then((response) => {
    if(response.ok) {
      return response.json() as Promise<Default & MovieDetail>
    }
    else {
      throw new Error(response.statusText)
    }
  })
}
import { MovieDetail } from "./models/movies";
import { Default, SearchResponse } from "./models/responses";

export const searchResult: SearchResponse & Default = {
    "Search": [
        {
            "Title": "Shang-Chi and the Legend of the Ten Rings",
            "Year": "2021",
            "imdbID": "tt9376612",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNTliYjlkNDQtMjFlNS00NjgzLWFmMWEtYmM2Mzc2Zjg3ZjEyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
        },
        {
            "Title": "The Ten Commandments",
            "Year": "1956",
            "imdbID": "tt0049833",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BODcxYjUxZDgtYTQ5Zi00YmQ1LWJmZmItODZkOTYyNDhiNWM3XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
        },
        {
            "Title": "The Whole Ten Yards",
            "Year": "2004",
            "imdbID": "tt0327247",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTcwMDE5NDcwNl5BMl5BanBnXkFtZTcwMjg1MzUyMQ@@._V1_SX300.jpg"
        },
        {
            "Title": "The Ten",
            "Year": "2007",
            "imdbID": "tt0811106",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNzc4MjU2MzY2N15BMl5BanBnXkFtZTcwNjExNTk0MQ@@._V1_SX300.jpg"
        },
        {
            "Title": "Ten Inch Hero",
            "Year": "2007",
            "imdbID": "tt0829297",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTY2NTk2NTY5MF5BMl5BanBnXkFtZTcwMzQ5MTYzMg@@._V1_SX300.jpg"
        },
        {
            "Title": "Ten",
            "Year": "2002",
            "imdbID": "tt0301978",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNmUxMjQxNWEtNGU2MS00ODNhLTlmNTEtM2UyYjA3ZmMzNGFmXkEyXkFqcGdeQXVyMjgyOTI1ODY@._V1_SX300.jpg"
        },
        {
            "Title": "October (Ten Days that Shook the World)",
            "Year": "1927",
            "imdbID": "tt0018217",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BOTNmNjQxYjgtODNmYi00ZGEzLTk3NmYtNDI2ZDI0ZDI5YzY4XkEyXkFqcGdeQXVyMzg1ODEwNQ@@._V1_SX300.jpg"
        },
        {
            "Title": "Ten Thousand Saints",
            "Year": "2015",
            "imdbID": "tt3397754",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNjM1NTgwODEyOV5BMl5BanBnXkFtZTgwNzM1ODM1NjE@._V1_SX300.jpg"
        },
        {
            "Title": "Ten Canoes",
            "Year": "2006",
            "imdbID": "tt0466399",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTkzOTQ1NTA0OV5BMl5BanBnXkFtZTcwNzk3MTg0MQ@@._V1_SX300.jpg"
        },
        {
            "Title": "Ten Little Indians",
            "Year": "1965",
            "imdbID": "tt0061075",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BODFiNTBhNjctZGI1Mi00YmRiLWExMTYtYWMzMjJhZmFiOTI1XkEyXkFqcGdeQXVyMjI4MjA5MzA@._V1_SX300.jpg"
        }
    ],
    "totalResults": "897",
    "Response": "True"
}

export const detailedMovie: MovieDetail & Default = {
    "Title": "Shang-Chi and the Legend of the Ten Rings",
    "Year": "2021",
    "Rated": "PG-13",
    "Released": "03 Sep 2021",
    "Runtime": "132 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "Destin Daniel Cretton",
    "Writer": "Dave Callaham, Destin Daniel Cretton, Andrew Lanham",
    "Actors": "Simu Liu, Awkwafina, Tony Chiu-Wai Leung",
    "Plot": "Shang-Chi, the master of weaponry-based Kung Fu, is forced to confront his past after being drawn into the Ten Rings organization.",
    "Language": "English, Mandarin",
    "Country": "United States",
    "Awards": "Nominated for 1 Oscar. 20 wins & 66 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNTliYjlkNDQtMjFlNS00NjgzLWFmMWEtYmM2Mzc2Zjg3ZjEyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "7.4/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "91%"
        },
        {
            "Source": "Metacritic",
            "Value": "71/100"
        }
    ],
    "Metascore": "71",
    "imdbRating": "7.4",
    "imdbVotes": "385,678",
    "imdbID": "tt9376612",
    "Type": "movie",
    "DVD": "12 Nov 2021",
    "BoxOffice": "$224,543,292",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
}
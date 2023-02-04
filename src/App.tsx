import { Button, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/system';
import React, { useState, useEffect, useCallback } from 'react';
import { getMoviesByTitle } from './api';
import './App.css';
import { MoviesList } from './components/MoviesList';
import { SearchBar } from './components/SearchBar';
import { searchResult } from './mockData';
import { Movie } from './models/movies';
import { Default, SearchResponse } from './models/responses';
import LoadingButton from '@mui/lab/LoadingButton';

function App() {

  const [sortedMovies, setSortedMovies] = useState(searchResult.Search)
  const [isFetchingData, setIsFetchingData] = useState(false)
  const [errorMessage, setErrorMessage] = useState("");
  const [page, setPage] = useState(1);
  const [searchResponse, setSearchResponse] = useState({
    Search: new Array(),
    totalResults: "0",
    Response: "False"
  })
  const [searchTerm, setSearchTerm] = useState("ten");

  const sortMovies = (order: "asc" | "desc") => {
    let newMovies = [...sortedMovies]
    let moviesAfterSorting = newMovies.sort((movie1: Movie, movie2: Movie) => {
      let year1 = parseInt(movie1.Year, 10)
      let year2 = parseInt(movie2.Year, 10)
      return order === "asc" ? year1 - year2 : year2 - year1
    }
    )
    setSortedMovies(moviesAfterSorting)
  }

  const clearState = () => {
    setErrorMessage("");
    setPage(1);
  }
  const fetchMoviesGivenTitle = (title: string) => {
    clearState();
    setIsFetchingData(true);
    setSearchTerm(title)

    getMoviesByTitle(title, page).then((response: Default & SearchResponse) => {
      if (response.Error) {
        let updatedSearchResponse = { ...searchResponse }
        updatedSearchResponse.Search = [];
        updatedSearchResponse.totalResults = "0";
        setSearchResponse(updatedSearchResponse)
        setErrorMessage(response.Error);
      }
      else {
        setSearchResponse(response);
      }
      setIsFetchingData(false)
    }).catch((error) => {
      console.error(error)
    })
  }

  const loadNextMovies = useCallback((title: string) => {
    setIsFetchingData(true)
    getMoviesByTitle(title, page).then((response: Default & SearchResponse) => {
      if (response.Error) {
        setErrorMessage(response.Error)
      }
      else {
        let newMovies: Movie[] = response.Search;
        let updatedSearchResponse = { ...searchResponse }
        updatedSearchResponse.Search = updatedSearchResponse.Search.concat(newMovies)
        setSearchResponse(updatedSearchResponse)
      }
      setIsFetchingData(false)
    }).catch((error) => {
      console.error(error)
      setIsFetchingData(false)
    })
  }, [page, searchResponse])

  const handleLoadMoreClick = () => {
    setPage((previousPage) => previousPage + 1)
  }

  useEffect(() => {
    fetchMoviesGivenTitle(searchTerm)
  }, [])

  useEffect(() => {
    if (page > 1) {
      loadNextMovies(searchTerm);
    }
  }, [page, loadNextMovies, searchTerm])

  useEffect(() => {
    setSortedMovies(searchResponse.Search);
  }, [searchResponse])

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} display="flex" justifyContent="center">
          <Typography gutterBottom color="primary" variant="h3" component="div" sx={{textDecoration:"underline"}}>
            Movie Wizard
          </Typography>
        </Grid>
        <Grid item xs={12} display="flex" justifyContent="center">
          <SearchBar loading={isFetchingData} onSearchClick={fetchMoviesGivenTitle} />
        </Grid>
        {!errorMessage && <Grid item xs={12}>
          <Button onClick={() => { sortMovies("asc") }}>Sort by Year ↑</Button>
          <Button onClick={() => { sortMovies("desc") }} sx={{ marginLeft: '10px' }}>Sort by Year ↓</Button>
        </Grid>}
        <Grid item xs={12}>
          {!errorMessage && <MoviesList movies={sortedMovies} />}
        </Grid>
        <Grid item xs={12}>
          {!errorMessage && (page * 10 < parseInt(searchResponse.totalResults)) &&
            <LoadingButton loading={isFetchingData} variant="contained" onClick={handleLoadMoreClick}>
              Load More
            </LoadingButton>}
          {errorMessage && <h2 style={{ color: 'red' }}>{errorMessage}</h2>}
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;

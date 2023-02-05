import { Grid } from '@mui/material'
import React, {useState} from 'react'
import { Movie, MovieDetail } from '../models/movies'
import { InformationDialog } from './InformationDialog'
import { MovieCard } from './MovieCard';

interface MoviesListProps {
  movies: Movie[]
}

export function MoviesList({movies}: MoviesListProps) {
  const [selectedMovie, setSelectedMovie] = useState<MovieDetail|null>(null)
  const [dialogOpen, setDialogOpen] = useState(false);

  /**
   * Method to handle the close of dialog
   */
  const handleDialogClose = () => {
    setDialogOpen(false)
  }

  /**
   * Method to handle the open of dialog
   * @param detailedMovie The movie detail object
   */
  const handleDialogOpen = (detailedMovie: MovieDetail) => {
    setSelectedMovie(detailedMovie)
    setDialogOpen(true)
  }
  return <Grid container spacing={2}>
    {movies.map((movie: Movie, index: number) => (
      <Grid item xs={12} key={movie.imdbID+index}>
        <MovieCard movie={movie} handleDialogOpen={handleDialogOpen}/>
      </Grid>
    ))}
    <InformationDialog openStatus={dialogOpen} movie={selectedMovie} handleDialogClose={handleDialogClose}/>
  </Grid>
}
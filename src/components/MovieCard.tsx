import { Card, CardActions, CardContent, CardMedia, Divider, Grid, Typography, useMediaQuery } from '@mui/material'
import React, {useState} from 'react'
import { Movie, MovieDetail } from '../models/movies'
import LoadingButton from '@mui/lab/LoadingButton';
import { getMovieDetailsById } from '../api';
import { Default } from '../models/responses';

interface MovieCardProps {
  movie: Movie;
  handleDialogOpen: Function;
}

export function MovieCard({movie, handleDialogOpen}: MovieCardProps) {
  
  const [loading, setLoading] = useState(false);
  const isMobileScreen = useMediaQuery('(max-width:445px)')

  /**
   * Method to get movie detail by passing imdbID
   * @param movie The movie for which details are to be fetched
   */
  const getMovieDetail = (movie: Movie) => {
    setLoading(true)
    getMovieDetailsById(movie.imdbID).then((response: Default & MovieDetail) => {
      if(response.Error) {
        console.error("Error fetching movie details")
      }
      else {
        handleDialogOpen(response)
      }
      setLoading(false)
    })
    .catch((error) => {
      console.error(error)
      setLoading(false)
    })
  }

  return <Card sx={{maxHeight: '250px'}}>
  <Grid container wrap='nowrap'>
    <Grid item>
      <CardMedia component="img"
        image={movie.Poster}
        alt={`Movie Poster of ${movie.Title}`}
        height={isMobileScreen?150:250}
        sx={{width: isMobileScreen ? "auto" : "200px"}}
      />
    </Grid>
    <Divider orientation='vertical' flexItem>
    </Divider>
    <Grid item xs={10} display="flex" flexDirection="column">
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {movie.Title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Released: {movie.Year}
        </Typography>
      </CardContent>
      <div style={{flexGrow: 1}}></div>
      <CardActions>
        <LoadingButton size="medium" variant="outlined" color="primary"
        onClick={() => {getMovieDetail(movie)}} loading={loading}>
          {isMobileScreen? "+ Know more" : "+ Click to know more"}
        </LoadingButton>
      </CardActions>
    </Grid>
  </Grid>
</Card>

}
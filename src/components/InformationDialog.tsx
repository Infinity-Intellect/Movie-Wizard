import { Button, Chip, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Typography } from '@mui/material'
import React from 'react'
import { MovieDetail } from '../models/movies'

interface InformationDialogProps {
  movie: MovieDetail | null;
  openStatus: boolean;
  handleDialogClose: Function
}
export function InformationDialog({ openStatus, handleDialogClose, movie }: InformationDialogProps) {
  return <div>
    <Dialog open={openStatus} onClose={() => { handleDialogClose() }}>
      {movie && <div>
        <DialogTitle style={{ textAlign: "center" }}>
          <Typography gutterBottom variant="h5" component="div">
            {movie.Title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Directed by {movie.Director}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Released {movie.Year}
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={4}>
            <Grid item xs={12} display="flex" justifyContent="center">
              <img src={movie.Poster} alt="moviePoster" />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" fontWeight="bolder">
                Plot
              </Typography>
              <Typography variant="body1">
                {movie.Plot}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <span style={{fontWeight: 'bold'}}>Rating:</span> <Chip label={movie.Ratings[0].Value} variant="outlined" color="success" />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button variant='outlined' color='error' onClick={() => { handleDialogClose() }}>Close</Button>
        </DialogActions>
      </div>}
      {movie == null && <div>No movie selected</div>}
    </Dialog>
  </div>
}
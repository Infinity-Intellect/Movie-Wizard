import { TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import LoadingButton from '@mui/lab/LoadingButton';
import React, { useState } from 'react';

interface SearchBarProps {
  loading: boolean;
  onSearchClick: Function;
}

export function SearchBar({ loading, onSearchClick }: SearchBarProps) {

  const [searchTerm, setSearchTerm] = useState("");

  /**
   * Method to handle when character is entered in the input text field
   * @param event The keyup event object
   */
  const handleInputChange = (event: any) => {
    if(event.key === 'Enter' && searchTerm) {
      onSearchClick(searchTerm)
    }
    else {
      setSearchTerm(event.target.value)
    }
  }
  return <Grid container spacing={2} alignItems="center">
    <Grid item xs={10}>
      <TextField id="searchTextField" label="Search for a movie" variant="outlined" fullWidth
        onKeyUp={handleInputChange} />
    </Grid>
    <Grid item xs={2}>
      <LoadingButton variant="contained" loading={loading}
        onClick={() => { onSearchClick(searchTerm) }} disabled={!searchTerm}>Search</LoadingButton>
    </Grid>
  </Grid>
}
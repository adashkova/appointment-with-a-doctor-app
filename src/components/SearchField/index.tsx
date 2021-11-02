import React, { FC, useState } from 'react';
import { useDispatch, connect } from 'react-redux';
import { showDoctorsByName } from '../../store/actions/actions';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const SearchField: FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');

  const dispatch = useDispatch();

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setSearchValue(e.target.value.toLocaleLowerCase());
  };

  const handleSearch = () => {
    dispatch(showDoctorsByName(searchValue));
  };
  // TODO reset speciality

  return (
    <Grid container>
      <Grid item xs={8}>
        <TextField
          fullWidth
          id="filled-search"
          label="Search a doctor"
          type="search"
          variant="standard"
          sx={{ mb: 1 }}
          value={searchValue}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={1}></Grid>
      <Grid item xs={2}>
        <Grid container justifyContent="center" mt={1.5}>
          <Button variant="contained" onClick={handleSearch}>
            Search
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default connect()(SearchField);

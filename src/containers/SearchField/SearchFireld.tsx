import React, { FC, useState } from 'react'
import { useDispatch, useSelector, connect } from 'react-redux'
import { showDoctorsByName, isDoctorByName } from '../../store/actions'
import { RootState } from '../../store'
import { Spacing } from '../../styles'
import TextField from '@mui/material/TextField'
import { Button } from '../../components/Button'
import Grid from '@mui/material/Grid'
import SearchIcon from '@mui/icons-material/Search'
import Alert from '@mui/material/Alert'

const SearchField: FC = () => {
  const [searchValue, setSearchValue] = useState<string>('')
  const [isNoName, setIsNoName] = useState<boolean>(false)
  const doctorsState = useSelector((state: RootState) => state.doctors)

  const { isError } = doctorsState

  const dispatch = useDispatch()

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    setSearchValue(e.target.value.toLocaleLowerCase())
    setIsNoName(false)
  }

  const handleSearch = () => {
    if (!searchValue) {
      setIsNoName(true)
    } else {
      dispatch(showDoctorsByName(searchValue))
      dispatch(isDoctorByName())
    }
  }

  return (
    <Grid container>
      {isError && (
        <Alert
          variant="outlined"
          severity="error"
          style={{ marginBottom: Spacing.md32 }}
        >
          Doctor with that name not found!
        </Alert>
      )}
      {isNoName && (
        <Alert
          variant="outlined"
          severity="error"
          style={{ marginBottom: Spacing.md32 }}
        >
          Please, inter name or last name!
        </Alert>
      )}
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
          data-testid="textField"
        />
      </Grid>

      <Grid item xs={2}>
        <Grid container justifyContent="center" mt={1.5}>
          <Button variant="contained" onClick={handleSearch} data-testid="btn">
            <SearchIcon />
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default connect()(SearchField)

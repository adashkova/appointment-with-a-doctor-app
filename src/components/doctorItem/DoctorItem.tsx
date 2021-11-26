import { FC } from 'react'
import { StyledDoctorLink, Item } from '../styled'
import { Spacing } from '../../styles'
import { IDoctor } from '../../api'
import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar'

interface IDoctorItemProps {
  doctor: IDoctor
}

export const DoctorItem: FC<IDoctorItemProps> = ({
  doctor: { name, speciality, avatar },
}) => (
  <Item>
    <Grid container justifyContent="center">
      <Grid item xs={2} md={1} style={{ margin: `${Spacing.sm12} 0` }}>
        <StyledDoctorLink to={`/doctors/${name}`}>
          <Avatar
            alt={name}
            src={avatar && avatar}
            sx={{ width: 40, height: 40 }}
          />
        </StyledDoctorLink>
      </Grid>
      <Grid item xs={5} md={2} lg={2}>
        <StyledDoctorLink to={`/doctors/${name}`} data-testid="DoctorLink">
          {name} ({speciality})
        </StyledDoctorLink>
      </Grid>
    </Grid>
  </Item>
)

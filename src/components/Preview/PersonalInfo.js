import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

function PersonalInfo({ data: { firstName, lastName, email, phone } }) {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography>{`${firstName} ${lastName}`}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>{email}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>{phone}</Typography>
      </Grid>
    </Grid>
  );
}

export default PersonalInfo;

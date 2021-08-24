import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  divider: {
    margin: `${theme.spacing(2)}px 0`,
  },
}));

function EducationItem({
  courseName,
  institution,
  startDate,
  endDate,
  isSingle,
}) {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography>{courseName}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>{institution}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>{`${startDate} - ${endDate}`}</Typography>
      </Grid>
      {!isSingle && (
        <Grid className={classes.divider} item xs={12}>
          <Divider />
        </Grid>
      )}
    </Grid>
  );
}

export default EducationItem;

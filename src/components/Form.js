import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import PersonalInfo from './Form/PersonalInfo';
import Education from './Form/Education';
import Experience from './Form/Experience';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    margin: theme.spacing(5),
    padding: `0 ${theme.spacing(3)}px`,
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      margin: theme.spacing(2),
      padding: `0 ${theme.spacing(1)}px`,
      paddingBottom: theme.spacing(1),
    },
  },
}));

function Form({ data }) {
  const classes = useStyles();

  return (
    <Paper className={classes.wrapper}>
      <form noValidate autoComplete='off'>
        <PersonalInfo data={data} />
        <Education data={data} />
        <Experience data={data} />
      </form>
    </Paper>
  );
}

Form.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Form;

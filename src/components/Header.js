import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  header: {
    padding: `${theme.spacing(3)}px 0`,
  },
  title: {
    fontWeight: theme.typography.fontWeightMedium,
  },
}));

function Header({ title }) {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <Typography className={classes.title} variant='h5' component='h2'>
        {title}
      </Typography>
      <Divider />
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  appBar: {
    padding: `${theme.spacing(1)}px 0`,
  },
  button: {
    marginLeft: 'auto',
  },
}));

function Navbar({ title, isEditing, switchMode }) {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position='sticky' elevation={0}>
      <Toolbar>
        <Typography variant='h2' component='h1'>
          {title}
        </Typography>
        <Button
          className={classes.button}
          variant='contained'
          disableElevation
          onClick={switchMode}
        >
          {isEditing ? 'Preview' : 'Edit'}
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

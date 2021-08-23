import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Header from '../Header';
import EducationItem from './EducationItem';

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: theme.spacing(2),
  },
}));

function Education({ data }) {
  const classes = useStyles();
  const SECTION = 'education';
  const {
    education,
    handleTextFieldChange,
    handleAddItemButtonClick,
    handleDeleteItemButtonClick,
  } = data;

  const components = education.map((item) => (
    <EducationItem
      key={item.id}
      data={item}
      onChange={handleTextFieldChange}
      onClick={handleDeleteItemButtonClick}
      SECTION={SECTION}
      isSingle={education.length === 1}
    />
  ));

  return (
    <section>
      <Header title='Education' />
      {components}
      <Button
        className={classes.button}
        variant='contained'
        color='primary'
        onClick={() => handleAddItemButtonClick(SECTION)}
      >
        Add
      </Button>
    </section>
  );
}

export default Education;

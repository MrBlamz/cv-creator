import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Header from '../Header';
import ExperienceItem from './ExperienceItem';

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: theme.spacing(2),
  },
}));

function Experience({ data }) {
  const classes = useStyles();
  const SECTION = 'experience';
  const {
    experience,
    handleTextFieldChange,
    handleAddItemButtonClick,
    handleDeleteItemButtonClick,
  } = data;

  const components = experience.map((item) => (
    <ExperienceItem
      key={item.id}
      data={item}
      onChange={handleTextFieldChange}
      onClick={handleDeleteItemButtonClick}
      SECTION={SECTION}
      isSingle={experience.length === 1}
    />
  ));

  return (
    <section>
      <Header title='Experience' />
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

export default Experience;

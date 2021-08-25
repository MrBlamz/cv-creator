import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import Section from './Preview/Section';
import PersonalInfo from './Preview/PersonalInfo';
import EducationItem from './Preview/EducationItem';
import ExperienceItem from './Preview/ExperienceItem';

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

function Preview({ data: { personalInfo, education, experience } }) {
  const classes = useStyles();

  const educationComponents = education.map((item) => (
    <EducationItem
      key={item.id}
      courseName={item.courseName}
      institution={item.institution}
      startDate={item.startDate}
      endDate={item.endDate}
      isSingle={education.length === 1}
    />
  ));

  const experienceComponents = experience.map((item) => (
    <ExperienceItem
      key={item.id}
      jobTitle={item.jobTitle}
      companyName={item.companyName}
      startDate={item.startDate}
      endDate={item.endDate}
      isSingle={experience.length === 1}
    />
  ));

  return (
    <Paper className={classes.wrapper}>
      <Section title='Personal Info'>
        <PersonalInfo data={personalInfo} />
      </Section>
      <Section title='Education'>{educationComponents}</Section>
      <Section title='Experience'>{experienceComponents}</Section>
    </Paper>
  );
}

Preview.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Preview;

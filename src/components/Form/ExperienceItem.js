import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

function ExperienceItem(props) {
  const { onChange, onClick, SECTION, isSingle } = props;
  const { id, jobTitle, companyName, startDate, endDate } = props.data;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <TextField
          label='Job Title'
          id='job-title'
          type='text'
          name='jobTitle'
          value={jobTitle}
          onChange={(event) => onChange(event, SECTION, id)}
          variant='filled'
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label='Company Name'
          id='company-name'
          type='text'
          name='companyName'
          value={companyName}
          onChange={(event) => onChange(event, SECTION, id)}
          variant='filled'
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label='Start Date'
          id='start-date'
          type='date'
          name='startDate'
          value={startDate}
          onChange={(event) => onChange(event, SECTION, id)}
          variant='filled'
          InputLabelProps={{ shrink: true }}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label='End Date'
          id='end-date'
          type='date'
          name='endDate'
          value={endDate}
          onChange={(event) => onChange(event, SECTION, id)}
          variant='filled'
          InputLabelProps={{ shrink: true }}
          fullWidth
        />
      </Grid>
      {isSingle ? null : (
        <Grid item xs={12}>
          <Button
            variant='contained'
            color='secondary'
            onClick={() => onClick(SECTION, id)}
          >
            Delete
          </Button>
        </Grid>
      )}
      <Grid item xs={12}>
        <Divider />
      </Grid>
    </Grid>
  );
}

export default ExperienceItem;

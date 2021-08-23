import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

function EducationItem(props) {
  const { onChange, onClick, SECTION, isSingle } = props;
  const { id, courseName, institution, startDate, endDate } = props.data;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <TextField
          label='Course Name'
          id='course-name'
          type='text'
          name='courseName'
          value={courseName}
          onChange={(event) => onChange(event, SECTION, id)}
          variant='filled'
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label='Institution'
          id='institution'
          type='text'
          name='institution'
          value={institution}
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

export default EducationItem;

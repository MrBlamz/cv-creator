import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Header from '../Header';
import MaterialUiPhoneNumber from 'material-ui-phone-number';

function PersonalInfo({ data }) {
  const SECTION = 'personalInfo';
  const { firstName, lastName, email, phone } = data.personalInfo;
  const { handleTextFieldChange } = data;

  return (
    <section>
      <Header title='Personal Information' />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label='First Name'
            id='first-name'
            type='text'
            name='firstName'
            value={firstName}
            onChange={(event) => handleTextFieldChange(event, SECTION)}
            variant='filled'
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label='Last Name'
            id='last-name'
            type='text'
            name='lastName'
            value={lastName}
            onChange={(event) => handleTextFieldChange(event, SECTION)}
            variant='filled'
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label='Email'
            id='email'
            type='email'
            name='email'
            value={email}
            onChange={(event) => handleTextFieldChange(event, SECTION)}
            variant='filled'
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <MaterialUiPhoneNumber
            label='Phone Number'
            id='phone-number'
            value={phone}
            defaultCountry={'pt'}
            onChange={(value) => {
              const event = { target: { name: 'phone', value } };
              handleTextFieldChange(event, SECTION);
            }}
            variant='filled'
            fullWidth
          />
        </Grid>
      </Grid>
    </section>
  );
}

export default PersonalInfo;

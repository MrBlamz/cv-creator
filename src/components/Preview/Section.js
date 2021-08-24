import React from 'react';
import Grid from '@material-ui/core/Grid';
import Header from '../Header';

function Section({ title, children }) {
  return (
    <section>
      <Header title={title} />
      <Grid container>{children}</Grid>
    </section>
  );
}

export default Section;

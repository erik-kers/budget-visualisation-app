import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import BudgetPie from './components/budget-pie/budget-pie.component';

const App = () => (
  <Container>
    <Grid container direction="row" justify="space-around" alignItems="center">
      <Grid item xs={12} sm={8}>
        <BudgetPie />
      </Grid>
    </Grid>
  </Container>
);

export default App;

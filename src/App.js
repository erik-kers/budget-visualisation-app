import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import BudgetPie from './components/budget-pie/budget-pie.component';
import BudgetTable from './components/budget-table/budget-table.component';

const App = () => (
  <Container component={Paper}>
    <Grid container direction="row" justify="space-around" alignItems="center" spacing={9} style={{ minHeight: '100vh' }}>
      <Grid item xs={12} sm={8}>
        <BudgetPie />
      </Grid>
      <Grid item xs={12} sm={4}>
        <BudgetTable />
      </Grid>
    </Grid>
  </Container>
);

export default App;

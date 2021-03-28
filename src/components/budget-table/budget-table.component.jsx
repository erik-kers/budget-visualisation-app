import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import BudgetRow from '../budget-row/budget-row.component';
import budgetActionTypes from '../../redux/budget/budget.types';

const BudgetTable = () => {
  const dispatch = useDispatch();
  const rows = useSelector((state) => state.budget.data);

  const addRow = (key) => {
    dispatch({ type: budgetActionTypes.ADD_ROW, payload: key });
  };

  const deleteRow = () => {
    dispatch({ type: budgetActionTypes.DELETE_ROW });
  };

  return (
    <form>
      <Grid container spacing={4}>
        {rows.map((row) => (
          <BudgetRow data={row} key={row.key} />
        ))}
        <Grid item xs={6} sm={6}>
          <Button variant="contained" color="primary" onClick={() => addRow(uuidv4())}>
            New Row
          </Button>
        </Grid>
        <Grid item xs={6} sm={6}>
          {!!rows.length && (
            <Button variant="contained" color="secondary" onClick={deleteRow}>
              Delete Row
            </Button>
          )}
        </Grid>
      </Grid>
    </form>
  );
};

export default BudgetTable;

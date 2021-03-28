/* eslint-disable react/prop-types */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { useDispatch } from 'react-redux';
import budgetActionTypes from '../../redux/budget/budget.types';

const BudgetRow = ({ data }) => {
  const dispatch = useDispatch();

  const updateRow = (target, value) => {
    if (target === 'value') {
      dispatch({ type: budgetActionTypes.UPDATE_ROW, payload: { ...data, value } });
    } else {
      dispatch({ type: budgetActionTypes.UPDATE_ROW, payload: { ...data, id: value, label: value } });
    }
  };
  return (
    <>
      <Grid item xs={6} sm={6}>
        <TextField size="small" id="standard-text" label="Name" type="text" onChange={(event) => updateRow('name', event.target.value)} />
      </Grid>
      <Grid item xs={6} sm={6}>
        <TextField
          size="small"
          id="standard-number"
          label="Amount"
          type="number"
          onChange={(event) => updateRow('value', event.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
    </>
  );
};

export default BudgetRow;

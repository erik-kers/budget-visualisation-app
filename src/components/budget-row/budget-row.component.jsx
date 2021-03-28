/* eslint-disable react/prop-types */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { useDispatch } from 'react-redux';
import debounce from 'lodash/debounce';
import budgetActionTypes from '../../redux/budget/budget.types';

const BudgetRow = ({ data }) => {
  const dispatch = useDispatch();

  const updateRow = debounce((newData) => dispatch({ type: budgetActionTypes.UPDATE_ROW, payload: newData }), 400);

  const handleChange = (target, value) => {
    let newData = {};
    if (target === 'value') {
      newData = { ...data, value };
    } else {
      newData = { ...data, id: value, label: value };
    }

    updateRow(newData);
  };

  return (
    <>
      <Grid item xs={6} sm={6}>
        <TextField
          size="small"
          id="standard-text"
          label="Name"
          type="text"
          onChange={(event) => handleChange('name', event.target.value)}
        />
      </Grid>
      <Grid item xs={6} sm={6}>
        <TextField
          size="small"
          id="standard-number"
          label="Amount"
          type="number"
          onChange={(event) => handleChange('value', event.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
    </>
  );
};

export default BudgetRow;

import { combineReducers } from 'redux';
import budgetReducer from './budget/budget.reducer';

const rootReducer = combineReducers({
  budget: budgetReducer,
});

export default rootReducer;

import budgetActionTypes from './budget.types';

const INITIAL_STATE = {
  data: [],
};

const BudgetReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case budgetActionTypes.ADD_ROW:
      return {
        ...state,
        data: [...state.data, { id: '', label: '', value: 0, key: action.payload }],
      };
    case budgetActionTypes.DELETE_ROW:
      return {
        ...state,
        data: state.data.slice(0, state.data.length - 1),
      };
    case budgetActionTypes.UPDATE_ROW:
      return {
        ...state,
        data: state.data.map((row) => (row.key === action.payload.key ? { ...row, ...action.payload } : row)),
      };
    default:
      return state;
  }
};

export default BudgetReducer;

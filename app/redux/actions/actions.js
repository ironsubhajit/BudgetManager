import * as action_types from './action_types'

export const addBudgetItem = (item) => ({
  type: action_types.ADD_BUDGET_ITEM,
  payload: item,
});

export const updateBudgetItem = (item) => ({
  type: action_types.UPDATE_BUDGET_ITEM,
  payload: item,
});

export const deleteBudgetItem = (itemId) => ({
  type: action_types.DELETE_BUDGET_ITEM,
  payload: itemId,
});

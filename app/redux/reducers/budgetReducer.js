import * as action_types from '../actions/action_types';
import * as InputFieldNames from '../../configs/InputFieldsNames';



// Each Budget item interface: 
// {
//   id: string,
//   ITEM_NAME: string,
//   PREDICTED_AMOUNT: number,
//   ACTUAL_AMOUNT: number
// }


// Mock data
demo_budget_data = [
  {
    "id": 1,
    "ITEM_NAME": "item 01",
    "PREDICTED_AMOUNT": 1000,
    "ACTUAL_AMOUNT": 200
  },
  {
    "id": 2,
    "ITEM_NAME": "item 02",
    "PREDICTED_AMOUNT": 1000,
    "ACTUAL_AMOUNT": 200
  },
  {
    "id": 3,
    "ITEM_NAME": "item 03",
    "PREDICTED_AMOUNT": 1000,
    "ACTUAL_AMOUNT": 200
  },
  {
    "id": 4,
    "ITEM_NAME": "item 04",
    "PREDICTED_AMOUNT": 1000,
    "ACTUAL_AMOUNT": 200
  },
]
// Define initial state
const initialState = {
  budgetItems: [...demo_budget_data],
};

// Reducer function
const budgetReducer = (state = initialState, action) => {
  switch (action.type) {
    case action_types.ADD_BUDGET_ITEM:
      return {
        ...state,
        budgetItems: [...state.budgetItems, action.payload],
      };
    case action_types.UPDATE_BUDGET_ITEM:
      return {
        ...state,
        budgetItems: state.budgetItems.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    case action_types.DELETE_BUDGET_ITEM:
      return {
        ...state,
        budgetItems: state.budgetItems.filter(
          (item) => item.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default budgetReducer;
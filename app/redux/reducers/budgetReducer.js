import * as action_types from '../actions/action_types';



// Each Budget item interface: 
// {
//   id: string,
//   item_name: string,
//   predicted_amount: number,
//   actual_amount: number
// }


// Mock data
demo_budget_data = [
  {
    "id": 1,
    "item_name": "item 01",
    "predicted_amount": 1000,
    "actual_amount": 200
  },
  {
    "id": 2,
    "item_name": "item 02",
    "predicted_amount": 1000,
    "actual_amount": 200
  },
  {
    "id": 3,
    "item_name": "item 03",
    "predicted_amount": 1000,
    "actual_amount": 200
  },
  {
    "id": 4,
    "item_name": "item 04",
    "predicted_amount": 1000,
    "actual_amount": 200
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

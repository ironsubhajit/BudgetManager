import AsyncStorage from "@react-native-async-storage/async-storage";
import * as action_types from "./action_types";

// Function to load data from localstorage to state
const loadBudgetsFromStorage = async () => {
  try {
    const budgetsJson = await AsyncStorage.getItem("budgetItems");
    return budgetsJson ? JSON.parse(budgetsJson) : [];
  } catch (error) {
    console.error("Error loading budget items from local storage:", error);
    return [];
  }
};

// Function to sync state data with local storage
const syncLocalStorageAndStateData = async (budgetItems) => {
  // update localstorage
  console.log("budgetItems ===> ", budgetItems);
  try {
    await AsyncStorage.setItem("budgetItems", JSON.stringify(budgetItems));
  } catch (error) {
    console.error("Error syncing budgetItems to local storage:", error);
  }
};

// Function to reset local storage data
const resetLocalStorage = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.log("Error while clearing local storage: ", error);
  }
  console.log("Localstorage clean done.");
};

// Action to load budget list
export const loadBudgetList = () => {
  return async (dispatch) => {
    const budgetItems = await loadBudgetsFromStorage();
    console.log("Items from storage ===> ", budgetItems);
    dispatch({ type: action_types.GET_ALL_BUDGET, payload: budgetItems });
  };
};

// Action to add budget item
export const addBudgetItem = (item) => {
  return async (dispatch, getState) => {
    dispatch({ type: action_types.ADD_BUDGET_ITEM, payload: item });
    // Get updated state data
    const { budgetItems } = await getState().budgets;
    // Sync data
    syncLocalStorageAndStateData(budgetItems);
  };
};

// Action to update budget item
export const updateBudgetItem = (item) => {
  return async (dispatch, getState) => {
    // Update state data
    dispatch({
      type: action_types.UPDATE_BUDGET_ITEM,
      payload: item,
    });
    // Get updated state data
    const { budgetItems } = await getState()?.budgets;
    // Syncing data
    syncLocalStorageAndStateData(budgetItems);
  };
};

// Action to delete budgetItem
export const deleteBudgetItem = (itemId) => {
  return async(dispatch, getState) => {
    dispatch({
      type: action_types.DELETE_BUDGET_ITEM,
      payload: itemId,
    })
    // Get new state data
    const { budgetItems } = await getState()?.budgets;
    // Syncing data
    syncLocalStorageAndStateData(budgetItems);
  };

};

// Action to clear all data both from localstorage and state
export const resetStorage = () => {
  return async (dispatch) => {
    // reset local storage
    await resetLocalStorage();
    // reset store
    dispatch({ type: action_types.RESET_STATE });
  };
};


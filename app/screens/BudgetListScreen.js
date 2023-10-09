import React from "react";
import {
  Stack,
  Button,
} from "@react-native-material/core";
import {
  StyleSheet,
  ScrollView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import BudgetListItem from "../components/BudgetListItem";
import colors from "../configs/colors";

const BudgetListScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const budgetList = useSelector((state) => state?.budgets?.budgetItems);

  return (
    <>
      {/* List of budgets */}
      <ScrollView>
        {budgetList?.map((budgetItem, index) => (
          <BudgetListItem props={budgetItem} key={index}/>
        ))}
      </ScrollView>
      {/* Add budget button */}
      <Stack style={addButton.container}>
        <Button
          onPress={() => navigation.navigate("AddBudgetScreen")}
          style={addButton.button}
          title="add new budget"
        />
      </Stack>
    </>
  );
};

export default BudgetListScreen;

const addButton = StyleSheet.create({
  button: {
    backgroundColor: colors?.success,
    paddingTop: 10,
    paddingBottom: 10,
  },
  container: {
    position: "absolute",
    backgroundColor: "red",
    bottom: 0,
    width: "100%",
  },
});

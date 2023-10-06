import React, { useState } from "react";
import {
  Stack,
  FAB,
  Switch,
  Button,
  IconButton,
} from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  ScrollView,
} from "react-native";

import BudgetListItem from "../components/BudgetListItem";
import colors from "../configs/colors";

const BudgetListScreen = ({ navigation }) => {


  return (
    <>
      {/* List of budgets */}
      <ScrollView>
        <BudgetListItem
          onClick={() => navigation?.navigate("Details")}
          props={{ item_name: "item 01" }}
        />
        <BudgetListItem props={{ item_name: "item 02" }} />
        <BudgetListItem props={{ item_name: "item 03" }} />
        <BudgetListItem props={{ item_name: "item 03" }} />
        <BudgetListItem props={{ item_name: "item 03" }} />
        <BudgetListItem props={{ item_name: "item 03" }} />
        <BudgetListItem props={{ item_name: "item 03" }} />
        <BudgetListItem props={{ item_name: "item 03" }} />
        <BudgetListItem props={{ item_name: "item 03" }} />
        <BudgetListItem props={{ item_name: "item 03" }} />
        <BudgetListItem props={{ item_name: "item 03" }} />
        <BudgetListItem props={{ item_name: "item 03" }} />
        <BudgetListItem props={{ item_name: "item 03" }} />
        <BudgetListItem props={{ item_name: "item 03" }} />
        <BudgetListItem props={{ item_name: "item 03" }} />
        <BudgetListItem props={{ item_name: "item 03" }} />
        <BudgetListItem props={{ item_name: "item 03" }} />
        <BudgetListItem props={{ item_name: "item 03" }} />
        <BudgetListItem props={{ item_name: "item 03" }} />
        <BudgetListItem props={{ item_name: "item 03" }} />
        <BudgetListItem props={{ item_name: "item 03" }} />
        <BudgetListItem props={{ item_name: "item 03" }} />
        <BudgetListItem props={{ item_name: "item 03" }} />
        <BudgetListItem props={{ item_name: "item 03" }} />
        <BudgetListItem props={{ item_name: "item 03" }} />
        <BudgetListItem props={{ item_name: "item 03" }} />
      </ScrollView>
      {/* Add budget button */}
      <Stack style={addButton.container}>
        <Button
          onPress={() => navigation.navigate("AddBudgetScreen")}
          style={addButton.button}
          title="add budget"
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

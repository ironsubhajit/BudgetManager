import { Button, Stack } from "@react-native-material/core";
import React from "react";
import {
  View,
  StyleSheet,
} from "react-native";

import colors from "../configs/colors";
import { TextInput } from "react-native-paper";

const AddBudgetScreen = ({navigation}) => {

  const saveBudget= () => {
    // Todo: must covert numbers to string for the amounts before save
  }

  return (
    <>
      <View style={inputFieldStyles?.container}>
        <TextInput
          mode="outlined"
          label="Budget Name"
          placeholder="Enter budget item name"
          value=""
          style={inputFieldStyles?.inputField}
          right={<TextInput.Affix text="/100" />}
        />
        <TextInput
          mode="outlined"
          label="Predicted amount"
          placeholder="Predicted budget amount"
          value=""
          style={inputFieldStyles?.inputField}
        />
        <TextInput
          mode="outlined"
          label="Actual amount"
          placeholder="Actual budget amount"
          value=""
          style={inputFieldStyles?.inputField}
        />
      </View>
      <Stack style={addButton.container}>
        <Button
          onPress={() => navigation.navigate("AddBudgetScreen")}
          style={[addButton.button, addButton.saveButton]}
          title="save"
        />
        <Button
          onPress={() => navigation.goBack()}
          style={[addButton.button, addButton.cancelButton]}
          title="Cancel"
        />
      </Stack>
    </>
  );
};

export default AddBudgetScreen;

const inputFieldStyles = StyleSheet.create({
  container: {
    padding: 15,
  },
  inputField: {
    marginBottom: 10,
  },
});

const addButton = StyleSheet.create({
  button: {
    backgroundColor: colors?.success,
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 16,
  },
  cancelButton: {
    backgroundColor: colors?.grey,
    color: colors?.dark,
  },
  saveButton: {
    backgroundColor: colors?.success,
  },
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
});

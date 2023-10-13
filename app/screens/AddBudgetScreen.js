import { Button, Stack } from "@react-native-material/core";
import React from "react";
import { View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { useRoute } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import colors from "../configs/colors";
import * as InptFieldNames from "../configs/InputFieldsNames";
import { addBudgetItem } from "../redux/actions/actions";

const AddBudgetScreen = ({ navigation }) => {
  const route = useRoute();
  // Generate a unique key using uuidv4
  const uniqueKey = uuidv4();

  // Initial state for edit form
  const initialState = {
    id: uniqueKey,
    ITEM_NAME: "",
    PREDICTED_AMOUNT: "",
    ACTUAL_AMOUNT: "",
  };
  const dispatch = useDispatch();
  const [addBudgetForm, setAddBudgetForm] = useState(initialState);

  // Set changed input field value
  const handleInputChange = async (key, text) => {
    setAddBudgetForm({ ...addBudgetForm, [key]: text });
  };

  // Todo: must covert numbers to string for the amounts before save
  const saveBudget = async () => {
    console.log("item saved");
    await dispatch(addBudgetItem(addBudgetForm));
    navigation.goBack();
  };

  return (
    <>
      <View style={inputFieldStyles?.container}>
        <TextInput
          mode="outlined"
          label="Budget Name"
          placeholder="Enter budget item name"
          value={addBudgetForm.ITEM_NAME}
          onChangeText={(text) =>
            handleInputChange(InptFieldNames.ITEM_NAME, text)
          }
          style={inputFieldStyles?.inputField}
        />
        <TextInput
          mode="outlined"
          label="Predicted amount"
          placeholder="Predicted budget amount"
          value={addBudgetForm.PREDICTED_AMOUNT}
          onChangeText={(text) =>
            handleInputChange(InptFieldNames.PREDICTED_AMOUNT, text)
          }
          style={inputFieldStyles?.inputField}
        />
        <TextInput
          mode="outlined"
          label="Actual amount"
          placeholder="Actual budget amount"
          value={addBudgetForm.ACTUAL_AMOUNT}
          onChangeText={(text) =>
            handleInputChange(InptFieldNames.ACTUAL_AMOUNT, text)
          }
          style={inputFieldStyles?.inputField}
        />
      </View>
      <Stack style={addButton.container}>
        <Button
          onPress={saveBudget}
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

import { Button, Stack } from "@react-native-material/core";
import React from "react";
import { View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { useRoute } from "@react-navigation/native";
import { useState } from "react";

import colors from "../configs/colors";
import * as InputFieldNames from "../configs/InputFieldsNames";
import { useDispatch } from "react-redux";
import { updateBudgetItem } from "../redux/actions/actions";

const EditBudgetScreen = ({ navigation }) => {
  const route = useRoute();
  const dispatch = useDispatch();
  // Initial state for edit form
  const initialState = {
    ...route?.params,
  };

  const [editBudgetForm, setEditBudgetForm] = useState(initialState);

  // Set changed input field value
  const handleInputChange = async (key, text) => {
    setEditBudgetForm({ ...editBudgetForm, [key]: text });
  };

  const updateBudgetChanges = async () => {
    console.log("Updated data: ", editBudgetForm);
    await dispatch(updateBudgetItem(editBudgetForm));
    navigation.goBack();
  };

  return (
    <>
      <View style={inputFieldStyles?.container}>
        {/* Item name input */}
        <TextInput
          mode="outlined"
          label="Budget Name"
          name={InputFieldNames.ITEM_NAME}
          placeholder="Enter budget item name"
          value={editBudgetForm?.ITEM_NAME}
          onChangeText={(text) =>
            handleInputChange(InputFieldNames?.ITEM_NAME, text)
          }
          style={inputFieldStyles?.inputField}
        />
        {/* Predicted amount input */}
        <TextInput
          mode="outlined"
          name={InputFieldNames?.PREDICTED_AMOUNT}
          label="Predicted amount"
          placeholder="Predicted budget amount"
          value={editBudgetForm?.PREDICTED_AMOUNT?.toString()}
          onChangeText={(text) =>
            handleInputChange(InputFieldNames?.PREDICTED_AMOUNT, text)
          }
          style={inputFieldStyles?.inputField}
        />
        {/* Actual amount input */}
        <TextInput
          mode="outlined"
          name={InputFieldNames?.ACTUAL_AMOUNT}
          label="Actual amount"
          placeholder="Actual budget amount"
          defaultValue={editBudgetForm?.ACTUAL_AMOUNT?.toString()}
          onChangeText={(text) =>
            handleInputChange(InputFieldNames?.ACTUAL_AMOUNT, text)
          }
          style={inputFieldStyles?.inputField}
        />
      </View>
      <Stack style={actionButton.container}>
        {/* Update Button */}
        <Button
          onPress={updateBudgetChanges}
          style={[actionButton.button, actionButton.saveButton]}
          title="Update"
        />
        {/* Cancel Button */}
        <Button
          onPress={() => navigation.goBack()}
          style={[actionButton.button, actionButton.cancelButton]}
          title="Cancel"
        />
      </Stack>
    </>
  );
};

export default EditBudgetScreen;

const inputFieldStyles = StyleSheet.create({
  container: {
    padding: 15,
  },
  inputField: {
    marginBottom: 10,
  },
});

const actionButton = StyleSheet.create({
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

import React from "react";
import { Stack, Button } from "@react-native-material/core";
import { StyleSheet, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import BudgetListItem from "../components/BudgetListItem";
import colors from "../configs/colors";
import { loadBudgetList, resetStorage } from "../redux/actions/actions";
import { useEffect } from "react";
import { Dialog, Portal, Button as PaperBtn } from "react-native-paper";

const BudgetListScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const budgetList = useSelector((state) => state?.budgets?.budgetItems);

  // Reset modal confirmation state
  const [visible, setVisible] = React.useState(false);
  const hideDialog = () => setVisible(false);
  const resetAllData = async () => {
    hideDialog();
    await dispatch(resetStorage());
  };

  useEffect(() => {
    // Load list from local storage
    dispatch(loadBudgetList());
  }, [dispatch]);

  return (
    <>
      {/* List of budgets */}
      <ScrollView>
        {budgetList?.map((budgetItem, index) => (
          <BudgetListItem props={budgetItem} key={index} />
        ))}
      </ScrollView>
      {/* Add budget button */}
      <Stack style={addButton.container}>
        <Button
          onPress={() => navigation.navigate("AddBudgetScreen")}
          style={addButton.button}
          title="add new budget"
        />
        <Button
          onPress={() => setVisible(true)}
          style={[addButton.button, addButton.deleteBtn]}
          title="Clear data"
        />
      </Stack>
      {/* Delete all data confirmation dialog */}
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Icon icon="alert" />
          <Dialog.Title style={dialogStyles.title}>
            Are you sure, you want to delete all data ?
          </Dialog.Title>
          <Dialog.Actions>
            <PaperBtn
              labelStyle={dialogStyles.cancelBtn}
              onPress={() => hideDialog()}
            >
              Cancel
            </PaperBtn>
            <PaperBtn
              labelStyle={dialogStyles.deleteBtn}
              onPress={() => resetAllData()}
            >
              Confirm
            </PaperBtn>
          </Dialog.Actions>
        </Dialog>
      </Portal>
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
  deleteBtn: {
    backgroundColor: colors?.danger,
  },
});

// Delete confirmation dialog styles
const dialogStyles = StyleSheet.create({
  title: {
    textAlign: "center",
  },
  deleteBtn: {
    color: colors?.danger,
  },
  cancelBtn: {
    color: colors?.grey_02,
  },
});

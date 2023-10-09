import { Button, Stack } from "@react-native-material/core";
import { useRoute } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
import {
  Card,
  Text,
  Dialog,
  Portal,
  Button as PaperBtn,
} from "react-native-paper";

import colors from "../configs/colors";

const BudgetDetailScreen = ({ navigation }) => {
  const route = useRoute();
  const [visible, setVisible] = React.useState(false);

  const hideDialog = () => setVisible(false);

  const deleteItem = () => {
    hideDialog();
    console.log("item deleted !"); // Todo: write delete code here
    navigation.navigate("BudgetListScreen");
  };

  return (
    <>
      <Card style={cardStyles.container}>
        <Card.Content>
          <Text variant="titleLarge">{route.params?.item_name}</Text>
          <Text style={cardStyles.contentField} variant="bodyMedium">
            Predicted Amount: $ {route?.params?.predicted_amount}
          </Text>
          <Text style={cardStyles.contentField} variant="bodyMedium">
            Actual Amount: $ {route?.params?.actual_amount}
          </Text>
        </Card.Content>
      </Card>
      {/* Action buttons */}
      <Stack style={buttonStyle.container}>
        <Button
          onPress={() => navigation.navigate("EditBudgetScreen")}
          style={[buttonStyle.button, buttonStyle.editBtn]}
          title="Edit Budget"
        />
        <Button
          onPress={() => setVisible(true)}
          style={[buttonStyle.button, buttonStyle.deleteBtn]}
          title="Delete"
        />
      </Stack>

      {/* Delete confirmation dialog */}
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Icon icon="alert" />
          <Dialog.Title style={dialogStyles.title}>
            Are you sure to delete {route?.params?.item_name} ?
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
              onPress={() => deleteItem()}
            >
              Confirm
            </PaperBtn>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </>
  );
};

export default BudgetDetailScreen;

// Content card styles
const cardStyles = StyleSheet.create({
  container: {
    margin: 10,
  },
  contentField: {
    paddingVertical: 5,
  },
});

// Action btn styles. eg. delete and edit
const buttonStyle = StyleSheet.create({
  button: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  editBtn: {
    backgroundColor: colors?.primary,
  },
  deleteBtn: {
    backgroundColor: colors?.danger,
  },
  container: {
    position: "absolute",
    backgroundColor: "red",
    bottom: 0,
    width: "100%",
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

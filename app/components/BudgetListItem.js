import React from "react";
import { ListItem } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const BudgetListItem = ({props}) => {
  const handleItemClick = () => {
    console.log('list item clicked', props)
  }
  return (
    <>
      <ListItem
        title={props?.item_name}
        onPress={handleItemClick}
        leading={<Icon name="currency-usd" size={24} />}
        trailing={(props) => <Icon name="chevron-right" {...props} />}
      />
    </>
  );
};

export default BudgetListItem;

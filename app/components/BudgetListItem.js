import React from "react";
import { ListItem } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

const BudgetListItem = ({ props }) => {
  const navigation = useNavigation();
  const handleItemClick = () => {
    console.log("list item clicked", props);
    navigation.navigate('BudgetDetailScreen', {...props});
  };
  return (
    <>
      <ListItem
        title={props?.ITEM_NAME}
        onPress={handleItemClick}
        leading={<Icon name="currency-usd" size={24} />}
        trailing={(props) => <Icon name="chevron-right" {...props} />}
      />
    </>
  );
};

export default BudgetListItem;

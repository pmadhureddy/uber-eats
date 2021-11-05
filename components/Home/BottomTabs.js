import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const BottomTabs = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        marginVertical: 10,
        justifyContent: "space-between",
        marginHorizontal: 30,
      }}
    >
      <Icon icon="home" text="Home" />
      <Icon icon="search" text="Browse" />
      <Icon icon="shopping-bag" text="Grocery" />
      <Icon icon="receipt" text="Orders" />
      <Icon icon="user" text="Account" />
    </View>
  );
};

const Icon = ({ icon, text }) => {
  return (
    <TouchableOpacity>
      <View>
        <FontAwesome5
          name={icon}
          size={25}
          style={{ marginBottom: 3, alignSelf: "center" }}
        />
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({});

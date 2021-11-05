import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Divider } from "react-native-elements";
import About from "../components/RestaurantDetails/About";

const RestaurantDetails = () => {
  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      {/* About */}
      <About />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
    </View>
  );
};

export default RestaurantDetails;

const styles = StyleSheet.create({});

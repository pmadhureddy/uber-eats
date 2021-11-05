import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const title = "Pista house cuisine";
const description = "Pista biiyani is amazing";
const image =
  "https://images.unsplash.com/photo-1452801152883-0c0d3a7d5ee8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80";

const About = () => {
  return (
    <View>
      {/* RestaurantImage */}
      <RestaurantImage image={image} />
      {/* RestaurantName */}
      <RestaurantName name={title} />
      {/* RestaurantDescription */}
      <RestaurantDescription description={description} />
    </View>
  );
};

const RestaurantImage = (props) => {
  return (
    <Image
      source={{ uri: props.image }}
      style={{ width: "100%", height: 180 }}
    />
  );
};

const RestaurantName = (props) => {
  return (
    <Text
      style={{
        fontSize: 29,
        fontWeight: "600",
        marginTop: 10,
        marginHorizontal: 15,
      }}
    >
      {props.name}
    </Text>
  );
};
const RestaurantDescription = (props) => {
  return (
    <Text
      style={{
        marginTop: 10,
        marginHorizontal: 15,
        fontWeight: "400",
        fontSize: 15.5,
      }}
    >
      {props.description}
    </Text>
  );
};

export default About;

const styles = StyleSheet.create({});

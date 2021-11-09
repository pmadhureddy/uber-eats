import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import { useQuery } from "react-query";
import { YELP_API_KEY } from "@env";
import Categories from "../components/Home/Categories";
import HeaderTabs from "../components/Home/HeaderTabs";
import { localRestaurants } from "../components/Home/RestaurantItems";
import RestaurantItems from "../components/Home/RestaurantItems";
import SearchBar from "../components/Home/SearchBar";
import BottomTabs from "../components/Home/BottomTabs";
import { Divider } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";

console.log(YELP_API_KEY);
const restaurantDetails = async (city) => {
  const { data } = await axios.get(
    `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`,
    {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    }
  );
  return data;
};

const Home = ({ navigation }) => {
  const [city, setCity] = useState("San Francisco");
  const [activeTab, setActiveTab] = useState("Delivery");

  const { data, isLoading, isFetching, refetch } = useQuery(
    "getRestaurantData",
    () => restaurantDetails(city),
    {
      select: (data) => {
        const restaurantData = data.businesses.filter((business) =>
          business.transactions.includes(activeTab.toLowerCase())
        );
        return restaurantData;
      },
      refetchOnWindowFocus: false,
    }
  );

  useEffect(() => {
    refetch();
  }, [city, activeTab]);

  return (
    <>
      <SafeAreaView style={styles.AndroidSafeArea}>
        <View style={styles.homeContainer}>
          <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          <SearchBar setCity={setCity} />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Categories />
          <RestaurantItems restaurantData={data} navigation={navigation} />
        </ScrollView>
        <Divider />
        <View style={{ backgroundColor: "#fff" }}>
          <BottomTabs />
        </View>
        {isLoading || isFetching ? (
          <View
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ActivityIndicator size="large" color="#00ff00" />
          </View>
        ) : null}
      </SafeAreaView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "gray",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  homeContainer: {
    backgroundColor: "white",
    padding: 10,
  },
});

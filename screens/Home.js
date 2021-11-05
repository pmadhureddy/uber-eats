import axios from "axios";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, StyleSheet, View } from "react-native";
import { useQuery } from "react-query";
import { YELP_API_KEY } from "@env";
import Categories from "../components/Home/Categories";
import HeaderTabs from "../components/Home/HeaderTabs";
import { localRestaurants } from "../components/Home/RestaurantItems";
import RestaurantItems from "../components/Home/RestaurantItems";
import SearchBar from "../components/Home/SearchBar";
import BottomTabs from "../components/Home/BottomTabs";
import { Divider } from "react-native-elements";

console.log(YELP_API_KEY);
const restaurantDetails = async () => {
  const { data } = await axios.get(
    `https://api.yelp.com/v3/businesses/search?term=restaurants&location=Hollywood`,
    {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    }
  );
  return data;
};

const Home = () => {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState("");
  const [activeTab, setActiveTab] = useState("Delivery");

  const { data, isLoading, refetch } = useQuery(
    "getRestaurantData",
    restaurantDetails,
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
  }, [activeTab]);

  return (
    <>
      {isLoading ? (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
          }}
        >
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      ) : (
        <>
          <View style={styles.homeContainer}>
            <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
            <SearchBar />
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Categories />
            <RestaurantItems restaurantData={data} />
          </ScrollView>
          <Divider />
          <View style={{ backgroundColor: "#fff" }}>
            <BottomTabs />
          </View>
        </>
      )}
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: "white",
    padding: 10,
  },
});

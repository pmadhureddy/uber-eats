import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_PLACES_API_KEY } from "@env";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

const SearchBar = ({ setCity }) => {
  const [searchedCity, setSearchedCity] = useState("");
  return (
    <View style={{ marginTop: 15, flexDirection: "row" }}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        query={{
          key: GOOGLE_PLACES_API_KEY,
          language: "en",
        }}
        textInputProps={{
          onChangeText: (text) => {
            setSearchedCity(text);
          },
          autoCapitalize: "none",
          autoCorrect: false,
        }}
        onPress={(data, details = null) => {
          console.log(data.description);
          const city = data.description.split(",")[0];
          setSearchedCity(city);
        }}
        styles={{
          textInput: {
            backgroundColor: "#eee",
            marginTop: 10,
            borderRadius: 20,
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
          },
        }}
        renderLeftButton={() => (
          <View style={{ marginLeft: 10 }}>
            <Ionicons name="location-sharp" size={24} />
          </View>
        )}
        renderRightButton={() => (
          <TouchableOpacity
            style={{
              flexDirection: "row",
              marginRight: 8,
              backgroundColor: "#fff",
              padding: 9,
              borderRadius: 30,
              alignItems: "center",
            }}
            onPress={() => {
              setCity(searchedCity);
            }}
          >
            <AntDesign
              name="clockcircle"
              size={11}
              style={{ marginRight: 6 }}
            />
            <Text>Search</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  textInputContainer: {
    backgroundColor: "#eee",
    borderRadius: 50,
  },
  textInput: {
    height: 38,
    color: "#5d5d5d",
    fontSize: 16,
  },
});

import React, { useState } from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const HeaderTabs = ({ activeTab, setActiveTab }) => {
  return (
    <View style={styles.headerTabsContainer}>
      <HeaderButton
        text="Delivery"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        text="Pickup"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
};

const HeaderButton = ({ text, activeTab, setActiveTab }) => {
  return (
    <TouchableOpacity
      style={[
        styles.headerButtonContainer,
        { backgroundColor: activeTab === text ? "black" : "white" },
      ]}
      onPress={() => setActiveTab(text)}
    >
      <Text
        style={[
          styles.headerButtonText,
          { color: activeTab === text ? "white" : "black" },
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default HeaderTabs;

const styles = StyleSheet.create({
  headerTabsContainer: {
    flexDirection: "row",
    alignSelf: "center",
  },
  headerButtonContainer: {
    borderRadius: 30,
    paddingVertical: 6,
    paddingHorizontal: 16,
    marginRight: 2,
  },
  headerButtonText: {
    fontSize: 15,
    fontWeight: "900",
  },
});

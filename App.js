import * as React from "react";
import { View, Text, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import Home from "./screens/Home";
import RestaurantDetails from "./screens/RestaurantDetails";

export default function App() {
  // Create a client
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={styles.AndroidSafeArea}>
        <Home />
        {/* <RestaurantDetails /> */}
      </SafeAreaView>
    </QueryClientProvider>
  );
}

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

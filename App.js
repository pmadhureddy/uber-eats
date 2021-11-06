import * as React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import RootNavigation from "./navigation";

export default function App() {
  // Create a client
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <RootNavigation />
    </QueryClientProvider>
  );
}

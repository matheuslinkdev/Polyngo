import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme";
import { AuthProvider } from "./Context/AuthContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>{children}</AuthProvider>
    </ChakraProvider>
  );
}

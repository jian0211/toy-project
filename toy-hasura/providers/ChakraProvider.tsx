"use client";

import { ChakraProvider as _ChakraProvider } from "@chakra-ui/react";

export function ChakraProvider({ children }: { children: React.ReactNode }) {
  return <_ChakraProvider>{children}</_ChakraProvider>;
}

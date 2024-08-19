"use client";

import { ChakraProvider as _ChakraProvider } from "@chakra-ui/react";

export function ChakraProvider({ children }: React.PropsWithChildren) {
  return <_ChakraProvider>{children}</_ChakraProvider>;
}

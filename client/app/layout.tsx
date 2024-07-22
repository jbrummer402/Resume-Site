"use client";
import "bootstrap/dist/css/bootstrap.css";

import { ChakraProvider } from "@chakra-ui/react";
import { Analytics } from "@vercel/analytics/react";
import NavBar from "../components/Nav_Components/NavBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ display: "inline-block" }}>
        <ChakraProvider>
          <NavBar />
          <Analytics />
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}

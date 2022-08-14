import type { MetaFunction } from "@remix-run/node";
import { Box, ChakraProvider } from '@chakra-ui/react';
import theme from "~/theme"
import Nav from "~/components/Nav"
import Footer from "~/components/Footer"
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Brenda González Ortega",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <ChakraProvider theme={theme}>
          <Box bgImage='https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/garden%2Fpatron_1.svg?alt=media&token=9102da54-4ff1-42a8-b1c3-25c03ca6f2a9'
            backgroundSize='contain'
          >
            <Nav />
            <Outlet />
            <Footer />
          </Box>
        </ChakraProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

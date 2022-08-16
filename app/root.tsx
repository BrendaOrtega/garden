import type { MetaFunction } from "@remix-run/node";
import { Box, ChakraProvider, useColorMode, useColorModeValue } from '@chakra-ui/react';
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
  title: "Brenda González Ortega | Product & UX Designer",
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
          <Main />
        </ChakraProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

const Main = () => {
  const bgImage = useColorModeValue('/images/patron_3.svg', '/images/patron-dark.svg')
  return (
    <Box bgImage={bgImage}
      backgroundSize='contain'
    >
      <Nav />
      <Outlet />
      <Footer />
    </Box>
  )
}

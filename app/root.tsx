import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Box,
  ChakraProvider,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import theme from "~/theme";
import tailwindcss from "./styles/style.css";
import Nav from "~/components/Nav";
import Footer from "~/components/Footer";
import useGoogleTM from "./utils/hooks/useGoogleTM";
import useHotjar from "./utils/hooks/useHotjar";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { useEffect } from "react";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Brenda González Ortega | Product & UX Designer",
  description:
    "Hello, I'm Brenda. I'm a Product & UX Consultant based in México. I enjoy creating user-centric experiences.  ",
  viewport: "width=device-width,initial-scale=1",
  "og:image": "https://i.imgur.com/DIp1Xzf.png",
  "og:description":
    "Hello, I'm Brenda. I'm a Product & UX Consultant based in México. I enjoy creating user-centric experiences.  ",
  "og:title": "Brenda González Ortega | Product & UX Designer",
  "twitter:image": "https://i.imgur.com/DIp1Xzf.png",
  "twitter:card": "summary",
  "twitter:description":
    "Hello, I'm Brenda. I'm a Product & UX Consultant based in México. I enjoy creating user-centric experiences.  ",
  "twitter:title": "Brenda González Ortega | Product & UX Designer",
  "twitter:url": "https://www.brendago.design/",
});

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwindcss },
];
export default function App() {
  useGoogleTM();
  useHotjar();

  return (
    <html lang="en">
      <head>
        <link href="/styles/main.css" rel="stylesheet" />
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
  const { colorMode, toggleColorMode } = useColorMode();
  useEffect(() => {
    if (colorMode === "light") {
      toggleColorMode();
    }
  }, []);
  return (
    <section className="dark bg-stars">
      <Nav />
      <Outlet />
      <Footer />
    </section>
  );
};

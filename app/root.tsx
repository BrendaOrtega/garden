import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Box, ChakraProvider, useColorModeValue } from "@chakra-ui/react";
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

  //   useEffect(() => {
  //     // feedbug
  //     const script = document.createElement('script');
  //     script.innerText = `
  // var s = document.createElement('script');
  //  s.async = "true";
  //  s.defer ="true";
  //  s.src="https://feedbug.fly.dev/feedBug.js";
  //  window.feedbugApiKey = "642b9c7da52ed3da53e9b784";
  //  window.document.head.appendChild(s);
  // `;
  //     document.body.appendChild(script); // @TODO: FEEDBUG TESTING <===================================
  //   }, [])

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
  const bgImage = useColorModeValue(
    "/images/patron_3.svg",
    "/assets/stars.png"
  );
  return (
    <Box bgImage={bgImage} backgroundSize="contain" className="dark">
      <Nav />
      <Outlet />
      <Footer />
    </Box>
  );
};

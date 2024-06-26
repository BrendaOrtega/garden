import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme(
  {
    initialColorMode: extendTheme({ config }),
    styles: {
      global: (props) => ({
        // styles for the `body`
        body: {
          bg: props.colorMode === "light" ? "black" : "black",
        },

        p: {
          _selection: {
            background: "#FFF2C8",
            color: "blue",
          },
        },
        h2: {
          _selection: {
            background: "#FFF2C8",
            color: "blue",
          },
        },

        // styles for the `a`  from remix
        // a: {
        //     color: '#4D5562',
        //     _hover: {
        //         color: 'rgba(77,85,98,.7)'
        //     }
        // }
      }),
    },
    fonts: {
      body: "Avenir",
      heading: "Proxima Nova",
      mono: "Menlo, monospace",
    },

    components: {
      Button: {
        variants: {
          filter: {
            w: "100%",
            p: "8px",
            alignItems: "center",
            gap: "4px",
            display: "flex",
            justifyContent: "flex-start",
            _hover: { bg: "second.50" },
            _focus: { border: "none" },
          },
          ghost: {},
        },
      },
      Link: {
        baseStyle: {
          _hover: {
            textDecoration: "none",
          },
        },
      },
    },

    breakpoints: {
      sm: "30em",
      md: "48em",
      lg: "62em",
      xl: "80em",
      "2xl": "110em",
    },

    fontSizes: {
      xs: "10px",
      sm: "14px",
      md: "16px",
      lg: "18px",
      xl: "20px",
      "2xl": "24px",
      "3xl": "32px",
      "4xl": "36px",
      "5xl": "48px",
      "6xl": "64px",
      "7xl": "80px",
      "8xl": "6rem",
      "9xl": "8rem",
    },

    semanticTokens: {
      colors: {
        text: {
          default: "second.500",
          _dark: "second.500",
        },
        title: {
          default: "gray.50",
          _dark: "gray.50",
        },
        tooltip: {
          defauk: "second.400",
          _dark: "second.400",
        },
      },
    },
    colors: {
      white: "#ffffff",
      transparent: "transparent",
      black: "#0E0E11",
      blue: "#121620",
      secondary: "#4966F6",
      gray: {
        100: "#F1F2F6",
        200: "#F1F2F6",
        500: "#A3A8B0",
        800: "#4D5562",
        900: "#12141D",
      },
      second: {
        50: "#E9EDF6",
        100: "#E0E7F7",
        400: "#BBC3D1",
        500: "#A1A8BB",
        600: "#1F222A",
        700: "#373C50",
        800: "#1D2130",
        900: "#141823",
      },
      brand: {
        50: "#f7de93",
        100: "#f5d981",
        200: "#f4d36f",
        300: "#f3ce5d",
        400: "#4966f6",
        500: "#f2c94c",
        600: "#d9b444",
        700: "#c1a03c",
        800: "#c1a03c",
        900: "#91782d",
      },
    },
    sizes: {
      container: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1240px",
        xxl: "1440px",
      },
    },
  },
  withDefaultColorScheme({
    colorScheme: "brand",
    components: ["Button:filter"],
  })
);

export default theme;

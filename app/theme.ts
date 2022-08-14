import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react"
import { mode } from '@chakra-ui/theme-tools'



const theme = extendTheme({
    styles: {
        global: (props) => ({
            // styles for the `body`
            body: {
                bg: props.colorMode === 'light' ? 'white' : 'black',
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
                'filter': {
                    w: '100%',
                    p: '8px',
                    alignItems: 'center',
                    gap: '4px',
                    display: 'flex',
                    justifyContent: 'flex-start',
                    _hover: { bg: 'secondary.50' },
                    _focus: { border: 'none' },
                },
                'ghost': {

                }
            }
        },
        Link: {
            baseStyle: {
                _hover: {
                    textDecoration: 'none'
                }
            },

        },

    },

    breakpoints: {
        sm: '30em',
        md: '48em',
        lg: '62em',
        xl: '80em',
        '2xl': '110em',
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
                default: '#4D5562',
                _dark: '#A3A8B0',
            },
            title: {
                default: 'black',
                _dark: 'gray.100',
            }
        },
    },
    colors: {
        white: '#ffffff',
        tooltip: '#BBC3D1',
        transparent: 'transparent',
        black: '#0B0E18',
        blue: '#121620',
        secondary: "#4966F6",
        gray: {
            100: '#F1F2F6',
            200: '#F1F2F6',
            500: '#A3A8B0',
            800: '#4D5562',
            900: '#1C1F25',
        },
        secondary: {
            50: '#E9EDF6',
            100: '#E0E7F7',
            900: "#373C50"
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
            900: "#91782d"
        },
    },
    sizes: {
        container: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1240px',
            xxl: '1440px',
        },
    },

},
    withDefaultColorScheme({
        colorScheme: 'brand',
        components: ['Button:filter'],
    }),
)

export default theme;
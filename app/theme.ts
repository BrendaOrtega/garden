import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react"



const theme = extendTheme({
    styles: {
        global: {
            // styles for the `body`
            body: {
                bg: 'gray.100',
                color: 'black',
            },
            // styles for the `a`  from remix
            // a: {
            //     color: '#4D5562',
            //     _hover: {
            //         color: 'rgba(77,85,98,.7)'
            //     }
            // }
        },
    },
    fonts: {
        body: "Avenir",
        heading: "Georgia, serif",
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
                    _hover: { bg: 'gray.200' },
                    _focus: { border: 'none' },
                },
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

    semanticTokens: {
        colors: {
            text: {
                default: '#4D5562',
                _dark: '#A3A8B0',
            },
        },
    },

    colors: {
        tooltip: '#BBC3D1',
        transparent: 'transparent',
        black: '#15191E',
        gray: {
            100: '#fbfbfb',
            200: '#F1F2F6',
            500: '#A3A8B0',
            800: '#4D5562',
            900: '#1C1F25',
        },
        brand: {
            50: "#dae0fd",
            100: "#91a3f9",
            200: "#6d84f7",
            300: "#5b75f6",
            400: "#4966f6",
            500: "#415bdd",
            600: "#3a51c4",
            700: "#3347ac",
            800: "#2b3d93",
            900: "#24337b"
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
        components: ['Button'],
    }),
)

export default theme;
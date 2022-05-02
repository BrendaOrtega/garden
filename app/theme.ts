import { extendTheme } from "@chakra-ui/react"



const theme = extendTheme({
    fonts: {
        body: "system-ui, sans-serif",
        heading: "Georgia, serif",
        mono: "Menlo, monospace",
    },
    Button: {
        variants: {
            ghost: {
                _hover: {
                    bg: "gray.200"
                }
            }
        }
    },
    breakpoints: {
        sm: '30em',
        md: '48em',
        lg: '62em',
        xl: '80em',
        '2xl': '110em',
    },

    colors: {
        text: '#3F4F6A',
        tooltip: '#BBC3D1',
        transparent: 'transparent',
        black: '#07182B',
        brand: {
            100: "#f7fafc",
            // ...
            900: "#1a202c",
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
    }
})

export default theme;
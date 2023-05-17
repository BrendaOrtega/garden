import { Flex, Heading, Text, Box, Image, useColorModeValue } from "@chakra-ui/react"
import { Link } from "@remix-run/react"
import Layout from "~/components/Layout"
import styles from "~/styles/about.css"

export function links() {
    return [{ rel: "stylesheet", href: styles }];
}

export default function About() {
    return (
        <Layout
            body={<Body />}
        >
        </Layout>
    )
}

const Body = () => {
    return <>
        <Flex
            paddingBottom={{ base: '0', lg: '10' }}
            flexWrap={["wrap", "wrap", "nowrap"]}
            justifyContent='center'
            alignItems='center'
            pt='10'
            gap={{ base: '48px', md: 'none' }}
        >
            <Box
                w={{ base: "100%", lg: '50%' }}
                h={{ base: "auto", lg: 'auto' }}
                paddingRight={{ base: '0', lg: '20' }}
                pt={{ base: '10', lg: '0px' }}
            >
                <Image w='100px' src='/images/yarn.png' />
                <Heading fontSize={{ base: '4xl', lg: '5xl' }} marginY={4} lineHeight="base" color='title'>
                    About me
                </Heading>
                <Text color="text" fontSize={{ base: 'xl', lg: '2xl' }}>
                    I’m Brenda, I am Product & UX Designer. I’ve been working on web and mobile applications for 8 years and I absolutely love what I do.
                    <br />  <br />
                    I studied economics, when i fall in love with technology. I learned software development for the curiosity of knowing how things work an now I am passionate about User Center Design.

                </Text>
                <Text color="text" mt={{ base: '6', lg: '48px' }} mb={{ base: '2', lg: '16px' }} fontSize={{ base: 'md', lg: 'xl' }}> Shall we start working together?</Text>
                <Flex>

                    <a href="mailto:brenda@fixter.org" aria-label="Mail" rel="noopener noreferrer">
                        <Text color='text' fontSize={{ base: 'md', lg: 'lg' }}> ✉️ Write me </Text>
                    </a>
                    <hr style={{ backgroundColor: '#A3A8B0', width: '1px', height: '24px', margin: '0 8px' }} />
                    <a href="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/garden%2FBrenda_CV.pdf?alt=media&token=51703c24-aced-42e5-8de0-52048a02e031" target='_blank'>
                        <Text color='text' fontSize={{ base: 'md', lg: 'lg' }}> 📝 Download my CV </Text>
                    </a>
                </Flex>
            </Box>
            <Box w={{ base: "100%", lg: '50%' }} h={{ base: "auto", lg: '65vh' }} >
                <a href='https://www.linkedin.com/in/brendago/' target="_blank" rel="noopener noreferrer" style={{ width: '100%' }}>
                    <Image
                        transition='all .5s ease'
                        _hover={{ transform: 'translateY(-8px)', boxShadow: useColorModeValue('rgb(204 204 204 / 80%) 0px 8px 32px 0px', 'box-shadow: 0px 8px 32px 0px rgba(0, 0, 0, 1)') }}
                        h={{ base: "auto", lg: '65vh' }}
                        width={{ base: '100%', md: '90%' }}
                        ml={{ base: '0px', md: '5%' }}
                        borderRadius='2xl'
                        objectFit="cover"
                        alt='brendas profile photo'
                        src="https://i.imgur.com/eDktKC9.png" />
                </a>
            </Box>
        </Flex>
    </>
}

const twitter = "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/external%2Ftwitter-blue.svg?alt=media&token=24dcc7cc-1de7-461d-8ab1-8f1fd9a63d26"
const linkedin = "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/external%2Fin-blue.svg?alt=media&token=86cad868-5f6d-471c-b4fd-e35e389b797a"
const instagram = "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/external%2Finsta-blue.svg?alt=media&token=60b894e4-a5cc-4eed-b692-aba9496349a9"
const behance = "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/external%2Fbe-blue.svg?alt=media&token=162cb60e-4cd6-4dd3-8735-fa0551538cd8"

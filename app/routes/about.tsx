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
            pt='60px'
        >
            <Box
                w={{ base: "100%", lg: '50%' }}
                h={{ base: "auto", lg: '65vh' }}
                paddingRight={{ base: '0', lg: '20' }}
                pt={{ base: '10', lg: '0px' }}
            >
                <Image w='100px' src='/images/yarn.png' />
                <Heading fontSize={{ base: '4xl', lg: '5xl' }} marginY={4} lineHeight="base" color='title'>
                    About me
                </Heading>
                <Text color="text" fontSize={{ base: 'xl', lg: '2xl' }}>
                    I’m Brenda, I am Product & UX Designer. I’ve been working on web and mobile applications for 6 years and I absolutely love what I do.
                    <br />
                    I studied economics, when i fall in love with technology. I learned software development for the curiosity of knowing how things work, I am currently passionate about User Center Design.
                </Text>
                <Flex my={{ base: '6', lg: '48px' }}>
                    <a href="mailto:brenda@fixter.org" aria-label="Mail" rel="noopener noreferrer">
                        <Text color='text' fontSize={{ base: 'md', lg: 'xl' }}> ✉️ Write me </Text>
                    </a>
                    <hr style={{ backgroundColor: '#A3A8B0', width: '1px', height: '24px', margin: '0 8px' }} />
                    <a href="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/garden%2FBrenda%20Gonzalez_Product%20Designer.pdf?alt=media&token=5e77f3f8-144a-48c0-93fc-e48211d5f119" target='_blank'>
                        <Text color='text' fontSize={{ base: 'md', lg: 'xl' }}> 📝 Download my CV </Text>
                    </a>
                </Flex>
            </Box>
            <Box w={{ base: "100%", lg: '50%' }} h={{ base: "auto", lg: '65vh' }}>
                <a href='https://www.linkedin.com/in/brendago/' target="_blank" rel="noopener noreferrer" style={{ width: '100%' }}>
                    <Image
                        transition='all .5s ease'
                        _hover={{ transform: 'translateY(-8px)', boxShadow: useColorModeValue('rgb(204 204 204 / 80%) 0px 8px 32px 0px', 'box-shadow: 0px 8px 32px 0px rgba(0, 0, 0, 1)') }}
                        h={{ base: "auto", lg: '65vh' }}
                        borderRadius='2xl'
                        objectFit="cover"
                        alt='brendas profile photo'
                        src="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/garden%2F290392402_1155660754995788_4128669087143201483_n.jpg?alt=media&token=80873c39-44cb-4177-b216-6eef6a5d3f42" />

                </a>
            </Box>
        </Flex>
    </>
}

const twitter = "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/external%2Ftwitter-blue.svg?alt=media&token=24dcc7cc-1de7-461d-8ab1-8f1fd9a63d26"
const linkedin = "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/external%2Fin-blue.svg?alt=media&token=86cad868-5f6d-471c-b4fd-e35e389b797a"
const instagram = "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/external%2Finsta-blue.svg?alt=media&token=60b894e4-a5cc-4eed-b692-aba9496349a9"
const behance = "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/external%2Fbe-blue.svg?alt=media&token=162cb60e-4cd6-4dd3-8735-fa0551538cd8"

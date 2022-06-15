import { Flex, Heading, Text, Box, Image } from "@chakra-ui/react"
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
            footer={<Footer />}
        >

        </Layout>
    )
}
const image = "https://scontent.fmex31-1.fna.fbcdn.net/v/t39.30808-6/254934065_4471923606236326_1885709296426766927_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFQICTOxB6l-acGH4PBEjPvsi2QBvL3SUGyLZAG8vdJQaY0R0t-KV3DqN4LVziHBxK-yH2ByEGQQbzgk0gWakVr&_nc_ohc=biJO9U-jR48AX-19rCR&_nc_ht=scontent.fmex31-1.fna&oh=00_AT9xKqN_AjFZq5WvmGTboZgIjTKxaG9Gn9JoTmSEdiEyaQ&oe=62AA9EB0"
const michi = "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/external%2Fmichi.svg?alt=media&token=faed25c9-c1df-4e3b-9954-e48a72a76984"

const Body = () => {
    return <>
        <Flex
            paddingBottom={10}
        >
            <Box
                w="50%"
                h="65vh"
                paddingRight={20}
            >
                {/* <Image src={michi} alt="cat driking coffe" /> */}
                <Heading size="4xl">
                    🐝
                </Heading>
                <Heading size="2xl" marginY={4} lineHeight="base">
                    About me
                </Heading>
                <Text color="text" fontSize="2xl">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis omnis ex accusamus ea a veniam modi aliquid laboriosam. Quas voluptatum aut harum unde ad quis qui iusto, aliquid quos consequuntur.
                    <br />
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores nulla laborum sapiente porro ipsa aliquam dolorum facere impedit magni laboriosam, ullam quos fugiat est ipsam sint hic ea, omnis maxime.
                </Text>
                <Flex my='48px'>
                    <a href="mailto:bremin11.20.93@gmail.com" aria-label="Mail" rel="noopener noreferrer">
                        <Text color='text' fontSize="xl">  ✉️ Write me </Text>
                    </a>
                    <hr style={{ backgroundColor: '#A3A8B0', width: '1px', height: '24px', margin: '0 8px' }} />
                    <Text color='text' fontSize="xl"> 📝 Download my CV </Text>
                </Flex>
            </Box>
            <Image
                w="50%"
                h="65vh"
                borderRadius='lg'
                objectFit={"cover"}
                src={image} alt="brenda's profile photo" />
        </Flex>
    </>
}

const twitter = "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/external%2Ftwitter-blue.svg?alt=media&token=24dcc7cc-1de7-461d-8ab1-8f1fd9a63d26"
const linkedin = "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/external%2Fin-blue.svg?alt=media&token=86cad868-5f6d-471c-b4fd-e35e389b797a"
const instagram = "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/external%2Finsta-blue.svg?alt=media&token=60b894e4-a5cc-4eed-b692-aba9496349a9"
const behance = "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/external%2Fbe-blue.svg?alt=media&token=162cb60e-4cd6-4dd3-8735-fa0551538cd8"

const Footer = () => {
    return (
        <Box
            opacity={".6"}
            marginTop={20}
            w={'100vw'}
            textAlign={"center"}
        >

            <Flex
                justifyContent={"center"}
            >
                <a href="/https://twitter.com/brendaojs" target="_blank" rel="noopener noreferrer" >
                    <Image src={twitter} w="24px" marginX={2} alt="twitter logo blue" />
                </a>
                <a href="https://www.linkedin.com/in/brenda-ort/" target="_blank" rel="noopener noreferrer" >
                    <Image src={linkedin} w="24px" marginX={2} alt="linkedin logo blue" />
                </a>
                <a href="https://www.instagram.com/brenda_orteg/" target="_blank" rel="noopener noreferrer" >
                    <Image src={instagram} w="24px" marginX={2} alt="instagram logo blue" />
                </a>
                <a href="https://www.behance.net/bremin112093" target="_blank" rel="noopener noreferrer" >
                    <Image src={behance} w="28px" marginX={2} alt="behance logo blue" />
                </a>
            </Flex>
            <Text color="text" marginTop={4}>© 2022 Brenda González Ortega - All rights reserved.</Text>
        </Box >
    )
}
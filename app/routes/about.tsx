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
const image = "https://scontent.fmex27-1.fna.fbcdn.net/v/t39.30808-6/271243862_4679889645439720_5871205983227558537_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeHewxSbR56ZFA3pUNORZnF7WqnmTUuRz1ZaqeZNS5HPVu_hoIPtumX5O94_tSQwd0eHaYUddBfIuJvdQGFGyYu6&_nc_ohc=8Tr0OaHJor8AX9I5994&_nc_ht=scontent.fmex27-1.fna&oh=00_AT_gkU53i73Je600QVWr_6yAu2i1FtF8VWa5xy6KJfg_jg&oe=6271D8A8"
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
import { Flex, Heading, Text, Box, Image, Skeleton } from "@chakra-ui/react"
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
const michi = "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/external%2Fmichi.svg?alt=media&token=faed25c9-c1df-4e3b-9954-e48a72a76984"

const Body = () => {
    return <>
        <Flex
            paddingBottom={{ base: '0', lg: '10' }}
            flexWrap={["wrap", "wrap", "nowrap"]}
            flexDirection={{ base: 'column-reverse', lg: 'inherit' }}
            justifyContent='center'
            pt='60px'
        >
            <Box
                w={{ base: "100%", lg: '50%' }}
                h={{ base: "auto", lg: '65vh' }}
                paddingRight={{ base: '0', lg: '20' }}
                pt={{ base: '10', lg: '0px' }}
            >
                <Heading fontSize="6xl" >
                    🐝
                </Heading>
                <Heading fontSize={{ base: '4xl', lg: '5xl' }} marginY={4} lineHeight="base">
                    About me
                </Heading>
                <Text color="text" fontSize={{ base: 'xl', lg: '2xl' }}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis omnis ex accusamus ea a veniam modi aliquid laboriosam. Quas voluptatum aut harum unde ad quis qui iusto, aliquid quos consequuntur.
                    <br />
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores nulla laborum sapiente porro ipsa aliquam dolorum facere impedit magni laboriosam, ullam quos fugiat est ipsam sint hic ea, omnis maxime.
                </Text>
                <Flex my={{ base: '6', lg: '48px' }}>
                    <a href="mailto:brenda@fixter.org" aria-label="Mail" rel="noopener noreferrer">
                        <Text color='text' fontSize={{ base: 'md', lg: 'xl' }}> ✉️ Write me </Text>
                    </a>
                    <hr style={{ backgroundColor: '#A3A8B0', width: '1px', height: '24px', margin: '0 8px' }} />
                    <a href="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/garden%2FProductDesigner_Brenda%20Gonzalez.pdf?alt=media&token=3a199ddc-1de1-4cf9-a9e4-efd4bb300d74" target='_blank'>
                        <Text color='text' fontSize={{ base: 'md', lg: 'xl' }}> 📝 Download my CV </Text>
                    </a>
                </Flex>
            </Box>
            <Image
                w={{ base: "100%", lg: '50%' }}
                h={{ base: "auto", lg: '65vh' }}
                borderRadius='lg'
                objectFit="cover"
                src="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/garden%2F290392402_1155660754995788_4128669087143201483_n.jpg?alt=media&token=80873c39-44cb-4177-b216-6eef6a5d3f42" alt="brenda's profile photo" />
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
import { Text, Flex, Image, Box } from "@chakra-ui/react";

const twitter = "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/external%2Ftwitter-blue.svg?alt=media&token=24dcc7cc-1de7-461d-8ab1-8f1fd9a63d26"
const linkedin = "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/external%2Fin-blue.svg?alt=media&token=86cad868-5f6d-471c-b4fd-e35e389b797a"
const instagram = "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/external%2Finsta-blue.svg?alt=media&token=60b894e4-a5cc-4eed-b692-aba9496349a9"
const behance = "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/external%2Fbe-blue.svg?alt=media&token=162cb60e-4cd6-4dd3-8735-fa0551538cd8"


export default function Footer() {
    return (
        <Box
            opacity={".6"}
            w={'100vw'}
            textAlign={"center"}
            py={{ base: '40px', lg: '80px' }}
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


import { Flex, Heading, Text, Box, Image, Container, VStack, Button } from "@chakra-ui/react"
import { Link, Links } from "@remix-run/react"
import Layout from "~/components/Layout"

export default function blogList() {
    return (
        <>
            <Container
                maxW={"container.xxl"}
                py={40}
                px={20}>
                <Heading textAlign='center'>
                    My best recommendations on ux resources
                </Heading>
                <Flex>
                    <Box>
                        <Cathegories />
                    </Box>
                    <Box>
                        <Card
                            image='https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/garden%2Ficons8-open-book-emoji.svg?alt=media&token=66a821e7-d1ea-4971-b146-de62ff8818ec'
                            description='Lorem'
                            link='https://www.fixtergeek.com.ms'
                        />
                    </Box>
                </Flex>
            </Container>
        </>
    )
}


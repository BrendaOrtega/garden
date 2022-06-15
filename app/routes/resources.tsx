import { Flex, Heading, Text, Box, Image, Container, VStack, Button } from "@chakra-ui/react"
import { Link, Links } from "@remix-run/react"
import Layout from "~/components/Layout"

export default function Resources() {
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



const Cathegories = () => {
    return (
        <VStack
            w='220px'
            align='stretch'
            marginTop={20}
            borderRight='2px solid rgba(77,85,98,.2)'
            paddingRight={4}
        >
            <Type
                text="Libros"
                icon="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/garden%2Ficons8-open-book-emoji.svg?alt=media&token=66a821e7-d1ea-4971-b146-de62ff8818ec"
            />
            <Type
                text="Cursos"
                icon="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/garden%2Ficons8-movie-camera.svg?alt=media&token=3a2f5203-947d-49e2-a143-b584f1dcef72"
            />
            <Type
                text="Papers"
                icon="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/garden%2Ficons8-bookmark-tabs.svg?alt=media&token=07ad2996-2b64-499c-8e73-8b62dc45e935"
            />
            <Type
                text="Blogs"
                icon="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/garden%2Ficons8-card-index.svg?alt=media&token=e1232955-48da-4d22-8572-252d018ff0f1"
            />

        </VStack >
    )
}

const Type = ({ icon, text }) => {
    return (
        <Button variant='filter'
        >
            <Image w={8} h={8} src={icon} alt='cathegory icon' objectFit={"cover"} />
            <Text>{text}</Text>
        </Button>
    )
}

const Card = ({ image, description, link }) => {
    return (
        <Flex>
            <Image src={image} />
            <Text>{description}</Text>
            <a href={link}>
                Ver más
            </a>
        </Flex>
    )
}
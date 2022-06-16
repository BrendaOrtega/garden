
import { Text, Container, Flex, Link as Anchor, Image, Box, Button } from "@chakra-ui/react";
import { Link, Links } from "@remix-run/react";

const logo = "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/external%2Fmichis.svg?alt=media&token=2bbd2928-0306-4475-919a-aea70c84f250"

export default function Nav() {
    return (
        <Container
            maxW={"container.xl"}
            px={6}
            bg='white'
            borderRadius='40px'
            h={20}
            marginTop={8}
        >
            <Flex
                h='100%'
                alignItems='center'
                justifyContent="space-between"
            >

                <Link to="/">
                    <Anchor >
                        <Flex alignItems='center'>
                            <Image src='/images/michis.svg' h="36px" alt="Brenda's logo" marginRight={4} />
                            <Text>Brenda González Ortega</Text>
                        </Flex>
                    </Anchor>
                </Link>
                <Flex gap={8}>
                    <Link to="/about">
                        <Box h={10} _hover={{ bg: 'rgba(163,168,176,.2)' }} px={4} display='flex' alignItems='center' borderRadius={4}>
                            <Text>About</Text>
                        </Box>
                    </Link>
                    <Link to="/blog">
                        <Box h={10} _hover={{ bg: 'rgba(163,168,176,.2)' }} px={4} display='flex' alignItems='center' borderRadius={4}>
                            <Text>Blog</Text>
                        </Box>
                    </Link>
                    <Link to="/resources">
                        <Box h={10} _hover={{ bg: 'rgba(163,168,176,.2)' }} px={4} display='flex' alignItems='center' borderRadius={4}>
                            <Text>Resources</Text>
                        </Box>
                    </Link>
                </Flex>
            </Flex>
        </Container>
    )
}

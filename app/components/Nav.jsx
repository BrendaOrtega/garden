
import { Text, Container, Flex, Link as Anchor, Image, Box, Button, Spacer } from "@chakra-ui/react";
import { Link, Links } from "@remix-run/react";

const logo = "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/external%2Fmichis.svg?alt=media&token=2bbd2928-0306-4475-919a-aea70c84f250"

export default function Nav() {
    return (
        <Box display='flex' justifyContent='center' >
            <Container
                position='fixed'
                margin='0 auto'
                maxW={"container.xl"}
                px={{ base: '16px', lg: '24px' }}
                bg='white'
                borderRadius='40px'
                h={{ base: '64px', lg: '80px' }}
                zIndex='1'
                marginTop={{ base: '16px', lg: '32px' }}
                boxShadow='0 10px 15px -3px rgba(204, 204, 204, 0.3),0 4px 6px -2px rgba(204, 204, 204, 0.05)'
            >
                <Flex
                    h='100%'
                    alignItems='center'
                >
                    <Link to="/">
                        <Box alignItems='center'>
                            <Image display={{ base: 'unset', lg: 'none' }} src='/images/michis.svg' h="28px" alt="Brenda's logo" marginRight={4} />
                            <Image display={{ base: 'none', lg: 'inherit' }} src='/images/michi-name.svg' h="36px" alt="Brenda's isotipo" marginRight={4} />
                        </Box>
                    </Link>
                    <Spacer />
                    <Flex gap={{ base: '0', lg: '8' }}>
                        <Link to="/about">
                            <Box h={10} _hover={{ bg: 'rgba(163,168,176,.2)' }} px={{ base: '8px', lg: '16px' }} display='flex' alignItems='center' borderRadius={4}>
                                <Text >About</Text>
                            </Box>
                        </Link>
                        <Link to="/blog">
                            <Box h={10} _hover={{ bg: 'rgba(163,168,176,.2)' }} px={{ base: '8px', lg: '16px' }} display='flex' alignItems='center' borderRadius={4}>
                                <Text>Blog</Text>
                            </Box>
                        </Link>
                        <Link to="/resources">
                            <Box h={10} _hover={{ bg: 'rgba(163,168,176,.2)' }} px={{ base: '8px', lg: '16px' }} display='flex' alignItems='center' borderRadius={4}>
                                <Text>Resources</Text>
                            </Box>
                        </Link>
                    </Flex>
                </Flex>
            </Container>
        </Box>
    )
}

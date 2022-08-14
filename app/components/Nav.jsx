
import { Text, Container, Flex, Link as Anchor, Image, Box, Button, Spacer, useColorModeValue, useColorMode } from "@chakra-ui/react";
import { Link, Links } from "@remix-run/react";

const logo = "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/external%2Fmichis.svg?alt=media&token=2bbd2928-0306-4475-919a-aea70c84f250"

export default function Nav() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Box display='flex' justifyContent='center' >
            <Container
                position='fixed'
                margin='0 auto'
                maxW={"container.xl"}
                px={{ base: '16px', lg: '24px' }}
                bg={useColorModeValue('white', 'blue')}
                borderRadius='40px'
                h={{ base: '64px', lg: '80px' }}
                zIndex='1'
                marginTop={{ base: '16px', lg: '32px' }}
                boxShadow={useColorModeValue('0 10px 15px -3px rgba(204, 204, 204, 0.3),0 4px 6px -2px rgba(204, 204, 204, 0.05)', 'box-shadow: 0px 32px 32px 0px rgba(0, 0, 0, 0.25);')}
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
                    <Flex gap={{ base: '0', lg: '4' }}>
                        <Link to="/about">
                            <Box h={10} _hover={{ bg: 'rgba(163,168,176,.2)' }} px={{ base: '8px', lg: '16px' }} display='flex' alignItems='center' borderRadius={4}>
                                <Text fontSize='lg' >About</Text>
                            </Box>
                        </Link>
                        <Link to="/blog">
                            <Box h={10} _hover={{ bg: 'rgba(163,168,176,.2)' }} px={{ base: '8px', lg: '16px' }} display='flex' alignItems='center' borderRadius={4}>
                                <Text fontSize='lg'>Blog</Text>
                            </Box>
                        </Link>
                        <Link to="/resources">
                            <Box h={10} _hover={{ bg: 'rgba(163,168,176,.2)' }} px={{ base: '8px', lg: '16px' }} display='flex' alignItems='center' borderRadius={4}>
                                <Text fontSize='lg'>Resources</Text>
                            </Box>
                        </Link>
                        <Button
                            onClick={toggleColorMode}
                            borderRadius='24px' bg='secondary.50' >
                            {colorMode === 'light' ?
                                <Image w='100%' src='/images/sol.svg' />
                                :
                                <Image w='100%' src='/images/luna.svg' />
                            }
                        </Button>
                    </Flex>
                </Flex>
            </Container>
        </Box >
    )
}

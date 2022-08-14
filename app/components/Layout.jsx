import { Container, Flex, Box, ControlBox } from "@chakra-ui/react";

export default function Layout({ list, body }) {
    return (
        <Box
        >
            <Container
                maxW={"container.xxl"}
                px={{ base: '8', lg: '20' }}
                pt={{
                    base: '80px', lg: '10%'
                }}
            >
                <Flex
                >
                    {body}
                </Flex>
                <Flex justifyContent='center'>
                    {list}
                </Flex>

            </Container >
        </Box >
    );
}

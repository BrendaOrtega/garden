import { Container, Flex, Box, ControlBox } from "@chakra-ui/react";

export default function Layout({ list, body, footer }) {
    return (
        <Container
            maxW={"container.xxl"}
            pt={{ base: '20', lg: '40' }}
            px={{ base: '8', lg: '20' }}
        >
            <Flex
            >
                {body}
            </Flex>
            <Flex justifyContent='center'>
                {list}
            </Flex>

        </Container >
    );
}

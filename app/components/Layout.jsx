import { Container, Flex, Box, ControlBox } from "@chakra-ui/react";

export default function Layout({ list, body, footer }) {
    return (
        <Container
            maxW={"container.xxl"}
            pt={40}
            px={20}
        >
            <Flex
            >
                {body}
            </Flex>
            <Flex>
                {list}
            </Flex>
            <Flex>
                {footer}
            </Flex>
        </Container >
    );
}

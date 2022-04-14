import { Container, Flex, Heading } from "@chakra-ui/react";

export default function Layout({ children }) {
    return (
        <Container
            maxW={"container.xl"}
            py={20}
            h={"100vh"}
            bg={"pink"}
        >
            <Heading
                as="h1"
            >
                El título
            </Heading>
            <Flex
                justifyContent={"flex-start"}
                flexDirection={["column", "row", "row-reverse", "column", "row"]}
                gap="0"
                alignItems={"center"}
                bg={"#cccccc"}
                h={["auto", "100%"]}
                px={20}
            >
                {children}
            </Flex>
        </Container>
    );
}


import { Text, Container, Flex, Image, Box } from "@chakra-ui/react";
import { Link } from "@remix-run/react";

const logo = "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/external%2Fmichis.svg?alt=media&token=2bbd2928-0306-4475-919a-aea70c84f250"

export default function Nav() {
    return (
        <Container
            maxW={"container.xxl"}
            px={20}
            py={6}
        >
            <Flex
                justifyContent="space-between"
            >
                <Flex>
                    <Link to="/">
                        <Image src={logo} h="36px" alt="Brenda's logo" />
                        <Text>Brenda González</Text>
                    </Link>
                </Flex>
                <Flex>
                    <Link to="/about">
                        <Text>About</Text>
                    </Link>
                    <Link to="/about">
                        <Text>Blog</Text>
                    </Link>
                    <Link to="/about">
                        <Text>Resources</Text>
                    </Link>
                </Flex>
            </Flex>
        </Container>
    )
}

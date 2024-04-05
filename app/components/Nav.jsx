import {
  Text,
  Container,
  Flex,
  Link as Anchor,
  Image,
  Box,
  Button,
  Spacer,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import { Link, Links } from "@remix-run/react";
import Gato from "./Gato";

const logo =
  "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/external%2Fmichis.svg?alt=media&token=2bbd2928-0306-4475-919a-aea70c84f250";

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box display="flex" justifyContent="center">
      <Container
        position="fixed"
        margin="0 auto"
        maxW={"container.xl"}
        px={{ base: "16px", lg: "24px" }}
        bg={useColorModeValue("white", "#0E0E11")}
        borderRadius="40px"
        h={{ base: "64px", lg: "80px" }}
        zIndex="100"
        marginTop={{ base: "16px", lg: "32px" }}
        boxShadow={useColorModeValue(
          "0 10px 15px -3px rgba(204, 204, 204, 0.3),0 4px 6px -2px rgba(204, 204, 204, 0.05)",
          "box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.80)"
        )}
      >
        <Flex h={{ base: "64px", lg: "80px" }} alignItems="center">
          <Link to="/">
            <Flex
              h={{ base: "64px", lg: "80px" }}
              alignItems="center"
              justifyContent="flex-start"
              display={useColorModeValue("flex", "none")}
            >
              <div
                style={{
                  zIndex: "-1",
                }}
              >
                <Gato />
              </div>
              <Image
                display={{ base: "none", lg: "inherit" }}
                h="20px"
                ml="16px"
                src="./images/name.svg"
              />
            </Flex>
            <Flex
              alignItems="center"
              justifyContent="flex-start"
              display={useColorModeValue("none", "flex")}
            >
              <div
                style={{
                  zIndex: "-1",
                }}
              >
                <Gato />
              </div>
              <Image
                display={{ base: "none", lg: "inherit" }}
                h="28px"
                ml="16px"
                src="./name.png"
              />
            </Flex>
          </Link>
          <Spacer />
          <Flex gap={{ base: "0", lg: "4" }}>
            <Link to="/about">
              <Box
                h={10}
                _hover={{
                  bg: useColorModeValue(
                    "rgba(233,237,246,.9)",
                    "rgba(233,237,246,.03)"
                  ),
                }}
                px={{ base: "8px", lg: "16px" }}
                display="flex"
                alignItems="center"
                borderRadius="28px"
              >
                <Text fontSize={{ base: "md", md: "lg" }} color="title">
                  About
                </Text>
              </Box>
            </Link>
            <Link to="/blog">
              <Box
                h={10}
                _hover={{
                  bg: useColorModeValue(
                    "rgba(233,237,246,.9)",
                    "rgba(233,237,246,.03)"
                  ),
                }}
                px={{ base: "8px", lg: "16px" }}
                display="flex"
                alignItems="center"
                borderRadius="28px"
              >
                <Text fontSize={{ base: "md", md: "lg" }} color="title">
                  Blog
                </Text>
              </Box>
            </Link>
            <Link to="/resources">
              <Box
                h={10}
                _hover={{
                  bg: useColorModeValue(
                    "rgba(233,237,246,.9)",
                    "rgba(233,237,246,.03)"
                  ),
                }}
                px={{ base: "8px", lg: "16px" }}
                display="flex"
                alignItems="center"
                borderRadius="28px"
              >
                <Text fontSize={{ base: "md", md: "lg" }} color="title">
                  Resources
                </Text>
              </Box>
            </Link>
            <Button
              onClick={toggleColorMode}
              borderRadius="24px"
              bg={useColorModeValue("second.50", "black")}
            >
              {colorMode === "light" ? (
                <Image
                  w="18px"
                  h="18px"
                  src="/images/sol.svg"
                  alt="sun blue icon"
                />
              ) : (
                <Image
                  w="18px"
                  h="18px"
                  src="/images/luna.svg"
                  alt="moon white icon"
                />
              )}
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

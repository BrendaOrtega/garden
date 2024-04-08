import { Text, Flex, Image, Box, useColorModeValue } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box
      opacity={useColorModeValue(".7", ".5")}
      w={"100vw"}
      textAlign={"center"}
      py={{ base: "40px", lg: "80px" }}
    >
      <Flex justifyContent={"center"}>
        <a
          href="https://twitter.com/brendaojs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            _hover={{ opacity: ".7" }}
            src={useColorModeValue(
              "/images/twitter-blue.svg",
              "/images/twitter-blue-dark.svg"
            )}
            w="24px"
            h="28px"
            marginX={2}
            alt="twitter logo blue"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/brendago/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            _hover={{ opacity: ".7" }}
            src={useColorModeValue(
              "/images/in-blue.svg",
              "/images/in-blue-dark.svg"
            )}
            w="24px"
            h="28px"
            marginX={2}
            alt="linkedin logo blue"
          />
        </a>
        <a
          href="https://www.instagram.com/brenda_orteg/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            _hover={{ opacity: ".7" }}
            src={useColorModeValue(
              "/images/insta-blue.svg",
              "/images/insta-blue-dark.svg"
            )}
            w="24px"
            h="28px"
            marginX={2}
            alt="instagram logo blue"
          />
        </a>
        <a
          href="https://github.com/BrendaOrtega"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            _hover={{ opacity: ".7" }}
            src={useColorModeValue(
              "/images/git-blue.svg",
              "/images/git-dark.svg"
            )}
            w="28px"
            h="28px"
            marginX={2}
            alt="behance logo blue"
          />
        </a>
      </Flex>
      <Text color="tooltip" marginTop={4}>
        © 2022 Brenda González Ortega - All rights reserved.
      </Text>
    </Box>
  );
}

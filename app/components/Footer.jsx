import { Text, Flex, Image, Box, useColorModeValue } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box
      opacity={useColorModeValue(".5", ".5")}
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
            _hover={{ opacity: ".5" }}
            src={useColorModeValue(
              "/images/twitter-blue-dark.svg",
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
              "/images/in-blue-dark.svg",
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
            _hover={{ opacity: ".5" }}
            src={useColorModeValue(
              "/images/insta-blue-dark.svg",
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
            _hover={{ opacity: ".5" }}
            src={useColorModeValue(
              "/images/git-dark.svg",
              "/images/git-dark.svg"
            )}
            w="28px"
            h="28px"
            marginX={2}
            alt="behance logo blue"
          />
        </a>
      </Flex>
      <p marginTop={4}>© 2022 Brenda González Ortega - All rights reserved.</p>
    </Box>
  );
}

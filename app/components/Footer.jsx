import { Text, Flex, Image, Box, useColorModeValue } from "@chakra-ui/react";

const twitter =
  "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/external%2Ftwitter-blue.svg?alt=media&token=24dcc7cc-1de7-461d-8ab1-8f1fd9a63d26";
const linkedin =
  "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/external%2Fin-blue.svg?alt=media&token=86cad868-5f6d-471c-b4fd-e35e389b797a";
const instagram =
  "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/external%2Finsta-blue.svg?alt=media&token=60b894e4-a5cc-4eed-b692-aba9496349a9";
const behance =
  "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/external%2Fbe-blue.svg?alt=media&token=162cb60e-4cd6-4dd3-8735-fa0551538cd8";

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

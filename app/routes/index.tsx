import { Heading, Image, Text, Box, VStack, Flex } from "@chakra-ui/react";
import { Link } from "@remix-run/react";
import Layout from "~/components/Layout"

export default function Index() {
  return (
    <Layout
      body={<Body />}
      list={<List />}
      footer={<Footer />}
    >
    </Layout>
  )
}

const Body = () => {
  return <>
    <Flex
      justifyContent="space-between"
      flexWrap={["wrap", "wrap", "nowrap"]}
      // flexDirection={["column", "row", "row-reverse", "column", "row"]}
      gap="0"
      alignItems="center"
      h={["auto", "500px"]}
      px={20}
    >
      <Text
        flex="1"
      >
        <Heading size='2xl' lineHeight={"tall"}>
          👋 Hello, I'm Brenda.
          <br />
          I'm a Product Designer from México.
        </Heading>
      </Text>
      <Image
        w={"240px"}
        src="/images/emoji.png" />
    </Flex>
  </>
}

const List = () => {
  return (
    <VStack
      spacing={4}
      align='stretch'
      marginTop={12}
    >
      <Card
        name="Tumblr  — Making Queueing Better on Mobile"
        description="Product Design, Agency"
        image="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/external%2Fportada-covalto.png?alt=media&token=f442985a-f817-4b97-a063-9f25af7fc583"
      />
      <Card
        name="Tumblr  — Making Queueing Better on Mobile"
        description="Product Design, Agency"
        image="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/external%2Fportada-covalto.png?alt=media&token=f442985a-f817-4b97-a063-9f25af7fc583"
      />
      <Card
        name="Tumblr  — Making Queueing Better on Mobile"
        description="Product Design, Agency"
        image="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/external%2Fportada-covalto.png?alt=media&token=f442985a-f817-4b97-a063-9f25af7fc583"
      />
    </VStack >
  )
}

const Card = ({ image, name, description }) => {
  return (
    <Link to='/'>
      <Flex
        flexDir={"column"}
        borderRadius='lg'
        overflow="hidden"
        boxShadow='lg'
        marginY={8}
        bg="white"
      >
        <Image src={image} objectFit={"cover"} borderRadius='lg' h="400px" w="100vw" />
        <Box
          padding={4}
        >
          <Heading size="md">
            {name}
          </Heading>
          <Text fontSize='md' color='tooltip' marginTop={'2'}>{description}</Text>
        </Box>
      </Flex >
    </Link>
  )
}
const twitter = "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/external%2Ftwitter-blue.svg?alt=media&token=24dcc7cc-1de7-461d-8ab1-8f1fd9a63d26"
const linkedin = "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/external%2Fin-blue.svg?alt=media&token=86cad868-5f6d-471c-b4fd-e35e389b797a"
const instagram = "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/external%2Finsta-blue.svg?alt=media&token=60b894e4-a5cc-4eed-b692-aba9496349a9"
const behance = "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/external%2Fbe-blue.svg?alt=media&token=162cb60e-4cd6-4dd3-8735-fa0551538cd8"

const Footer = () => {
  return (
    <Box
      opacity={".6"}
      marginTop={20}
      w={'100vw'}
      textAlign={"center"}
    >

      <Flex
        justifyContent={"center"}
      >
        <a href="/https://twitter.com/brendaojs" target="_blank" rel="noopener noreferrer" >
          <Image src={twitter} w="24px" marginX={2} alt="twitter logo blue" />
        </a>
        <a href="https://www.linkedin.com/in/brenda-ort/" target="_blank" rel="noopener noreferrer" >
          <Image src={linkedin} w="24px" marginX={2} alt="linkedin logo blue" />
        </a>
        <a href="https://www.instagram.com/brenda_orteg/" target="_blank" rel="noopener noreferrer" >
          <Image src={instagram} w="24px" marginX={2} alt="instagram logo blue" />
        </a>
        <a href="https://www.behance.net/bremin112093" target="_blank" rel="noopener noreferrer" >
          <Image src={behance} w="28px" marginX={2} alt="behance logo blue" />
        </a>
      </Flex>
      <Text color="text" marginTop={4}>© 2022 Brenda González Ortega - All rights reserved.</Text>
    </Box >
  )
}
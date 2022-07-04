import { Heading, Image, Text, Box, VStack, Flex } from "@chakra-ui/react";
import { Link } from "@remix-run/react";
import Layout from "~/components/Layout"

export default function Index() {
  return (
    <Layout
      body={<Body />}
      list={<List />}
    >
    </Layout>
  )
}

const Body = () => {
  return <>
    <Flex
      w='100%'
      justifyContent='space-between'
      flexWrap={["wrap", "wrap", "nowrap"]}
      // flexDirection={["column", "row", "row-reverse", "column", "row"]}
      gap={10}
      alignItems="center"
      h={["auto", "500px"]}
      px={20}
    >
      <Heading size='2xl' lineHeight={"tall"}>
        👋 Hello, I'm Brenda.
        <br />
        I'm a Product Designer <br /> based in México.
      </Heading>
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
        name="Covalto App"
        description="Credit Card Aplication & Internal Management Platform | Fitech"
        image="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/garden%2F71.png?alt=media&token=45550d18-ba7f-4371-baed-369706c70174"
      />
      <Card
        name="Webdive"
        description="Web Application | SaaS"
        image="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/external%2Fportada-covalto.png?alt=media&token=f442985a-f817-4b97-a063-9f25af7fc583"
      />
      <Card
        name="Santander Móvil"
        description="Banking Mobile Aplication | Banking"
        image="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/external%2Fportada-covalto.png?alt=media&token=f442985a-f817-4b97-a063-9f25af7fc583"
      />
      <Card
        name="Santander Personal"
        description="Banking Mobile Aplication & Internal Management Application | Banking"
        image="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/external%2Fportada-covalto.png?alt=media&token=f442985a-f817-4b97-a063-9f25af7fc583"
      />
      <Card
        name="FixterGeek"
        description="Website & Learning platform | Education"
        image="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/external%2Fportada-covalto.png?alt=media&token=f442985a-f817-4b97-a063-9f25af7fc583"
      />
      <Card
        name="SurveyUp"
        description="Surveys web application & Management Platform | Market Research"
        image="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/external%2Fportada-covalto.png?alt=media&token=f442985a-f817-4b97-a063-9f25af7fc583"
      />
      <Card
        name="Unikko"
        description="Website & Property Management Application | Real State "
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
        _hover={{ boxShadow: 'xl' }}
      >
        <Flex h="400px" overflow='hidden' borderRadius='lg lg none none'>
          <Image src={image} objectFit={"cover"} h="400px" w="100vw" transition='all 1s ease' _hover={{ transform: 'scale(1.1)' }} />
        </Flex>
        <Flex>
          <Box
            padding={4}
          >
            <Heading size="md">
              {name}
            </Heading>
            <Text fontSize='md' color='text' marginTop={'2'}>{description}</Text>
          </Box>
        </Flex>
      </Flex >
    </Link>
  )
}

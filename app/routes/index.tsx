import { Heading, Image, Text, Box, VStack, Flex, useColorModeValue } from "@chakra-ui/react";
import { Link } from "@remix-run/react";
import Layout from "~/components/Layout"
import LazyLoad from 'react-lazyload';
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
      w='container.xl'
      justifyContent={{ base: 'center', lg: 'space-between' }}
      flexWrap={["wrap", "wrap", "nowrap"]}
      gap={{ base: '4', lg: '10' }}
      alignItems="center"
      h={["auto", "500px"]}
      px={{ base: '0', lg: '20' }}
      py={{ base: '0', lg: 'inherit' }}
      mt={{ base: '80px', lg: '0px' }}
    >
      <Heading size='2xl' lineHeight={"tall"} color='title' fontFamily='Proxima Nova'>
        👋 Hello, I'm Brenda.
        <br />
        I'm a Product Designer <br /> based in México.
      </Heading>
      <LazyLoad height={200}>
        <Image
          h='auto'
          w={{ base: '0px', md: '240px', lg: "240px" }}
          src="/images/emoji.png"
          alt='brenda emoji 3d'
        />
      </LazyLoad>
    </Flex>
  </>
}

const List = () => {
  return (
    <Flex
      gap={8}
      marginTop={{ base: '10', lg: '12' }}
      display='flex'
      flexWrap='wrap'
    >
      <Card
        name="Covalto App"
        description="Credit Card Aplication & Internal Management Platform | Fitech"
        image="/images/projects/covalto-portada2.png"
      />
      <Card
        name="Santander Móvil"
        description="Banking Mobile Aplication | Banking"
        image="/images/projects/santander.png"
      />
      <Card
        name="Santander Personal"
        description="Banking Mobile Aplication & Internal Management Application | Banking"
        image="/images/projects/personal.png"
      />
      <Card
        name="FixterGeek"
        description="Website & Learning platform | Education"
        image="/images/projects/fixter.png"
      />
      <Card
        name="SurveyUp"
        description="Surveys web application & Management Platform | Market Research"
        image="/images/projects/survi2.png"
      />
      <Card
        name="Webdive"
        description="Website & Property Management Application | Real State "
        image="/images/projects/uniks.png"
      />
      {/* <Card
        name="Real state"
        description="Website & Property Management Application | Real State "
        image="/images/projects/uniks.png"
      />
      <Card
        name="Unikko"
        description="Website & Property Management Application | Real State "
        image="/images/projects/uniks.png"
      /> */}
    </Flex >
  )
}

const Card = ({ image, name, description }) => {
  return (
    <Flex w={{ base: '100%', lg: '500px' }} flexGrow='1'>
      {/* <Link to='/'> */}
      <Flex
        flexDir={"column"}
        borderRadius='lg'
        overflow="hidden"
        boxShadow='lg'
        marginY={{ base: '4', lg: '8' }}
        bg={useColorModeValue('white', 'second.900')}

        _hover={{ boxShadow: 'xl' }}
      >
        <Flex h={{ base: '200px', lg: '400px' }} overflow='hidden' borderRadius='lg lg none none' alignItems='center'>
          <Image loading="lazy" src={image} alt='project cover' objectFit={"cover"} h="400px" w="100vw" transition='all 1s ease' _hover={{ transform: 'scale(1.1)' }} />
        </Flex>
        <Flex>
          <Box
            padding={4}
          >
            <Heading size="md" color='title'>
              {name}
            </Heading>
            <Text fontSize='md' color='text' marginTop={'2'}>{description}</Text>
          </Box>
        </Flex>
      </Flex >
      {/* </Link > */}
    </Flex>
  )
}

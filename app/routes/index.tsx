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
      <Heading size='2xl' lineHeight={"tall"} color='title'>
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
    <VStack
      spacing={{ base: '0', lg: '4' }}
      align='stretch'
      marginTop={{ base: '10', lg: '12' }}

    >
      <Card
        name="Covalto App"
        description="Credit Card Aplication & Internal Management Platform | Fitech"
        image="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/garden%2Fcovalto-portada2.png?alt=media&token=895e7b5f-9740-47fb-8a2f-b2ff4d49f879"
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
        image="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/garden%2Fsurvi2.png?alt=media&token=8a2c42a8-82f2-41e8-bc00-eb7343cb4cee"
      />
      <Card
        name="Unikko"
        description="Website & Property Management Application | Real State "
        image="/images/projects/uniks.png"
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
        marginY={{ base: '4', lg: '8' }}
        bg={useColorModeValue('white', 'blue')}

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
    </Link >
  )
}

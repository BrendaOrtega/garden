import { Heading, Image, Text, Box, VStack, Flex, useColorModeValue } from "@chakra-ui/react";
import { Link } from "@remix-run/react";
import Layout from "~/components/Layout"
import LazyLoad from 'react-lazyload';
import styles from "~/styles/about.css"

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
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
        👋🏻 Hello, I'm Brenda.
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
      gap={{ lg: '0px 40px', xl: '0px 80px' }}
      marginTop={{ base: '10', lg: '8', xl: '8' }}
      display='flex'
      flexWrap='wrap'
      justifyContent='center'
    >
      <Card
        className="box"
        name="Flink"
        description="Mobile app to make investments | Fitech"
        image="/images/projects/flink.svg"
      />
      <Card
        className="box"
        name="Covalto App"
        description="Credit Card Aplication & Internal Management Platform | Fitech"
        image="/images/projects/covalto.svg"
      />
      <Card
        className="box"
        name="Santander Móvil"
        description="Banking Mobile Aplication | Banking"
        image="/images/projects/sant.svg"
      />
      <Card
        className="box"
        name="Santander Personal"
        description="Banking Mobile & Internal Management Application | Banking"
        image="/images/projects/personal.svg"
      />
      <Card
        className="box"
        name="FixterGeek"
        description="Website & Learning platform | Education"
        image="/images/projects/fixter.svg"
      />
      <Card
        className="box"
        name="SurveyUp"
        description="Surveys web & Management Platform | Market Research"
        image="/images/projects/survyup.svg"
      />
      {/* <Card
        name="Webdive"
        description="Website & Property Management Application | Real State "
        image="/images/projects/uniks.png"
      /> */}
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

const Card = ({ image, name, description, className }) => {
  return (
    <Flex
      className={className}
      w={{ base: '100%', lg: '360px', xl: '480px' }} h={{ base: '360px', lg: '700px' }}  >
      <Flex
        flexDir={"column"}
        overflow="hidden"
        marginY={{ base: '4', lg: '8' }}
      >
        <Flex h={{ base: '400px', lg: '700px' }} overflow='hidden' borderRadius='2xl' alignItems='center'>
          <Image loading="lazy" src={image} alt='project cover' objectFit={"cover"} h="700px" w="100vw" transition='all 1s ease' _hover={{ transform: 'scale(1.1)' }} />
        </Flex>
        <Flex>
          <Box
            paddingY={4}
          >
            <Heading size="md" color='title'>
              {name}
            </Heading>
            <Text fontSize='md' color='text' marginTop={'1'}>{description}</Text>
          </Box>
        </Flex>
      </Flex >
    </Flex>
    // <Flex w={{ base: '100%', lg: '500px' }} flexGrow='1'>
    //   {/* <Link to='/'> */}
    //   <Flex
    //     flexDir={"column"}
    //     borderRadius='lg'
    //     overflow="hidden"
    //     boxShadow='lg'
    //     marginY={{ base: '4', lg: '8' }}
    //     bg={useColorModeValue('white', 'second.900')}

    //     _hover={{ boxShadow: 'xl' }}
    //   >
    //     <Flex h={{ base: '200px', lg: '400px' }} overflow='hidden' borderRadius='lg lg none none' alignItems='center'>
    //       <Image loading="lazy" src={image} alt='project cover' objectFit={"cover"} h="400px" w="100vw" transition='all 1s ease' _hover={{ transform: 'scale(1.1)' }} />
    //     </Flex>
    //     <Flex>
    //       <Box
    //         padding={4}
    //       >
    //         <Heading size="md" color='title'>
    //           {name}
    //         </Heading>
    //         <Text fontSize='md' color='text' marginTop={'2'}>{description}</Text>
    //       </Box>
    //     </Flex>
    //   </Flex >
    //   {/* </Link > */}
    // </Flex>
  )
}

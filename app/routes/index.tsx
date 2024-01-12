import {
  Heading,
  Image,
  Text,
  Box,
  VStack,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "@remix-run/react";
import Layout from "~/components/Layout";
import LazyLoad from "react-lazyload";
import styles from "~/styles/about.css";
import { BlurImage } from "~/utils/hooks/useBlurImage";
import { motion } from "framer-motion";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
export default function Index() {
  return <Layout body={<Body />} list={<List />}></Layout>;
}

const Body = () => {
  return (
    <>
      <Flex
        w="container.xl"
        justifyContent={{ base: "center", lg: "space-between" }}
        flexWrap={["wrap", "wrap", "nowrap"]}
        gap={{ base: "4", lg: "10" }}
        alignItems="center"
        h={["auto", "500px"]}
        px={{ base: "0", lg: "20" }}
        py={{ base: "0", lg: "inherit" }}
        mt={{ base: "80px", lg: "0px" }}
      >
        <Heading
          w={{ base: "100%", lg: "50%" }}
          size="2xl"
          lineHeight={"tall"}
          color="title"
          fontFamily="Proxima Nova"
        >
          <motion.div
            style={{
              transformOrigin: "center",
              display: "inline-block",
              marginRight: "16px",
            }}
            animate={{ rotate: 20 }}
            transition={{
              yoyo: 6,
              from: 0,
              duration: 0.4,
              ease: "easeInOut",
              type: "tween",
            }}
          >
            👋🏻
          </motion.div>
          Hello, I'm Brenda.
          <br />
          I'm a Product Designer based in México.
        </Heading>
        <Flex w={{ base: "100%", lg: "50%" }} justifyContent="flex-end">
          <LazyLoad height={200}>
            <Image
              h="auto"
              w={{ base: "0px", md: "240px", lg: "240px" }}
              src="/images/emoji.png"
              alt="brenda emoji 3d"
            />
          </LazyLoad>
        </Flex>
      </Flex>
    </>
  );
};

const List = () => {
  return (
    <Flex
      gap={{ lg: "0px 40px", xl: "0px 80px" }}
      marginTop={{ base: "10", lg: "8", xl: "8" }}
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
    >
      <Card
        className="box"
        name="Costructoken"
        description="Mobile app to save money to build your house | Fintech"
        image="/images/projects/token.png"
        lowSrc="https://i.imgur.com/y9b0S4Sm.png"
      />
      <Card
        className="box"
        name="Formmy"
        description="Web app to add contact forms to your website | Saas"
        image="/images/projects/formmy.png"
        lowSrc="https://i.imgur.com/pC19NU5m.png"
      />
      <Card
        className="box"
        name="Flink"
        description="Mobile app to make investments | Fintech"
        image="/images/projects/flink.png"
        lowSrc="https://i.imgur.com/THUxqt9t.png"
      />
      <Card
        className="box"
        name="Covalto App"
        description="Credit Card Aplication & Internal Management Platform | Fintech"
        image="/images/projects/covalto.png"
        lowSrc="https://i.imgur.com/16aC4jAt.png"
      />
      <Card
        className="box"
        name="Santander Personal"
        description="Banking Mobile & Internal Management Application | Banking"
        image="/images/projects/personal.png"
        lowSrc="https://i.imgur.com/fLdMmXKt.png"
      />
      <Card
        className="box"
        name="Santander Móvil"
        description="Banking Mobile Aplication | Banking"
        image="/images/projects/sant.png"
        lowSrc="https://i.imgur.com/pHbfSGEt.png"
      />
      <Card
        className="box"
        name="Fixter.org"
        description="Website & Learning platform | Software"
        image="/images/projects/org.png"
        lowSrc="https://i.imgur.com/w8YzbTG.png"
      />
      <Card
        className="box"
        name="FixterGeek"
        description="Website & Learning platform | Education"
        image="/images/projects/fix.png"
        lowSrc="https://i.imgur.com/nRhOA5Ls.png"
      />

      <Card
        className="box"
        name="LastPlay"
        description="Website & Learning platform | Education"
        image="/images/projects/play.png"
        lowSrc="https://i.imgur.com/HqWDIw3.png"
      />
      <Card
        className="box"
        name="SurveyUp"
        description="Surveys web & Management Platform | Market Research"
        image="/images/projects/survey.png"
        lowSrc="https://i.imgur.com/MoNpbBT.png"
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
    </Flex>
  );
};

const Card = ({ image, name, description, className, lowSrc }) => {
  return (
    <Flex
      className={className}
      w={{ base: "100%", lg: "360px", xl: "480px" }}
      h={{ base: "360px", lg: "700px" }}
    >
      <Flex
        flexDir={"column"}
        overflow="hidden"
        marginY={{ base: "4", lg: "8" }}
      >
        <Flex
          h={{ base: "400px", lg: "700px" }}
          overflow="hidden"
          borderRadius="2xl"
          alignItems="center"
        >
          <BlurImage src={image} lowSrc={lowSrc} full />
          {/* <Image loading="lazy" src={image} alt='project cover' objectFit={"cover"} h="700px" w="100vw" transition='all 1s ease' _hover={{ transform: 'scale(1.1)' }} /> */}
        </Flex>
        <Flex>
          <Box paddingY={4}>
            <Heading size="md" color="title">
              {name}
            </Heading>
            <Text fontSize="md" color="text" marginTop={"1"}>
              {description}
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

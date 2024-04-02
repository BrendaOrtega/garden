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
import { SparklesCore } from "~/components/sparkles";
import { DirectionAwareHover } from "~/components/DirectionAwareHover";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
export default function Index() {
  return <Layout body={<Body />} list={<List />}></Layout>;
}

const Body = () => {
  return (
    <>
      <section className="flex max-w-7xl justify-center lg:justify-between flex-wrap lg:flex-nowrap gap-2 lg:gap-10 items-center h-auto md:h-[500px] px-0 lg:px-20 py-0 lg:py-auto mt-2 lg:mt-0 ">
        <div>
          <h1 className="text-black dark:text-white text-5xl  leading-normal	font-bold">
            {" "}
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
          </h1>
        </div>

        <div className="w-full lg:w-[50%] justify-end flex">
          <LazyLoad height={200}>
            <img
              className="h-auto w-0 md:w-[240px]"
              src="/images/emoji.png"
              alt="brenda emoji 3d"
            />
          </LazyLoad>
        </div>
      </section>
    </>
  );
};

const List = () => {
  return (
    <div className="gap-10 lg:gap-20 mt-10 lg:mt-8 flex flex-wrap justify-center">
      <Card
        link="/projects/flink"
        name="Costructoken"
        description="Mobile app to save money to build your house | Fintech"
        image="/images/projects/token.png"
        lowSrc="https://i.imgur.com/y9b0S4Sm.png"
      />
      <Card
        link="/projects/flink"
        name="Formmy"
        description="Web app to add contact forms to your website | Saas"
        image="/images/projects/formmy.png"
        lowSrc="https://i.imgur.com/pC19NU5m.png"
      />
      <Card
        link="/projects/flink"
        name="Flink"
        description="Mobile app to make investments | Fintech"
        image="/images/projects/flink.png"
        lowSrc="https://i.imgur.com/THUxqt9t.png"
      />
      <Card
        link="/projects/flink"
        name="Covalto App"
        description="Credit Card Aplication | Fintech"
        image="/images/projects/covalto.png"
        lowSrc="https://i.imgur.com/16aC4jAt.png"
      />

      <Card
        link="/projects/flink"
        name="Santander Personal"
        description="Banking Mobile & Internal Management Application | Banking"
        image="/images/projects/personal.png"
        lowSrc="https://i.imgur.com/fLdMmXKt.png"
      />
      <Card
        link="/projects/flink"
        name="Santander Móvil"
        description="Banking Mobile Aplication | Banking"
        image="/images/projects/sant.png"
        lowSrc="https://i.imgur.com/pHbfSGEt.png"
      />
      <Card
        link="/projects/flink"
        name="Fixter.org"
        description="Website & Learning platform | Software"
        image="/images/projects/org.png"
        lowSrc="https://i.imgur.com/w8YzbTG.png"
      />
      <Card
        link="/projects/flink"
        name="FixterGeek"
        description="Website & Learning platform | Education"
        image="/images/projects/fix.png"
        lowSrc="https://i.imgur.com/nRhOA5Ls.png"
      />

      <Card
        link="/projects/flink"
        name="LastPlay"
        description="Website & Learning platform | Education"
        image="/images/projects/play.png"
        lowSrc="https://i.imgur.com/HqWDIw3.png"
      />
      <Card
        link="/projects/flink"
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
    </div>
  );
};

const Card = ({ image, name, description, lowSrc, link }) => {
  return (
    <Link to={link}>
      <div className="flex box w-full lg:w-[480px] xl:w-[480px] h-[360px] lg:h-[700px] group">
        <div className="flex flex-col overflow-hidden my-4 lg:my-8">
          <div className="h-[400px] lg:h-[700px] overflow-hidden rounded-2xl items-center transition-all">
            <BlurImage src={image} lowSrc={lowSrc} full />
          </div>
          <div className="group-hover:pl-6 transition-all">
            <h2 className="text-xl text-black dark:text-white font-bold mt-4">
              {name}
            </h2>
            <p className="text-base text-iron-500 dark:text-iron-300  mt-1">
              {" "}
              {description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

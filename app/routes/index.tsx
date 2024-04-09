import { Link } from "@remix-run/react";
import Layout from "~/components/Layout";
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
    <section className="dark min-h-auto md:min-h-[70vh] w-[90%] md:w-full mx-auto  flex  justify-center lg:justify-between flex-wrap-reverse  lg:flex-nowrap gap-2 lg:gap-10 items-center h-auto md:h-[500px] px-0 lg:px-20 pt-[120px] lg:py-auto mt-2 lg:mt-0 ">
      <div className="mt-10 md:mt-0  px-4 md:px-10 lg:px-auto ">
        <h1
          style={{ lineHeight: "140%" }}
          className="text-black dark:text-white text-4xl md:text-5xl font-bold "
        >
          {" "}
          <motion.div
            style={{
              transformOrigin: "center",
              display: "inline-block",
              marginRight: "16px",
              zIndex: "-10",
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
            <span>👋🏻 </span>
          </motion.div>
          Hello, I'm Brenda.
          <br className="mt-4" />
          I'm a Product Designer based in México.
        </h1>
      </div>

      <div className="w-full lg:w-[50%] justify-left lg:justify-end flex">
        <img
          className="h-auto w-[160px]  md:w-[240px]"
          src="/images/emoji.png"
          alt="brenda emoji 3d"
        />
      </div>
    </section>
  );
};

const List = () => {
  return (
    <div className="cardList gap-10 lg:gap-20 mt-10 lg:mt-8 px-4 md:px-10 lg:px-auto flex flex-wrap justify-center">
      <Card
        link="/projects/constructoken"
        name="Costructoken"
        description="Mobile app to save money to build your house | Fintech"
        image="/images/projects/token.png"
        lowSrc="https://i.imgur.com/y9b0S4Sm.png"
      />

      <Card
        link="/projects/formmt"
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
        link="/projects/covalto"
        name="Covalto App"
        description="Credit Card Aplication | Fintech"
        image="/images/projects/covalto.png"
        lowSrc="https://i.imgur.com/16aC4jAt.png"
      />

      <Card
        link="/projects/santander"
        name="Santander Personal"
        description="Banking Mobile & Internal Management Application | Banking"
        image="/images/projects/personal.png"
        lowSrc="https://i.imgur.com/fLdMmXKt.png"
      />

      <Card
        link="/projects/santander"
        name="Santander Móvil"
        description="Banking Mobile Aplication | Banking"
        image="/images/projects/sant.png"
        lowSrc="https://i.imgur.com/pHbfSGEt.png"
      />

      <Card
        link="/projects/fixter"
        name="Fixter.org"
        description="Website & Learning platform | Software"
        image="/images/projects/org.png"
        lowSrc="https://i.imgur.com/w8YzbTG.png"
      />

      <Card
        link="/projects/fixtergeek"
        name="FixterGeek"
        description="Website & Learning platform | Education"
        image="/images/projects/fix.png"
        lowSrc="https://i.imgur.com/nRhOA5Ls.png"
      />

      <Card
        link="/projects/lastplay"
        name="LastPlay"
        description="Website & Learning platform | Education"
        image="/images/projects/play.png"
        lowSrc="https://i.imgur.com/HqWDIw3.png"
      />

      <Card
        link="/"
        name="SurveyUp"
        description="Surveys web & Management Platform | Market Research"
        image="/images/projects/survey.png"
        lowSrc="https://i.imgur.com/MoNpbBT.png"
      />
    </div>
  );
};

const Card = ({ image, name, description, lowSrc, link }) => {
  return (
    // <Link to={link}>
    <div className=" flex box w-full  lg:w-[320px] xl:w-[480px] h-[360px] lg:h-[700px] group z-0">
      <div className="flex flex-col overflow-hidden my-4 lg:my-8 w-full ">
        <div className="h-[400px] lg:h-[700px] w-full overflow-hidden rounded-2xl items-center transition-all">
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
    // </Link>
  );
};

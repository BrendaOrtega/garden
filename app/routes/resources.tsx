import {
  Flex,
  Heading,
  Text,
  Image,
  Container,
  VStack,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import { Link, Links } from "@remix-run/react";
import Layout from "~/components/Layout";
import TabBar from "~/components/TabBar";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";

export default function Resources() {
  const [active, setActive] = useState(0);

  const handleSelection = (index: number) => {
    setActive(index);
  };

  const activeSection = useMemo(() => {
    switch (active) {
      case 3:
        return <Papers />;
      case 2:
        return <Blogs />;
      case 1:
        return <Courses />;
      default:
        return <Books />;
    }
  }, [active]);

  return (
    <>
      <Container
        maxW={"container.xxl"}
        p={{ base: "160px 16px 80px 16px", lg: "240px  80px 120px 80px" }}
      >
        <Heading
          textAlign="center"
          fontSize={{ base: "4xl", lg: "5xl" }}
          color="title"
        >
          🚀 My best recommendations on design resources
        </Heading>
        <TabBar onClick={handleSelection} active={active} />
        {activeSection}
      </Container>
    </>
  );
}

const Books = () => (
  <Flex gap={10} justifyContent="center" flexWrap="wrap">
    <BookCard
      image="https://i.imgur.com/hEHoqE2.jpg"
      title="Dont make me think"
      description="Un imperdible si quieres conocer las bases de una buena experiencia de usuario."
      link="https://www.fixtergeek.com.ms"
      score="5"
    />
    <BookCard
      image="https://i.imgur.com/dGWNkGa.jpg"
      title="Haz fácil lo imposible"
      description="Aprende a realizar pruebas de usuario (estructura, herramientas, duración, guión, y más)."
      link="https://www.fixtergeek.com.ms"
      score="5"
    />
    {/* <BookCard
            image='https://i.imgur.com/WBELSMr.jpg'
            title='Lean UX'
            description='Conoce cómo aplicar la metogología Lean a la experiencia de usuario.'
            link='https://www.fixtergeek.com.ms'
            score='4'
        /> */}
    <BookCard
      image="https://i.imgur.com/pdtkrye.jpg"
      title="Emotional design"
      description="El ser humano toma decisiones con base en 3 niveles de procesamiento, visceral, conductual y reflexivo. Conocer cómo funciona cada uno y cómo se relaciona con el diseño. "
      link="https://www.fixtergeek.com.ms"
      score="4.5"
    />
    <BookCard
      image="https://i.imgur.com/Ss38sgD.jpg"
      title="El diseño como storytelling"
      description="Como seres humanos, nos encantan las historias, aprende a contarlas a través de tus productos o servicios."
      link="https://www.fixtergeek.com.ms"
      score="5"
    />
    {/* <BookCard
            image='https://i.imgur.com/Pr4k3x9.jpg'
            title='The user experience team of one'
            description='Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem '
            link='https://www.fixtergeek.com.ms'
            score='4.5'
        />
        <BookCard
            image='https://i.imgur.com/Dste1xW.jpg'
            title='Writing is Designing'
            description='Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem '
            link='https://www.fixtergeek.com.ms'
            score='5'
        /> */}
    <BookCard
      image="https://i.imgur.com/Ka1NTwB.jpg"
      title="Microcopy"
      description="Aprende qué es el microcopy y qué lineamientos seguir para definir el copy de una interfaz digital."
      link="https://www.fixtergeek.com.ms"
      score="5"
    />
    <BookCard
      image="https://i.imgur.com/VZaMp0o.jpg"
      title="Experiencia de Usuario"
      description="Conoce la definición de la experiencia de usuario y todos los conceptos básicos alrededor a ella. "
      link="https://www.fixtergeek.com.ms"
      score="4"
    />
    <BookCard
      image="https://i.imgur.com/JKFzKao.jpg"
      title="SCRUM"
      description="Conoce las bases de la metodología SCRUM y cómo aplicarla en tus proyectos."
      link="https://www.fixtergeek.com.ms"
      score="4"
    />
    <BookCard
      image="https://i.imgur.com/l9hq1cC.jpg"
      title="Design Sprint"
      description="Adentrate en la metodología, su historia, algunos casos aplicados y el paso a paso para aplicarla."
      link="https://www.fixtergeek.com.ms"
      score="4.5"
    />
    {/* <BookCard
            image='https://i.imgur.com/BhJPsXc.jpg'
            title='Jobs to be Done'
            description='Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem '
            link='https://www.fixtergeek.com.ms'
            score='4.5'
        /> */}
    {/* <BookCard
            image='https://i.imgur.com/nHTvfT1.jpg'
            title='Hooked'
            description='Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem '
            link='https://www.fixtergeek.com.ms'
            score='4.5'
        />
        <BookCard
            image='https://i.imgur.com/cXgnJRK.jpg'
            title='This is Service Design Thinking'
            description='Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem '
            link='https://www.fixtergeek.com.ms'
            score='4.5'
        /> */}
    {/* <BookCard
            image='https://i.imgur.com/IY2p2d8.jpg'
            title='The experience economy'
            description='Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem '
            link='https://www.fixtergeek.com.ms'
            score='4.5'
        />
        <BookCard
            image='https://i.imgur.com/JD5Pf7n.jpg'
            title='Designing for Behavior Change'
            description='Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem '
            link='https://www.fixtergeek.com.ms'
            score='4.5'
        />
        <BookCard
            image='https://i.imgur.com/Kt48boE.jpg'
            title='The Design of Everyday Things'
            description='Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem '
            link='https://www.fixtergeek.com.ms'
            score='4.5'
        /> */}
    <BookCard
      image="https://i.imgur.com/KzcDdYL.jpg"
      title="Ortotipografía para diseñadores"
      description="Aprende reglas gramaticales que no conocías y sobre todo el uso correcto de signos de puntuación."
      link="https://www.fixtergeek.com.ms"
      score="4.5"
    />
    <BookCard
      image="https://i.imgur.com/Wv9auql.jpg"
      title="Business Model Generation"
      description="En este libro explorarás los distintos tipos de modelo de negocio (cómo son y cómo se aplican), además de lo necesario para desarrollar el tuyo."
      link="https://www.fixtergeek.com.ms"
      score="4.5"
    />
    <BookCard
      image="https://i.imgur.com/f2WtwLf.jpg"
      title="Más que diseño de experiencia"
      description="Desde los conceptos hasta procesos, metologías y ética. Te servirá para dar un recorrido rápido por el mundo de la experiencia de usuario."
      link="https://www.fixtergeek.com.ms"
      score="4.5"
    />
    <BookCard
      image="https://i.imgur.com/GwySmNv.jpg"
      title="Laws UX"
      description="Conoce de forma simple y práctica las 10 leyes que te ayudarán a tomar decisiones al mapear y diseñar experiencias de usuario."
      link="https://www.fixtergeek.com.ms"
      score="5"
    />
  </Flex>
);

const Courses = () => (
  <Flex gap={10} justifyContent="center" flexWrap="wrap">
    <CourseCard
      image="https://i.imgur.com/fhHswAo.png"
      title="Diseño de Interfaces"
      description="Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem "
      link="https://ui.fixtergeek.com/"
      cta="Ver"
      rank="5"
    />
    <CourseCard
      image="/images/resources/curso-ux.png"
      title="Diseño de producto digital con Lean y UX"
      description="Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem "
      link="https://www.domestika.org/es/courses/1490-diseno-de-producto-digital-con-lean-y-ux"
      cta="Ver"
      rank="4.5"
    />
    <CourseCard
      image="https://i.imgur.com/hIOsTlw.png"
      title="Certificado profesional de Diseño de experiencia del usuario (UX) de Google"
      description="Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem "
      link="https://grow.google/intl/es-419_us/certificates/ux-design/#?modal_active=none"
      cta="Ver"
      rank="4.5"
    />
  </Flex>
);

const Blogs = () => (
  <Flex gap={10} justifyContent="center" flexWrap="wrap">
    <BlogCard
      image="https://i.imgur.com/c1cnvxV.png"
      title="N/N Group"
      description="Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem "
      link="https://www.nngroup.com/articles/"
      cta="Ver"
    />
    <BlogCard
      image="https://i.imgur.com/TnJciqh.png"
      title="UX Planet"
      description="Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem "
      link="https://uxplanet.org/tagged/espa%C3%B1ol"
      cta="Ver"
    />
    <BlogCard
      image="https://i.imgur.com/2JVshun.png"
      title="UX Collective"
      description="Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem "
      link="https://uxdesign.cc/"
      cta="Ver"
    />
    <BlogCard
      image="https://i.imgur.com/dO4HsQz.png"
      title="UI from mars"
      description="Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem "
      link="https://www.uifrommars.com/blog/"
      cta="Ver"
    />
    <BlogCard
      image="https://i.imgur.com/x46ZXJI.png"
      title="UI matters"
      description="Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem "
      link="https://www.uxmatters.com/top-articles.php"
      cta="Ver"
    />
  </Flex>
);

const Papers = () => (
  <Flex gap={10} justifyContent="center" flexWrap="wrap">
    <DocsCard
      image="https://i.imgur.com/uetu8B8.png"
      title="Jakob’s Ten Usability Heuristics"
      description="Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem "
      link="https://firebasestorage.googleapis.com/v0/b/garden-66daa.appspot.com/o/NNg%20Jakobs%20Usability%20Heuristics.pdf?alt=media&token=4427e01f-2ee3-4d7e-8f74-d459b2ebd25e"
      cta="Descargar"
    />
    <DocsCard
      image="https://i.imgur.com/qMJcq8U.png"
      title="The Basics of User Experience Design by IDEO"
      description="Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem "
      link="https://www.free-ebooks.net/computer-internet/The-Basics-of-User-Experience-Design/pdf?dl&preview"
      cta="Ver"
    />
    <DocsCard
      image="https://i.imgur.com/xGWtryB.png"
      title="The field guide to Human Centered Design"
      description="Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem "
      link="https://www.designkit.org/resources/1.html"
      cta="Descargar"
    />
  </Flex>
);

const BookCard = ({ image, description, link, title, score }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      whileInView={{ opacity: 1, y: 0 }}
      // initial="offscreen"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: "spring", damping: 10, mass: 1.5, stiffness: 120 }}
      className="w-[80%] md:w-[260px] group relative"
    >
      <img
        alt="book cover"
        className="absolute right-10 top-6 w-[80px] h-20 opacity-0 group-hover:opacity-100 z-10 "
        src="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/garden%2Fdescarga.gif?alt=media&token=fec96524-5be2-4920-b75a-3d8a60830869"
      />
      <div className="relative w-full  h-[300px] bg-[rgba(233, 237, 246, 0.05)] cursor-pointer px-8 py-6 justify-center">
        <img className="w-auto h-full mx-auto" src={image} alt="stars" />
        <div className="absolute flex transition-all bg-iron-800 py-[1%] pl-[2%] pr-2 bottom-12 right-8 rounded-lg justify-center items-center">
          <img
            className="h-6 w-6 mr-1"
            alt="rank icon"
            src="./images/coffee.png"
          />
          <p className="mt-1 text-sm text-[#A9A9A9] "> {score} </p>
        </div>
      </div>
      <div className="flex-col mt-4 gap-2 text-center">
        <h2 className="text-xl text-white font-bold"> {title}</h2>
        <p className="text-sm leading-normal mt-2 text-iron-400">
          {" "}
          {description}
        </p>
      </div>
    </motion.div>
  );
};
const CourseCard = ({ image, rank, description, cta, link, title }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      whileInView={{ opacity: 1, y: 0 }}
      // initial="offscreen"
      viewport={{ once: true, amount: 0.8 }}
      transition={{ type: "spring", damping: 10, mass: 1.5, stiffness: 120 }}
    >
      <Flex
        flexDir="column"
        w={{ base: "80%", md: "320px" }}
        ml={{ base: "10%", md: "none" }}
        h="auto"
        alignItems="center"
        position="relative"
        role="group"
      >
        <Image
          alt="book cover"
          position="absolute"
          right="40px"
          top="24px"
          w="80px"
          h="80px"
          opacity="0"
          _groupHover={{ opacity: "1" }}
          zIndex="1"
          src="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/garden%2Fdescarga.gif?alt=media&token=fec96524-5be2-4920-b75a-3d8a60830869"
        />

        <div className="relative flex w-full h-[240px] border-[1px] border-transparent bg-black cursor-pointer rounded-lg py-8 px-6 justify-center">
          <Image
            w="100%"
            h="auto"
            src={image}
            alt="stars"
            objectFit="cover"
            borderRadius="16px"
            border="1px solid #1A1A1A"
          />
          <Flex
            _groupHover={{ transform: "scale(1.1)" }}
            transition="all .2s ease-out"
            bg={useColorModeValue("white", "#1D1C20")}
            p="1% 2%"
            position="absolute"
            bottom="48px"
            right="32px"
            borderRadius="4px"
            alignItems="center"
          >
            <Image
              alt="rank icon"
              h="24px"
              mr="4px"
              src="./images/coffee.png"
            />
            <p className="mt-1 text-sm text-[#A9A9A9]"> {rank} </p>
          </Flex>
        </div>
        <Flex flexDirection="column" mt="16px" gap={2} textAlign="center">
          <Heading fontFamily="Avenir" fontSize="xl" color="title">
            {title}
          </Heading>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <button className="mt-4 px-4 rounded-lg h-10 text-white bg-[#212123] hover:bg-[#353536]">
              {cta}
            </button>
          </a>
          {/* <Text color='text' ontSize='md' lineHeight='1.2'>{description}</Text> */}
        </Flex>
      </Flex>
    </motion.div>
  );
};

const BlogCard = ({ image, description, link, title, cta }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      whileInView={{ opacity: 1, y: 0 }}
      // initial="offscreen"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: "spring", damping: 10, mass: 1.5, stiffness: 120 }}
    >
      <Flex
        flexDir="column"
        w={{ base: "80%", md: "260px", lg: "200px" }}
        ml={{ base: "10%", md: "none" }}
        h="auto"
        alignItems="center"
        position="relative"
        role="group"
      >
        <Image
          alt="book cover"
          position="absolute"
          right="40px"
          top="24px"
          w="80px"
          h="80px"
          opacity="0"
          _groupHover={{ opacity: "1" }}
          zIndex="1"
          src="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/garden%2Fdescarga.gif?alt=media&token=fec96524-5be2-4920-b75a-3d8a60830869"
        />
        <div className="relative flex w-[200px] h-[200px] border-[1px] border-black bg-black cursor-pointer rounded-full py-8 px-6 justify-center">
          <Image w="auto" h="100%" src={image} alt="stars" />
        </div>
        <Flex flexDirection="column" mt="16px" gap={2} textAlign="center">
          <Heading fontFamily="Avenir" fontSize="xl" color="title">
            {title}{" "}
          </Heading>
          {/* <Text color='text' fontSize='md' lineHeight='1.2'>{description}</Text> */}
        </Flex>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <button className="mt-4 px-4 rounded-lg h-10 text-white bg-[#212123] hover:bg-[#353536]">
            {cta}
          </button>
        </a>
      </Flex>
    </motion.div>
  );
};

const DocsCard = ({ image, description, link, title, cta }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      // initial="offscreen"
      viewport={{ once: true, amount: 0.8 }}
      transition={{ type: "spring", damping: 10, mass: 1.5, stiffness: 120 }}
    >
      <Flex
        flexDir="column"
        w={{ base: "80%", md: "260px" }}
        ml={{ base: "10%", md: "none" }}
        h="auto"
        alignItems="center"
        position="relative"
        role="group"
      >
        <Image
          alt="book cover"
          position="absolute"
          right="40px"
          top="24px"
          w="80px"
          h="80px"
          opacity="0"
          _groupHover={{ opacity: "1" }}
          zIndex="1"
          src="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/garden%2Fdescarga.gif?alt=media&token=fec96524-5be2-4920-b75a-3d8a60830869"
        />
        <div className="relative flex w-full h-[300px]  bg-black cursor-pointer rounded-lg py-8 px-6 justify-center">
          <Image w="auto" h="100%" src={image} alt="stars" />
        </div>

        <Flex flexDirection="column" mt="16px" gap={2} textAlign="center">
          <Heading fontFamily="Avenir" fontSize="xl" color="title">
            {title}
          </Heading>
          {/* <Text color='text' fontSize='md' lineHeight='1.2'>{description}</Text> */}
        </Flex>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <button className="mt-4 px-4 rounded-lg h-10 text-white bg-[#212123] hover:bg-[#353536]">
            {cta}
          </button>
        </a>
      </Flex>
    </motion.div>
  );
};

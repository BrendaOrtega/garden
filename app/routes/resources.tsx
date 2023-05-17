import { Flex, Heading, Text, Image, Container, VStack, useColorModeValue, Button } from "@chakra-ui/react"
import { Link, Links } from "@remix-run/react"
import Layout from "~/components/Layout"
import TabBar from "~/components/TabBar"
import { useMemo, useState } from 'react'
import { motion } from "framer-motion"

export default function Resources() {

    const [active, setActive] = useState(0)

    const handleSelection = (index: number) => {
        setActive(index)
    }

    const activeSection = useMemo(() => {
        switch (active) {
            case 3:
                return <Papers />
            case 2:
                return <Blogs />
            case 1:
                return <Courses />
            default:
                return <Books />
        }
    }, [active])

    return (
        <>
            <Container
                maxW={"container.xxl"}
                p={{ base: '160px 16px 80px 16px', lg: '240px  80px 120px 80px' }}
            >
                <Heading textAlign='center' fontSize={{ base: '4xl', lg: '5xl' }} color='title'>
                    🚀 My best recommendations on ux resources
                </Heading>
                <TabBar onClick={handleSelection} active={active} />
                {activeSection}
            </Container>
        </>
    )
}

const Books = () => (
    <Flex gap={10} justifyContent='center' flexWrap='wrap' >
        <BookCard
            image='https://i.imgur.com/hEHoqE2.jpg'
            title='Dont make me think'
            description='Un imperdible si quieres conocer las bases de una buena experiencia de usuario.'
            link='https://www.fixtergeek.com.ms'
            score='5'

        />
        <BookCard
            image='https://i.imgur.com/dGWNkGa.jpg'
            title='Haz fácil lo imposible'
            description='Con este libro aprenderás a realizar pruebas de usuario (estructura, herramientas, duración, guión, y más).'
            link='https://www.fixtergeek.com.ms'
            score='5'
        />
        {/* <BookCard
            image='https://i.imgur.com/WBELSMr.jpg'
            title='Lean UX'
            description='Conoce cómo aplicar la metogología Lean a la experiencia de usuario.'
            link='https://www.fixtergeek.com.ms'
            score='4'
        /> */}
        <BookCard
            image='https://i.imgur.com/pdtkrye.jpg'
            title='Emotional design'
            description='El ser humano toma decisiones con base en 3 niveles de procesamiento, visceral, conductual y reflexivo. Aquí podrás conocer cómo funciona cada uno y cómo se relaciona con el diseño. '
            link='https://www.fixtergeek.com.ms'
            score='4.5'
        />
        <BookCard
            image='https://i.imgur.com/Ss38sgD.jpg'
            title='El diseño como storytelling'
            description='Como seres humanos, nos encantan las historias, aprende los tipos de historias y cómo contarlas a través de tus productos o servicios.'
            link='https://www.fixtergeek.com.ms'
            score='5'
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
            image='https://i.imgur.com/Ka1NTwB.jpg'
            title='Microcopy'
            description='Aprende qué es el microcopy y qué lineamientos seguir para definirlo en tu interfaz digital.'
            link='https://www.fixtergeek.com.ms'
            score='5'
        />
        <BookCard
            image='https://i.imgur.com/VZaMp0o.jpg'
            title='Experiencia de Usuario'
            description='Conoce la definición de la experiencia de usuario y todos los conceptos básicos alrededor a ella. '
            link='https://www.fixtergeek.com.ms'
            score='4'
        />
        <BookCard
            image='https://i.imgur.com/JKFzKao.jpg'
            title='SCRUM'
            description='Con este libro conocerás las bases de la metodología y cómo aplicarla en tus proyectos.'
            link='https://www.fixtergeek.com.ms'
            score='4'
        />
        <BookCard
            image='https://i.imgur.com/l9hq1cC.jpg'
            title='Design Sprint'
            description='Conoce las bases de la metodología, sus historia, algunos casos aplicados y el paso a paso para aplicarla.'
            link='https://www.fixtergeek.com.ms'
            score='4.5'
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
            image='https://i.imgur.com/KzcDdYL.jpg'
            title='Ortotipografía para diseñadores'
            description='Aprende reglas gramaticales que no conocías y sobre todo el uso correcto de signos de puntuación.'
            link='https://www.fixtergeek.com.ms'
            score='4.5'
        />
        <BookCard
            image='https://i.imgur.com/Wv9auql.jpg'
            title='Business Model Generation'
            description='En este libro aprende los distintos tipos de modelo de negocio, cómo son, cómo se aplican y aprende lo necesario para desarrollar el tuyo.'
            link='https://www.fixtergeek.com.ms'
            score='4.5'
        />
        <BookCard
            image='https://i.imgur.com/f2WtwLf.jpg'
            title='Más que diseño de experiencia'
            description='Desde los conceptos hasta procesos, metologías y ética. Te servirá para dar un recorrido rápido por el mundo de la experiencia de usuario.'
            link='https://www.fixtergeek.com.ms'
            score='4.5'
        />
        <BookCard
            image='https://i.imgur.com/GwySmNv.jpg'
            title='Laws UX'
            description='Conoce de forma simple y práctica las 10 leyes que te ayudarán a tomar decisiones al mapear y diseñar experiencias de usuario.'
            link='https://www.fixtergeek.com.ms'
            score='5'
        />
    </Flex>
)



const Courses = () => (
    <Flex gap={10} justifyContent='center' flexWrap='wrap'>
        <CourseCard
            image='/images/resources/curso-ux.png'
            title='Diseño de producto digital con Lean y UX'
            description='Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem '
            link='https://www.fixtergeek.com.ms'
        />
        <CourseCard
            image='https://i.imgur.com/hIOsTlw.png'
            title='Certificado profesional de Diseño de experiencia del usuario (UX) de Google'
            description='Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem '
            link='https://www.fixtergeek.com.ms'
        />
    </Flex>
)



const Blogs = () => (
    <Flex gap={10} justifyContent='center' flexWrap='wrap'>
        <BlogCard
            image='https://i.imgur.com/c1cnvxV.png'
            title='N/N Group'
            description='Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem '
            link='https://www.nngroup.com/articles/'
            cta='Visit'
        />
        <BlogCard
            image='https://i.imgur.com/TnJciqh.png'
            title='UX Planet'
            description='Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem '
            link='https://uxplanet.org/tagged/espa%C3%B1ol'
            cta='Visit'
        />
        <BlogCard
            image='https://i.imgur.com/2JVshun.png'
            title='UX Collective'
            description='Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem '
            link='https://uxdesign.cc/'
            cta='Visit'
        />
        <BlogCard
            image='https://i.imgur.com/dO4HsQz.png'
            title='UI from mars'
            description='Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem '
            link='https://www.uifrommars.com/blog/'
            cta='Visit'
        />
        <BlogCard
            image='https://i.imgur.com/x46ZXJI.png'
            title='UI matters'
            description='Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem '
            link='https://www.uxmatters.com/top-articles.php'
            cta='Visit'
        />
    </Flex>
)

const Papers = () => (
    <Flex gap={10} justifyContent='center' flexWrap='wrap'>
        <DocsCard
            image='https://i.imgur.com/uetu8B8.png'
            title='Jakob’s Ten Usability Heuristics'
            description='Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem '
            link='https://firebasestorage.googleapis.com/v0/b/garden-66daa.appspot.com/o/NNg%20Jakobs%20Usability%20Heuristics.pdf?alt=media&token=4427e01f-2ee3-4d7e-8f74-d459b2ebd25e'
            cta='Download'
        />
        <DocsCard
            image='https://i.imgur.com/qMJcq8U.png'
            title='The Basics of User Experience Design by IDEO'
            description='Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem '
            link='https://www.free-ebooks.net/computer-internet/The-Basics-of-User-Experience-Design/pdf?dl&preview'
            cta='Visit'
        />
    </Flex>
)





const BookCard = ({ image, description, link, title, score }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            // initial="offscreen"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: "spring", damping: 10, mass: 1.5, stiffness: 120, }}
        >
            <Flex flexDir='column' w={{ base: '80%', md: '260px' }} h='auto' ml={{ base: '10%', md: 'none' }} alignItems='center' position='relative'
                role='group' mb='24px'
            >
                <Image alt='book cover' position='absolute' right='40px' top='24px' w='80px' h='80px' opacity='0'
                    _groupHover={{ opacity: '1' }} zIndex='1'
                    src='https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/garden%2Fdescarga.gif?alt=media&token=fec96524-5be2-4920-b75a-3d8a60830869' />
                <Flex position='relative' w='100%' h='300px' bg={useColorModeValue('second.50', 'rgba(233, 237, 246, 0.05)')} borderRadius='32px' cursor='pointer' p='32px 24px' justifyContent='center' >
                    < Image w='auto' h='100%' src={image} alt='stars' />
                    <Flex _groupHover={{ transform: 'scale(1.1)' }} transition='all .2s ease-out' bg={useColorModeValue('white', '#282C3F')} p='1% 2%' position='absolute' bottom='48px' right='32px' borderRadius='4px' alignItems='center'>
                        <Image
                            alt='rank icon'
                            h='24px' mr='4px' src='./images/coffee.png' />
                        <Text mt='3px' fontSize='sm' color={useColorModeValue('#12141D', 'gray.500')} fontWeight={"medium"}>{score} </Text>
                    </Flex>
                </Flex >
                <Flex flexDirection='column' mt='16px' gap={2} textAlign='center' >
                    <Heading fontFamily='Avenir' fontSize='xl' color='title'>{title}</Heading>
                    <Text color='text' ontSize='md' lineHeight='1.2'>{description}</Text>
                </Flex>
            </Flex >
        </motion.div>
    )
}
const CourseCard = ({ image, description, link, title }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            // initial="offscreen"
            viewport={{ once: true, amount: 0.8 }}
            transition={{ type: "spring", damping: 10, mass: 1.5, stiffness: 120, }}
        >
            <Flex flexDir='column' w={{ base: '80%', md: '320px' }} ml={{ base: '10%', md: 'none' }} h='auto' alignItems='center' position='relative'
                role='group'
            >
                <Image alt='book cover' position='absolute' right='40px' top='24px' w='80px' h='80px' opacity='0'
                    _groupHover={{ opacity: '1' }} zIndex='1'
                    src='https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/garden%2Fdescarga.gif?alt=media&token=fec96524-5be2-4920-b75a-3d8a60830869' />
                <Flex position='relative' w='100%' h='240px' bg={useColorModeValue('second.50', 'rgba(233, 237, 246, 0.05)')} borderRadius='32px' cursor='pointer' p='32px 24px' justifyContent='center' >
                    < Image w='100%' h='auto' src={image} alt='stars' objectFit='cover' borderRadius='16px' />
                    <Flex _groupHover={{ transform: 'scale(1.1)' }} transition='all .2s ease-out' bg={useColorModeValue('white', 'second.900')} p='1% 2%' position='absolute' bottom='48px' right='32px' borderRadius='4px' alignItems='center'>
                        <Image
                            alt='rank icon'
                            h='24px' mr='4px' src='./images/coffee.png' />
                        <Text mt='3px' fontSize='sm' color={useColorModeValue('black', 'gray.500')}>4.5 </Text>
                    </Flex>
                </Flex >
                <Flex flexDirection='column' mt='16px' gap={2} textAlign='center' >
                    <Heading fontFamily='Avenir' fontSize='xl' color='title'>{title}</Heading>
                    {/* <Text color='text' ontSize='md' lineHeight='1.2'>{description}</Text> */}
                </Flex>
            </Flex >
        </motion.div>
    )
}

const BlogCard = ({ image, description, link, title, cta }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            // initial="offscreen"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: "spring", damping: 10, mass: 1.5, stiffness: 120, }}
        >
            <Flex flexDir='column' w={{ base: '80%', md: '260px', lg: '200px' }} ml={{ base: '10%', md: 'none' }} h='auto' alignItems='center' position='relative'
                role='group'
            >
                <Image alt='book cover' position='absolute' right='40px' top='24px' w='80px' h='80px' opacity='0'
                    _groupHover={{ opacity: '1' }} zIndex='1'
                    src='https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/garden%2Fdescarga.gif?alt=media&token=fec96524-5be2-4920-b75a-3d8a60830869' />
                <Flex position='relative' w='200px' h='200px' borderRadius='50%' bg={useColorModeValue('second.50', 'rgba(233, 237, 246, 0.05)')} cursor='pointer' p='32px 24px' justifyContent='center' >
                    < Image w='auto' h='100%' src={image} alt='stars' />
                </Flex >
                <Flex flexDirection='column' mt='16px' gap={2} textAlign='center' >
                    <Heading fontFamily='Avenir' fontSize='xl' color='title'>{title} </Heading>
                    {/* <Text color='text' fontSize='md' lineHeight='1.2'>{description}</Text> */}
                </Flex>
                <a href={link} target='_blank' rel="noopener noreferrer">
                    <Button mt='16px'>{cta}</Button>
                </a>
            </Flex >
        </motion.div>
    )
}


const DocsCard = ({ image, description, link, title, cta }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            // initial="offscreen"
            viewport={{ once: true, amount: 0.8 }}
            transition={{ type: "spring", damping: 10, mass: 1.5, stiffness: 120, }}
        >
            <Flex flexDir='column' w={{ base: '80%', md: '260px' }} ml={{ base: '10%', md: 'none' }} h='auto' alignItems='center' position='relative'
                role='group'
            >
                <Image alt='book cover' position='absolute' right='40px' top='24px' w='80px' h='80px' opacity='0'
                    _groupHover={{ opacity: '1' }} zIndex='1'
                    src='https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/garden%2Fdescarga.gif?alt=media&token=fec96524-5be2-4920-b75a-3d8a60830869' />
                <Flex position='relative' w='100%' h='300px' bg={useColorModeValue('second.50', 'rgba(233, 237, 246, 0.05)')} borderRadius='32px' cursor='pointer' p='32px 24px' justifyContent='center' >
                    < Image w='auto' h='100%' src={image} alt='stars' />
                </Flex >
                <Flex flexDirection='column' mt='16px' gap={2} textAlign='center' >
                    <Heading fontFamily='Avenir' fontSize='xl' color='title'>{title}</Heading>
                    {/* <Text color='text' fontSize='md' lineHeight='1.2'>{description}</Text> */}
                </Flex>
                <a href={link} target='_blank' rel="noopener noreferrer">
                    <Button mt='16px'>{cta}</Button>
                </a>
            </Flex >
        </motion.div>
    )
}
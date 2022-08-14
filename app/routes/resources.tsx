import { Flex, Heading, Text, Box, Image, Container, VStack, Button, Divider } from "@chakra-ui/react"
import { Link, Links } from "@remix-run/react"
import Layout from "~/components/Layout"
import TabBar from "~/components/TabBar"
import { useState } from 'react'

export default function Resources() {

    return (
        <>
            <Container
                maxW={"container.xxl"}
                p={{ base: '160px 16px 80px 16px', lg: '240px  80px 120px 80px' }}
            >
                <Heading textAlign='center' fontSize={{ base: '4xl', lg: '5xl' }} color='title'>
                    My best recommendations on ux resources
                </Heading>
                <TabBar />
                <Flex gap={10} justifyContent='center' flexWrap='wrap'>
                    <BookCard
                        image='https://http2.mlstatic.com/D_NQ_NP_2X_865978-MLM45816618689_052021-F.webp'
                        title='Emotional design'
                        description='Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem '
                        link='https://www.fixtergeek.com.ms'
                    />
                    <BookCard
                        image='https://http2.mlstatic.com/D_NQ_NP_2X_865978-MLM45816618689_052021-F.webp'
                        title='Emotional design'
                        description='Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem '
                        link='https://www.fixtergeek.com.ms'
                    />
                    <BookCard
                        image='https://http2.mlstatic.com/D_NQ_NP_2X_865978-MLM45816618689_052021-F.webp'
                        title='Emotional design'
                        description='Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem '
                        link='https://www.fixtergeek.com.ms'
                    />
                    <BookCard
                        image='https://http2.mlstatic.com/D_NQ_NP_2X_865978-MLM45816618689_052021-F.webp'
                        title='Emotional design'
                        description='Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem '
                        link='https://www.fixtergeek.com.ms'
                    />
                    <BookCard
                        image='https://http2.mlstatic.com/D_NQ_NP_2X_865978-MLM45816618689_052021-F.webp'
                        title='Emotional design'
                        description='Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem '
                        link='https://www.fixtergeek.com.ms'
                    />
                    <BookCard
                        image='https://http2.mlstatic.com/D_NQ_NP_2X_865978-MLM45816618689_052021-F.webp'
                        title='Emotional design'
                        description='Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem '
                        link='https://www.fixtergeek.com.ms'
                    />
                </Flex>
            </Container>
        </>
    )
}



const Cathegories = () => {
    return (
        <VStack
            w='220px'
            align='stretch'
            marginTop={20}
            borderRight='2px solid rgba(77,85,98,.2)'
            paddingRight={4}
            marginRight={8}
        >
            <Type
                text="Libros"
                icon="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/garden%2Ficons8-open-book-emoji.svg?alt=media&token=66a821e7-d1ea-4971-b146-de62ff8818ec"
            />
            <Type
                text="Cursos"
                icon="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/garden%2Ficons8-movie-camera.svg?alt=media&token=3a2f5203-947d-49e2-a143-b584f1dcef72"
            />
            <Type
                text="Papers"
                icon="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/garden%2Ficons8-bookmark-tabs.svg?alt=media&token=07ad2996-2b64-499c-8e73-8b62dc45e935"
            />
            <Type
                text="Blogs"
                icon="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/garden%2Ficons8-card-index.svg?alt=media&token=e1232955-48da-4d22-8572-252d018ff0f1"
            />

        </VStack >
    )
}

const BookCard = ({ image, description, link, title }) => {
    return (
        <Flex flexDir='column' w={{ base: '80%', lg: '260px' }} h='auto' alignItems='center' position='relative'
            role='group'
        >
            <Image position='absolute' right='40px' top='24px' w='80px' h='80px' opacity='0'
                _groupHover={{ opacity: '1' }} zIndex='1'
                src='https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/garden%2Fdescarga.gif?alt=media&token=fec96524-5be2-4920-b75a-3d8a60830869' />
            <Flex position='relative' w='100%' h='auto' bg='secondary.50' borderRadius='32px' cursor='pointer' p='32px 24px' justifyContent='center' >
                < Image w='70%' h='auto' src={image} />
                <Flex _groupHover={{ transform: 'scale(1.1)' }} transition='all .2s ease-out' bg='white' p='1% 2%' position='absolute' bottom='48px' right='32px' borderRadius='4px' alignItems='center'>
                    <Image
                        h='18px' mr='4px' src='https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/garden%2Fstar.svg?alt=media&token=bd8355fc-f2e2-4fdf-9a88-afcabb788aef' />
                    <Text mt='3px' fontSize='sm'>4.5 </Text>
                </Flex>
            </Flex >
            <Flex flexDirection='column' mt='16px' gap={2} textAlign='center' >
                <Heading fontFamily='Avenir' fontSize='xl'>{title}</Heading>
                <Text color='text' fontSize={{ base: 'md', lg: 'lg' }} lineHeight='1.2'>{description}</Text>
            </Flex>
        </Flex >
    )
}
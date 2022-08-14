import { Flex, Heading, Text, Box, Image, Container, VStack, Button, Divider, Spacer } from "@chakra-ui/react"
import { LoaderFunction } from "@remix-run/node"
import { Link, Links, useLoaderData } from "@remix-run/react"
import Layout from "~/components/Layout"
import dbConnection, { type PostType } from "~/db/db.server"


export const loader: LoaderFunction = async () => {
    const db = await dbConnection()
    const posts = await db.Post.find()
    console.log(posts)
    return { posts }
}

export default function blog() {
    const { posts } = useLoaderData()

    return (
        <>
            <Container
                maxW={"container.xxl"}
                padding={{ base: '160px 16px 80px 16px', lg: '240px  80px 120px 80px' }}
            >
                <Heading textAlign='center' fontSize={{ base: '4xl', lg: '5xl' }}>
                    Something to learn today
                </Heading>
                <Flex marginTop={{ base: '40px', lg: '80px' }} justifyContent='flex-start' gap={8} flexWrap='wrap' display={{ base: 'none', lg: 'inherit' }}>
                    {posts.map((post: PostType) => (
                        <CardBlog
                            {...post}
                            key={post.slug}
                            image='https://i.imgur.com/4ESZn5L.png'
                            title={post.title}
                            description={post.body}
                            tag='#Accesibilidad'
                        />

                    ))}
                </Flex>
                <Divider h='2px' bg='#E0E7F7' my='24px' display={{ base: 'none', lg: 'inherit' }} />
                <Flex marginTop={{ base: '40px', lg: '80px' }} justifyContent={{ base: 'center', lg: 'flex-start' }} gap={{ base: '16', lg: '8' }} flexWrap='wrap' >
                    {posts.map((post: PostType) => (
                        <CardPost
                            {...post}
                            key={post.slug}
                            image='https://i.imgur.com/4ESZn5L.png'
                            title={post.title}
                            description={post.body}
                            tag='#Accesibilidad'
                        />
                    ))}
                </Flex>
            </Container>
        </>
    )
}


const CardPost = ({ image, description, title, tag, slug }) => {
    const truncate = (str, no_words, start = 0) => {
        return str.split(' ').splice(start, no_words).join(' ') + '...';
    };
    return (
        <Link to={slug}>
            <Box w={{ base: '100%', lg: '360px' }} borderRadius='16px' cursor='pointer' transition='all 1s ease'>
                <Image src={image} w='100%' h='180px' objectFit='cover' transition='all .5s ease' borderRadius='8px' _hover={{ transform: 'translateY(-8px)', boxShadow: 'rgb(204 204 204 / 80%) 0px 8px 32px 0px' }} />

                <Heading fontFamily='Avenir' fontSize='xl' margin='24px 0px 4px 0px'>{title}</Heading>
                <Text color='text' fontSize='md'>
                    {truncate(description, 36)}
                </Text>
                <Flex mt='16px' gap='2'>
                    <Text as='span' bg='gray.200' p='2px 12px' borderRadius='4px' >🎯 Accesibilidad</Text>
                    <Text as='span' bg='gray.200' p='2px 12px' borderRadius='4px' >🔎 SEO</Text>
                </Flex>
            </Box>
        </Link>
    )
}
const CardBlog = ({ image, description, title, tag, slug }) => {
    const truncate = (str, no_words, start = 0) => {
        return str.split(' ').splice(start, no_words).join(' ') + '...';
    };
    return (
        <Link to={slug}>
            <Flex>
                <Image src={image} objectFit='cover' w='50%' transition='all .5s ease' borderRadius='8px' _hover={{ transform: 'translateY(-8px)', boxShadow: 'rgb(204 204 204 / 80%) 0px 8px 32px 0px' }} />
                <Flex flexDir='column' gap='4' px='32px'>
                    <Heading fontFamily='Avenir' fontSize='3xl' margin='24px 0px 4px 0px'>{title}</Heading>
                    <Text color='text' fontSize='xl'>
                        {truncate(description, 45)}
                    </Text>
                    <Flex mt='16px' gap='2'>
                        <Text as='span' bg='gray.200' p='2px 12px' borderRadius='4px' >👀 Accesibilidad</Text>
                        <Text as='span' bg='gray.200' p='2px 12px' borderRadius='4px' >🔎 SEO</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Link>
    )
}
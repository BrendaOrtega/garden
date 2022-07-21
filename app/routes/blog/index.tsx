import { Flex, Heading, Text, Box, Image, Container, VStack, Button } from "@chakra-ui/react"
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
                py={40}
                px={20}
            >
                <Heading textAlign='center'>
                    Something to learn today
                </Heading>
                <Flex marginTop='48px' justifyContent='flex-start' gap={8} flexWrap='wrap' >
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
    return (
        <Link to={slug}>
            <Box w='400px' bg='#fff' borderRadius='16px' boxShadow='0px 8px 32px 0px rgba(204, 204, 204, 0.25);' p='16px 16px 24px 16px' cursor='pointer' transition='all 1s ease' _hover={{ boxShadow: '0px 8px 32px 0px rgba(204, 204, 204, 0.8);' }}>
                {/* <Box float='right' bg='white' color='black' fontSize='14px' borderRadius='4px' p='2px 4px' width='100px'>{tag}</Box> */}
                <Image src={image} w='100%' h='180px' objectFit='cover' borderRadius='8px' />
                <Heading fontFamily='Avenir' fontSize='20px' margin='24px 0px 4px 0px'>{title}</Heading>
                <Text color='text' lineHeight='1.2'>{description}</Text>
            </Box>
        </Link>
    )
}
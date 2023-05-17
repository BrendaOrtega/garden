import { Flex, Heading, Text, Box, Image, Container, VStack, Button, Divider, Spacer, useColorModeValue } from "@chakra-ui/react"
import { LoaderFunction } from "@remix-run/node"
import { Link, Links, useLoaderData } from "@remix-run/react"
import Layout from "~/components/Layout"
import dbConnection, { type PostType } from "~/db/db.server"
import { motion } from "framer-motion"


export const loader: LoaderFunction = async () => {
    const db = await dbConnection()
    const posts = await db.Post.find({ main: false })
    const main = await db.Post.findOne({ main: true })
    return { posts, main }
}

export default function blog() {
    const { posts, main } = useLoaderData()
    return (
        <>
            <Container
                maxW={"container.xxl"}
                padding={{ base: '160px 16px 80px 16px', lg: '240px  80px 120px 80px' }}
            >
                <Heading textAlign='center' fontSize={{ base: '4xl', lg: '5xl' }} color='title'>
                    📰 Something to read today
                </Heading>
                <Flex w={{ base: '90%', md: '100%' }} margin='0 auto' marginTop={{ base: '40px', lg: '108px' }} gap={{ base: '48px', lg: '80px 48px' }} flexWrap='wrap'  >
                    {posts.map((post: PostType) => (
                        <CardPost
                            {...post}
                            key={post.slug}
                            image={post.metaImage}
                            cover={post.image}
                            title={post.title}
                            description={post.body}
                            tag={post.tag}
                        />
                    ))}
                </Flex>
            </Container>
        </>
    )
}


const CardPost = ({ image, description, title, tag, slug, subTag }) => {
    const truncate = (str, no_words, start = 0) => {
        return str.split(' ').splice(start, no_words).join(' ') + '...';
    };
    return (

        <Box role='group' w={{ base: '100%', md: '300px' }} flexGrow='1' >
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                // initial="offscreen"
                viewport={{ once: true, amount: .2 }}
                transition={{ type: "spring" }}
            >
                <Link to={slug}>
                    <Box borderRadius='16px' cursor='pointer' transition='all 1s ease' position='relative' transition='all .5s ease' _groupHover={{ transform: 'translateY(-16px)' }}>
                        <Box >
                            <Box bg='white' w='40px' h='40px' borderRadius='full' position='absolute' top='16px' zIndex='10' right='16px' display='flex' alignItems='center' justifyContent='center'>
                                <Image w='24px' src="https://i.imgur.com/b83Tl9L.png" />
                            </Box>
                            <Image src={image} alt='blog post main banner' w='100%' h='400px' objectFit='cover' borderRadius='8px' />
                        </Box>
                        <Flex mt='16px' gap='4'>
                            <Text as='span' fontSize='sm' borderRadius='4px' >{tag}</Text>
                            <Text as='span' fontSize='sm' borderRadius='4px' >{subTag}</Text>
                        </Flex>
                        <Heading fontFamily='Avenir' fontSize='xl' margin='8px 0px 4px 0px' color='title' _groupHover={{ color: '#6273BA' }}>{title}</Heading>

                    </Box>
                </Link>
            </motion.div>
        </Box>


    )
}
const CardBlog = ({ image, description, title, tag, slug }) => {
    const truncate = (str, no_words, start = 0) => {
        return str.split(' ').splice(start, no_words).join(' ') + '...';
    };
    return (
        <Link to={slug}>
            <Flex role='group' >
                <Image src={image} alt='blog post banner' objectFit='cover' w='50%' transition='all .5s ease' borderRadius='8px' _groupHover={{ transform: 'translateY(-8px)', boxShadow: useColorModeValue('rgb(204 204 204 / 80%) 0px 8px 32px 0px', ' box-shadow: 0px 8px 32px 0px rgba(0, 0, 0, 1)') }} />
                <Flex flexDir='column' gap='4' px='32px'>
                    <Heading fontFamily='Avenir' fontSize='3xl' margin='24px 0px 4px 0px' color='title' _groupHover={{ color: '#6273BA' }}>{title}</Heading>
                    <Text color='text' fontSize='xl'>
                        {truncate(description, 45)}
                    </Text>
                    <Flex mt='16px' gap='2'>
                        <Text as='span' bg={useColorModeValue('gray.200', 'second.600')} p='2px 12px' borderRadius='4px' >👀 Accesibilidad</Text>
                        <Text as='span' bg={useColorModeValue('gray.200', 'second.600')} p='2px 12px' borderRadius='4px' >🔎 SEO</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Link>
    )
}
import { Flex, Heading, Text, Box, Image, Container, VStack, Button, Divider, Spacer, useColorModeValue } from "@chakra-ui/react"
import { LoaderFunction } from "@remix-run/node"
import { Link, Links, useLoaderData } from "@remix-run/react"
import Layout from "~/components/Layout"
import dbConnection, { type PostType } from "~/db/db.server"


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
                    Something to read today 📰
                </Heading>
                {/* <Flex marginTop={{ base: '40px', lg: '80px' }} justifyContent='flex-start' gap={8} flexWrap='wrap' display={{ base: 'none', lg: 'inherit' }}>
                    {main &&
                        <CardBlog
                            {...main}
                            key={main.slug}
                            image={main.metaImage}
                            description={main.body}
                            tag='#Accesibilidad'
                        />

                    }
                </Flex> */}
                {/* <Divider h='2px' bg={useColorModeValue('rgba(224, 231, 247,1)', 'rgba(224, 231, 247,.1)')} my='40px' display={{ base: 'none', lg: 'inherit' }} /> */}
                <Flex marginTop={{ base: '40px', lg: '108px' }} gap={{ base: '16px 16px', lg: '80px 48px' }} flexWrap='wrap'  >
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
        <Box role='group' w={{ base: '100%', md: '300px' }} flexGrow='1'>
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
        </Box>
        // <Box w='360px' flexGrow={{ base: '1', lg: 'inherit' }} role='group'>
        //     <Link to={slug}>
        //         <Box borderRadius='16px' cursor='pointer' transition='all 1s ease'>
        //             <Image src={image} alt='blog post main banner' w='100%' h='200px' objectFit='cover' transition='all .5s ease' borderRadius='8px' _groupHover={{ transform: 'translateY(-8px)', boxShadow: useColorModeValue('rgb(204 204 204 / 80%) 0px 8px 32px 0px', 'box-shadow: 0px 8px 32px 0px rgba(0, 0, 0, 1)') }} />
        //             <Heading fontFamily='Avenir' fontSize='xl' margin='24px 0px 4px 0px' color='title' _groupHover={{ color: '#6273BA' }}>{title}</Heading>
        //             <Text color='text' fontSize='md'>
        //                 {truncate(description, 36)}
        //             </Text>
        //             <Flex mt='16px' gap='2'>
        //                 <Text as='span' bg={useColorModeValue('gray.200', 'second.600')} p='2px 12px' borderRadius='4px' >🎯 Accesibilidad</Text>
        //                 <Text as='span' bg={useColorModeValue('gray.200', 'second.600')} p='2px 12px' borderRadius='4px' >🔎 SEO</Text>
        //             </Flex>
        //         </Box>
        //     </Link>
        // </Box>
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
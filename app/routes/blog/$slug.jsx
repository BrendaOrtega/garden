import { Box, Container, Heading, Flex, Text, Button, Image } from "@chakra-ui/react";
import { Link } from "@remix-run/react"
import { json, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import MarkDown from "~/components/MarkDown";
import styles from "~/styles/markdown.css"
import { HiOutlineArrowSmLeft } from 'react-icons/hi';
import dbConnection from "~/db/db.server"


export function links() {
    return [{ rel: "stylesheet", href: styles }]
}
export async function loader({ params }) {
    const slug = params.slug
    const db = await dbConnection()
    const post = await db.Post.findOne({ slug })
    if (!slug) {
        return redirect('/blog')
    }
    return { post }
}

export default function () {
    const { post } = useLoaderData()
    console.log("not null", post)
    return (
        <Box>
            <Box
                w="100%"
                h={500}
                bgSize="cover"
                bgPos={"center"}
                bgImg={"https://images.pexels.com/photos/161863/edinburgh-carlton-hill-landscape-scotland-161863.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}
            // bgImg={loaderData.coverImage} 
            />
            <Container
                paddingY={"8"}
                maxW={"container.sm"}
            >
                <Link to="/">
                    <Button
                        variant={"ghost"}
                        fontSize={24}
                    >
                        <HiOutlineArrowSmLeft />
                    </Button>
                </Link>

                <Heading
                    paddingTop={"8"}
                    paddingBottom={"4"}
                    fontSize={48}
                >
                    {post.title}
                </Heading>
                <Flex
                    justifyContent={"space-between"}
                    marginBottom={12}>
                    <Flex>
                        <Box
                            w={12}
                            h={12}
                            borderRadius={"50%"}
                            bgSize="cover"
                            bgPos={"center"}
                            bgImg={post.photoUrl || ''}
                        />
                        <Box
                            paddingLeft={2}
                        >
                            <Text
                                fontWeight={"bold"}
                            >
                                Brenda Gonzalez Ortega
                                {/* {post.authorName} */}
                            </Text>
                            <Text
                                color={"#767676"}
                            >{post.authorAt}</Text>
                        </Box>
                    </Flex>
                    <Text
                        color={"#767676"}
                    >{post.createdAt}</Text>
                </Flex>
                <MarkDown>
                    {post.body}
                </MarkDown>
            </Container>
        </Box>
    )
}
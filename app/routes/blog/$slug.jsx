import { Box, Container, Heading, Flex, Text, Button, Image } from "@chakra-ui/react";
import { Link } from "@remix-run/react"
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import MarkDown from "~/components/MarkDown";
import styles from "~/styles/markdown.css"
import { HiOutlineArrowSmLeft } from 'react-icons/hi';
import { PrismaClient } from '@prisma/client'

export function links() {
    return [{ rel: "stylesheet", href: styles }]
}
export async function loader({ params }) {
    const prisma = new PrismaClient()
    const { slug } = params
    const data = await prisma.post.findFirst({
        where: {
            slug
        }
    })

    return data
}

export default function () {
    const loaderData = useLoaderData()
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
                    Título del post de blog
                    {/* {loaderData.title} */}
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
                            bgImg={loaderData.photoUrl}
                        />
                        <Box
                            paddingLeft={2}
                        >
                            <Text
                                fontWeight={"bold"}
                            >
                                Brenda Gonzalez Ortega
                                {/* {loaderData.authorName} */}
                            </Text>
                            <Text
                                color={"#767676"}
                            >{loaderData.authorAt}</Text>
                        </Box>
                    </Flex>
                    <Text
                        color={"#767676"}
                    >{loaderData.createdAt}</Text>
                </Flex>
                <MarkDown>
                    {loaderData.body}
                </MarkDown>
            </Container>
        </Box>
    )
}
import {
  Box,
  Container,
  Heading,
  Flex,
  Text,
  Button,
  Image,
  Divider,
} from "@chakra-ui/react";
import { Link } from "@remix-run/react";
import { json, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import MarkDown from "~/components/MarkDown";
import styles from "~/styles/markdown.css";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import dbConnection from "~/db/db.server";
import { TracingBeam } from "../../components/TracingBeam";
import { Parallax } from "react-parallax";

const twitter =
  "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/garden%2Fmedia%2Ftwitter.svg?alt=media&token=8cc3ffaa-806f-420b-a50d-957511961cd8";
const facebook =
  "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/garden%2Fmedia%2Ffacebook.svg?alt=media&token=6fcb28c2-bc83-4fdb-a304-7a49d40f44d8";
const linkedin =
  "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/garden%2Fmedia%2Ficons8-linkedin.svg?alt=media&token=3e7d9b8e-9553-4856-ac01-e804783344cd";
const link =
  "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/garden%2Fmedia%2Flink.svg?alt=media&token=d11a8a8d-4e68-4da3-b539-0ab879797c3f";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export async function loader({ params }) {
  const slug = params.slug;
  const db = await dbConnection();
  const post = await db.Post.findOne({ slug });
  if (!slug) {
    return redirect("/blog");
  }
  return { post };
}

export default function () {
  const { post } = useLoaderData();
  return (
    <Box>
      <div
        style={{ backgroundImage: `url('${post.cover}')` }}
        className="w-full h-[280px] lg:h-[540px] bg-cover bg-bottom bg-fixed	 grayscale-[80%]"
      />
      {/* <Box
        w="100%"
        minH={{ base: "280px", lg: "540px" }}
        bgSize="cover"
        bgPos={"center"}
        bgImg={post.cover}
        filter="grayscale(90%)"
        // bgImg={loaderData.coverImage}
      /> */}
      {/* <Parallax
        className=" w-full h-[280px] lg:h-[540px] bg-cover bg-bottom	 grayscale-[80%] "
        bgImage={post.cover}
        bgImageAlt="the cat"
        strength={200}
      ></Parallax> */}
      <TracingBeam className="px-6 ">
        <Container paddingY={"8"} maxW={"container.sm"} position="relative">
          <Link to="/blog">
            <Button
              top={{ base: "20px", lg: "40px" }}
              position="absolute"
              left={{ base: "16px", lg: "-54px" }}
              variant={"ghost"}
              fontSize={24}
            >
              <HiOutlineArrowSmLeft />
            </Button>
          </Link>
          <Heading
            paddingBottom={"4"}
            fontSize={{ base: "32px", lg: "48" }}
            lineHeight={{ base: "110%", lg: "130%" }}
            mt={{ base: "40px", lg: "inherit" }}
            mb={{ base: "8px", lg: "inherit" }}
            color="title"
          >
            {post.title}
          </Heading>
          <Flex
            mb={{ base: "16px", lg: "inherit" }}
            justifyContent="space-between"
            alignItems="flex-start"
            flexWrap={{ base: "wrap", lg: "no-wrap" }}
          >
            <Flex
              justifyContent={"space-between"}
              marginBottom={{ base: "16px", lg: "32px" }}
            >
              <Flex>
                <Box
                  w={12}
                  h={12}
                  borderRadius={"50%"}
                  bgSize="cover"
                  bgPos={"center"}
                  bgImg={post.authorImage || ""}
                />
                <Box paddingLeft={2}>
                  <Text mb="0px" fontWeight={"bold"}>
                    Brenda Gonzalez Ortega
                    {/* {post.authorName} */}
                  </Text>
                  <Text color={"#767676"}>{post.authorAt}</Text>
                </Box>
              </Flex>
              <Text color={"#767676"}>{post.createdAt}</Text>
            </Flex>
            <Flex bg="pìnk" gap="2">
              <Image
                w="24px"
                transition="all 1s ease"
                _hover={{ opacity: "1" }}
                cursor="pointer"
                opacity=".3"
                src={twitter}
                alt="twitter icon"
              />
              <Image
                w="24px"
                transition="all 1s ease"
                opacity=".3"
                _hover={{ opacity: "1" }}
                cursor="pointer"
                src={facebook}
                alt="facebook icon"
              />
              <Image
                w="24px"
                transition="all 1s ease"
                opacity=".3"
                _hover={{ opacity: "1" }}
                cursor="pointer"
                src={linkedin}
                alt="linkedin icon"
              />
              <Image
                w="24px"
                transition="all 1s ease"
                opacity=".3"
                _hover={{ opacity: "1" }}
                cursor="pointer"
                src={link}
                alt="copy link icon"
              />
            </Flex>
          </Flex>
          <Divider bg="#373C50" />
          <MarkDown>{post.body}</MarkDown>
        </Container>
      </TracingBeam>
    </Box>
  );
}

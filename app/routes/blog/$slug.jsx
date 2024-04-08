import {
  Box,
  Container,
  Heading,
  Flex,
  Text,
  Button,
  Image,
  Divider,
  useColorModeValue,
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

// const twitter =
//   "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/garden%2Fmedia%2Ftwitter.svg?alt=media&token=8cc3ffaa-806f-420b-a50d-957511961cd8";
// const facebook =
//   "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/garden%2Fmedia%2Ffacebook.svg?alt=media&token=6fcb28c2-bc83-4fdb-a304-7a49d40f44d8";
// const linkedin =
//   "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/garden%2Fmedia%2Ficons8-linkedin.svg?alt=media&token=3e7d9b8e-9553-4856-ac01-e804783344cd";
// const link =
//   "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/garden%2Fmedia%2Flink.svg?alt=media&token=d11a8a8d-4e68-4da3-b539-0ab879797c3f";
const twitter =
  "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/external%2Ftwitter-blue.svg?alt=media&token=24dcc7cc-1de7-461d-8ab1-8f1fd9a63d26";
const linkedin =
  "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/external%2Fin-blue.svg?alt=media&token=86cad868-5f6d-471c-b4fd-e35e389b797a";
const facebook =
  "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/external%2Finsta-blue.svg?alt=media&token=60b894e4-a5cc-4eed-b692-aba9496349a9";
const link =
  "https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/external%2Fbe-blue.svg?alt=media&token=162cb60e-4cd6-4dd3-8735-fa0551538cd8";

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
            <Flex gap="2">
              <Image
                w="24px"
                opacity={useColorModeValue(".7", ".5")}
                transition="all 1s ease"
                _hover={{ opacity: ".3" }}
                cursor="pointer"
                src="/images/twitter-blue-dark.svg"
                alt="twitter icon"
              />
              <Image
                w="24px"
                opacity={useColorModeValue(".7", ".5")}
                transition="all 1s ease"
                _hover={{ opacity: ".3" }}
                cursor="pointer"
                src="/images/face.svg"
                alt="facebook icon"
              />
              <Image
                w="24px"
                opacity={useColorModeValue(".7", ".5")}
                transition="all 1s ease"
                _hover={{ opacity: ".3" }}
                cursor="pointer"
                src="/images/in-blue-dark.svg"
                alt="linkedin icon"
              />
              <Image
                w="24px"
                opacity={useColorModeValue(".7", ".5")}
                transition="all 1s ease"
                _hover={{ opacity: ".3" }}
                cursor="pointer"
                src="/images/link.svg"
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

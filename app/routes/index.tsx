import { Image, Text } from "@chakra-ui/react";
import { Link } from "@remix-run/react";
import Layout from "~/components/Layout"

export default function Index() {
  return (
    <Layout>
      <Link to="/contact">
        <Text
          flex="1"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
        </Text>
      </Link>
      <Image
        flex="1"
        src="/images/titor.png" />
    </Layout>
  )
}
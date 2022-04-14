import { Text } from "@chakra-ui/react"
import { Link } from "@remix-run/react"
import Layout from "~/components/Layout"
import styles from "~/styles/contact.css"

export function links() {
    return [{ rel: "stylesheet", href: styles }];
}

export default function Contact() {
    return (
        <Layout>
            <Link to="/">
                <Text className="title">
                    pelusas
                </Text>
            </Link>
            <Text>
                peludas
            </Text>
        </Layout>
    )
}
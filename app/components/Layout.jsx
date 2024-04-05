import { Container, Flex, Box, ControlBox } from "@chakra-ui/react";

export default function Layout({ list, body }) {
  return (
    <section>
      <div className="max-w-7xl mx-auto ">
        <Flex>{body}</Flex>
        <Flex justifyContent="center">{list}</Flex>
      </div>
    </section>
  );
}

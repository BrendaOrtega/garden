import { Flex, Box, Text, Container } from "@chakra-ui/react";

export default function Nav() {
    return (
        <Box overflowX='scroll' m={{ base: '32px auto 40px', lg: '54px auto 80px' }}>
            <Container bg='second.900' p='8px 12px' borderRadius='40px' display='flex' w={{ base: '500px', lg: 'auto' }}>
                <TabActive text='📖 Libros' />
                <TabActive text='🎥 Courses' />
                <TabActive text='📇 Blogs' />
                <TabActive text='📑 Papers' />
            </Container>
        </Box>
    )
}


const TabActive = ({ text }) => {
    return (
        <Flex w='138px' bg='white' h={10} alignItems='center' textAlign='center' justifyContent='center' borderRadius='20px'>
            <Text as='span'>
                {text}
            </Text>
        </Flex>
    )
}
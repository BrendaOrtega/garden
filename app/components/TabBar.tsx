import { Flex, Box, Text, Container, useColorModeValue } from "@chakra-ui/react";

export default function Nav({ onClick, active }: { active: number, onClick: (arg0: number) => void }) {
    return (
        <Box overflowX={{ base: 'scroll', lg: 'inherit' }} m={{ base: '32px auto 40px', lg: '54px auto 80px' }}>
            <Container bg='#141823' p='8px 12px' borderRadius='40px' display='flex' w={{ base: '500px', lg: 'auto' }}>
                <TabActive
                    onClick={() => onClick(0)}
                    isActive={active === 0} text='📖 Libros' />
                <TabActive
                    onClick={() => onClick(1)}
                    isActive={active === 1} text='🎥 Courses' />
                <TabActive
                    onClick={() => onClick(2)}
                    isActive={active === 2} text='📇 Blogs' />
                <TabActive
                    onClick={() => onClick(3)}
                    isActive={active === 3} text='📑 Papers' />
            </Container>
        </Box>
    )
}


const TabActive = ({ onClick, text, isActive }: { onClick: () => void; text: string, isActive: boolean }) => {
    const activeBg = useColorModeValue('white', 'white')
    const inactiveBg = 'transparent'
    const activeColor = useColorModeValue('blue', 'blue')
    const inactiveColor = useColorModeValue('gray.500', 'gray.500')
    return (
        <Flex
            onClick={onClick}
            color={isActive ? activeColor : inactiveColor}
            cursor='pointer' w='138px' bg={isActive ? activeBg : inactiveBg} h={10} alignItems='center' textAlign='center' justifyContent='center' borderRadius='20px'>
            <Text as='span' >
                {text}
            </Text>
        </Flex>
    )
}
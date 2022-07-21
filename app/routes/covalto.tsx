import { Flex, Heading, Text, Box, Image, Container, VStack, Button } from "@chakra-ui/react"
import { Link, Links } from "@remix-run/react"
import Layout from "~/components/Layout"

export default function covalto() {
    return (
        <>
            <Container
                maxW={"container.xxl"}
                py={20}
                px={20}
            >
                <Box textAlign='center' m='80px 0 120px 0' >
                    <Heading fontSize='36px' my={8} textAlign='center'>
                        Proyecto 1
                    </Heading >
                    <Text color='text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas quis error.</Text>
                    <Image src='https://i.imgur.com/tf5AyMJ.png' w='50%' margin='48px auto' />
                </Box>
                <Box p='5%' borderRadius='24px' bg='#F1F2F6' my='80px' >
                    <Heading fontSize='36px' m='0px 0 80px 0' textAlign='center'>
                        Project Overview
                    </Heading >
                    <Flex gap={8} alignItems='stretch'>
                        <Box w='500px' flexGrow='3'>
                            <Heading fontSize='24px'>Challenge</Heading>
                            <Text>Tarjeta de crédito empresarial busca ofrecer a cada uno de sus clientes un proceso de solicitud de crédito 100% digital por medio de una aplicación móvil que además les permita gestionar los gastos de su compañía, administrar usuarios, asignar tarjetas adicionales con restricciones en cuanto a la categorización de gastos y monitorear en tiempo real los movimientos de la línea de crédito. </Text>
                            <br />
                            <Heading fontSize='24px'>Objectives</Heading>
                            <Text>Tarjeta de crédito empresarial busca ofrecer a cada uno de sus clientes un proceso de solicitud de crédito 100% digital por medio de una aplicación móvil que además les permita gestionar los gastos de su compañía, administrar usuarios, asignar tarjetas adicionales con restricciones en cuanto a la categorización de gastos y monitorear en tiempo real los movimientos de la línea de crédito. </Text>

                        </Box>
                        <hr style={{ width: '1px', height: '300px', backgroundColor: 'rgba(0,0,0,.1)' }} />
                        <Box w='200px' flexGrow='1'>
                            <Heading fontSize='24px'>Scope</Heading>
                            <Text>Aplicación móvil End-to-End (IOS & Android nativas)</Text>
                            <Heading fontSize='24px'>Tools</Heading>
                            <Text>Aplicación móvil End-to-End (IOS & Android nativas)</Text>
                            <Heading fontSize='24px'>Role</Heading>
                            <Text>Aplicación móvil End-to-End (IOS & Android nativas)</Text>
                            <Heading fontSize='24px'>Duration</Heading>
                            <Text>A12 meses</Text>
                        </Box>
                    </Flex>
                </Box>
                <Flex my={14}>
                    <Box>
                        <Heading size='xl' mb={4} textAlign='left'>
                            0.1 Empathy
                        </Heading >
                        <Image w='160px' src='./images/mark3.svg' />
                    </Box>
                    <Box>
                        <Text mb={4} color='text'>User research is intended to deepen the understanding of users, their frustrations and expectations, their needs, limitations, reasoning and objectives.</Text>
                        <Text mb={4} color='text'>User research is intended to deepen the understanding of users, their frustrations and expectations, their needs, limitations, reasoning and objectives.</Text>
                        <Heading mb={2} size='md'>Research Goals</Heading>
                        <Text mb={4} color='text'>User research is intended to deepen the understanding of users, their frustrations and expectations, their needs, limitations, reasoning and objectives.</Text>
                        <Heading mb={2} size='md'>Research Goals</Heading>
                        <Text color='text'>User research is intended to deepen the understanding of users, their frustrations and expectations, their needs, limitations, reasoning and objectives.</Text>

                    </Box>

                </Flex>
                <hr style={{ width: '100%', height: '1px', backgroundColor: 'rgba(0,0,0,.1)' }} />
                <Flex my={14}>
                    <Box>
                        <Box w='180px' h={1} bg='#F2C94C'></Box>
                        <Heading size='xl' mb={4} textAlign='left'>
                            0.1 Empathy
                        </Heading >
                    </Box>
                    <Box>
                        <Text mb={4} color='text'>User research is intended to deepen the understanding of users, their frustrations and expectations, their needs, limitations, reasoning and objectives.</Text>
                        <Text mb={4} color='text'>User research is intended to deepen the understanding of users, their frustrations and expectations, their needs, limitations, reasoning and objectives.</Text>
                        <Heading mb={2} size='md'>Research Goals</Heading>
                        <Text mb={4} color='text'>User research is intended to deepen the understanding of users, their frustrations and expectations, their needs, limitations, reasoning and objectives.</Text>
                        <Heading mb={2} size='md'>Research Goals</Heading>
                        <Text color='text'>User research is intended to deepen the understanding of users, their frustrations and expectations, their needs, limitations, reasoning and objectives.</Text>

                    </Box>

                </Flex>
                <hr style={{ width: '100%', height: '1px', backgroundColor: 'rgba(0,0,0,.1)' }} />
                <Flex my={14}>
                    <Box>
                        <Box w='180px' h={1} bg='#F2C94C'></Box>
                        <Heading size='xl' mb={4} textAlign='left'>
                            0.1 Empathy
                        </Heading >
                    </Box>
                    <Box>
                        <Text mb={4} color='text'>User research is intended to deepen the understanding of users, their frustrations and expectations, their needs, limitations, reasoning and objectives.</Text>
                        <Text mb={4} color='text'>User research is intended to deepen the understanding of users, their frustrations and expectations, their needs, limitations, reasoning and objectives.</Text>
                        <Heading mb={2} size='md'>Research Goals</Heading>
                        <Text mb={4} color='text'>User research is intended to deepen the understanding of users, their frustrations and expectations, their needs, limitations, reasoning and objectives.</Text>
                        <Heading mb={2} size='md'>Research Goals</Heading>
                        <Text color='text'>User research is intended to deepen the understanding of users, their frustrations and expectations, their needs, limitations, reasoning and objectives.</Text>

                    </Box>

                </Flex>
            </Container>
        </>
    )
}

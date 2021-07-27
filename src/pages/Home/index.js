import React, {useState} from 'react'
import {AddIcon, EditIcon, DeleteIcon } from '@chakra-ui/icons'
import { Flex, 
    Image, Select,Box, Input,
     Text, Divider,Button,IconButton, 
} from "@chakra-ui/react"
import Logo from '../../assets/logo.svg'
import Background from '../../assets/Background infos.svg'
import { BiDollarCircle, BiEdit } from 'react-icons/bi';
import { RiTodoLine } from 'react-icons/ri';
import BackgroundButton from '../../assets/Background card.svg'
import { FiTrash } from 'react-icons/fi';
import CategoryModal from './CategoryModal'
import { Category } from '../../components'
import { ShowHortaliça } from '../../components'




export const Home = () => {
    return (

        
        
        <Flex
            bg='#E5E5E5'
            flexDirection='column'
            justifyContent='space-between'
            minHeight='100vh'
            
            >
                <Flex
                bg='#fff'
                height='80px'
                maxwidth='1920px'
                
                justifyContent='center'
                
                
                >
                    
                    <Image 
                    src={Logo}
                    alt='Logo Hortinja'
                    paddingLeft='10%'
                    paddingRight='10%'
                    ></Image>
                    

                    
                
                    <Select
                    bg='#D9D2CF'
                    borderRadius='100px'
                    height='56px'
                    paddingY='12px'
                    fontFamily='poppins'
                    fontWeight='400'
                    fontSize='18px'
                    
                    
                    ></Select>
                    
                
                    <Select
                    bg='#D9D2CF'
                    borderRadius='100px'
                    height='56px'
                    paddingLeft='16px'
                    paddingY='12px'
                    fontFamily='poppins'
                    fontWeight='400'
                    fontSize='18px'
                    marginRight='10%'
                    >

                    </Select>
                
                
                </Flex>  
            
            
            <Flex
                maxWidth='816px'
                maxHeight='244px'
                alignItems='center'
                marginTop='32px'
                marginX='15%'
                flexDirection='column'
                >
                    
                    
                    
                <Flex
                flexDirection='column'
                > 
                    <Image
                    src={Background}
                    alt='Imagem de fundo'
                    position='relative'
                    
                    
                    >
                        
                    </Image> 
                 </Flex>      
                    

                <Flex
                    justifyContent='space-around'
                    position='absolute'
                    paddingTop='50px'
                    
                    
                    
                    
                    >
                        
                    <Flex
                        width='360px'
                        height='160px'
                        bg='#fff'
                        opacity='85%'
                        borderRadius='32px'
                        justifyContent='center'
                        marginRight='16px'
                        justifyContent='flex-start'
                        paddingX='2'>
                        
                            
                        <Flex
                            flexDirection='column'>
                            
                            <Text
                            paddingTop='10px'
                            fontFamily='Poppins'><b>Registros</b></Text>

                            <Text
                            fontFamily='Poppins'>Número de registros da Horta</Text>

                            <Flex
                            flexDirection='row'
                            alignItems='center'
                            paddingTop='40px'
                            paddingX='50px'
                            fontWeight='700'
                            fontSize='36px'
                            fontFamily='Poppins'
                            >
                                <RiTodoLine/>
                                <Text
                            ><b>#029</b></Text>
                            
                            </Flex>

                        

                        </Flex>

                    </Flex>
                            
                        


                    <Flex
                        width='360px'
                        height='160px'
                        bg='#fff'
                        borderRadius='32px'
                        justifyContent='center'
                        marginLeft='16px'
                        justifyContent='flex-start'
                        paddingX='2'
                        opacity='85%'
                        
                        >   
                            
                        <Flex
                            flexDirection='column'>
                            
                            <Text
                            paddingTop='10px'
                            fontFamily='Poppins'><b>Valor Total</b></Text>

                            <Text
                            fontFamily='Poppins'>Preço total da Horta</Text>

                            <Flex
                            flexDirection='row'
                            alignItems='center'
                            paddingTop='40px'
                            paddingX='50px'
                            fontWeight='700'
                            fontSize='36px'
                            fontFamily='Poppins'
                            >
                                <BiDollarCircle/>
                                <Text
                            ><b>R$ 2.099,00</b></Text>
                            
                            </Flex>

                        </Flex>
                            
                    </Flex>
                        
                </Flex>

                    
                    
            </Flex>


            <Divider
            height='1px'
            bg='#111111'
            marginTop='100px'
            width='1080px'
            borderRadius='30px'
            alignSelf='center'></Divider>

            <Flex
            
            margin='20px'
            justifyContent='center'
           
            >
                
                
                <Button colorScheme="green"
            width='360px'
            marginTop='5px'
            marginRight='16px'
            borderRadius='100px'
            fontFamily='Poppins'><IconButton
            aria-label='Adicionar Hortaliça'
            icon={<AddIcon/>}
            marginX='2'
            variant='ghost'
            onClick={() => console.log('Adicionar Hortaliça')}/>Adicionar Hortaliça</Button>

                <Button colorScheme="green"
            width='360px'
            marginLeft='16px'
            marginTop='5px'
            fontFamily='Poppins'
            borderRadius='100px'><IconButton
            aria-label='Adicionar Categoria'
            icon={<AddIcon/>}
            marginX='2'
            variant='ghost'
            onClick={() => console.log('Adicionar Categoria')}/>Adicionar Categoria</Button>
            
            </Flex>

            <Box>
                <Category name='Legume' _id=''/>
            </Box>

            <Flex>
                <ShowHortaliça name='Cenoura' shade='Laranja' image='https://images.unsplash.com/photo-1445282768818-728615cc910a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlf
                Hx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80' 
                avaragePrice='5,00'
                 measurement='kg'
                  descrition='Cenoura'
                   categoryId='Legume'
                   openEditModal={() => console.log('abrir modal de edição')}
                   openDeleteModal={() => console.log('abrir modal de exclusão')}/>
            </Flex>

            <Divider
            height='1px'
            bg='#111111'
            marginTop='100px'
            width='1080px'
            borderRadius='30px'
            alignSelf='center'></Divider>


            <Box marginY='4'>
            <Text textAlign='center' fontSize='15px' color='gray'>
            Copyright © 2021 Feito com ❤ por Kazap Tecnologia - Todos os direitos reservados
            </Text>
            </Box>




        </Flex>

    )

}
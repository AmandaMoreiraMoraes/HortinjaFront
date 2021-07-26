import React from 'react'
import {AddIcon, EditIcon } from '@chakra-ui/icons'
import { Flex, 
    Image, Select,Box, Input,
     Text, Divider,Button,IconButton, Container
} from "@chakra-ui/react"
import Logo from '../../assets/logo.svg'
import Background from '../../assets/Background infos.svg'
import { BiDollarCircle } from 'react-icons/bi';
import { RiTodoLine } from 'react-icons/ri';
import BackgroundButton from '../../assets/Background card.svg'




export const Home = () => {
    return (

        <Flex
            bg='#E5E5E5'
            flexDirection='column'
            //justifyContent='space-between'
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
                    
                    
                    >
                        
                    </Image> 
                 </Flex>      
                    

                <Flex
                    justifyContent='space-around'
                    
                    
                    
                    >
                        
                    <Flex
                        width='360px'
                        height='160px'
                        bg='#fff'
                        borderRadius='32px'
                        justifyContent='center'
                        paddingLeft='16px'
                        justifyContent='flex-start'>
                        
                            
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
                        paddingLeft='16px'
                        justifyContent='flex-start'
                        
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
            variant='ghost'/>Adicionar Hortaliça</Button>

                <Button colorScheme="green"
            width='360px'
            marginLeft='16px'
            marginTop='5px'
            fontFamily='Poppins'
            borderRadius='100px'><IconButton
            aria-label='Adicionar Categoria'
            icon={<AddIcon/>}
            marginX='2'
            variant='ghost'/>Adicionar Categoria</Button>
            
            </Flex>

            <Flex>
                <Text
                fontWeight='700'
                fontSize='36px'
                fontFamily='Poppins'
                marginX='100px'
                ><b>Verduras <IconButton aria-label='Editar Verduras ' icon={<EditIcon/>} marginX='2' variant='ghost' size='5%'/></b></Text>
            </Flex>

            <Flex
            width='1080px'
            height='380px'
            justifyContent='space-between'
            flexDirection='row'
            marginX='100px'>
                
                
                <Button
                width='340px'
                height='380px'
                borderRadius='32px'
                bg='#FBFAFA'
                position='relative'
                >
                

                    
                    
                        
                        
                            
                            <Image
                        marginBottom='200px'
                        position='absolute'
                        src={BackgroundButton}
                        alt='Background Card'
                        position='relative'
                
                    >
                            </Image>    

                        
                            
                            <Image
                                src='https://images.unsplash.com/photo-1604335310236-0ca3d4e4afcc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80'
                                 width='100px'
                                height='100px'
                                borderRadius='100px'
                                position='absolute'
                                marginRight='180px'
                                marginBottom='230px'

                                

                        >

                            </Image>
                            


                        
                    
                    
                    

                      

                    
                    
                    
                    
                    
                    
                    
                    

                    
                </Button>
            
            
            
            </Flex>

                    
                    
        </Flex>  

                
            
        

    
        
    )
}

    
    



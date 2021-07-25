import React from 'react'
//import { } from '@chakra-ui/icons'
import { Flex, Image, Select,Box, Input, Text
} from "@chakra-ui/react"
import Logo from '../../assets/logo.svg'
import Background from '../../assets/Background infos.svg'


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
                
                   
                
              <Box
              > 
                <Image
                src={Background}
                alt='Imagem de fundo'
                
                
                >
                    
                </Image>    
                

                <Flex
                justifyContent='space-around'
                
                
                >
                    
                        <Flex
                    width='360px'
                    height='160px'
                    bg='#fff'
                    borderRadius='32px'
                    justifyContent='center'
                    textAlign='right'>

                    

                        </Flex>
                    


                        <Flex
                    width='360px'
                    height='160px'
                    bg='#fff'
                    borderRadius='32px'
                    justifyContent='center'
                    paddingLeft='16px'
                    >   
                        <Text
                        ><b>Valor Total</b></Text>

                        </Flex>
                    
                </Flex>
                </Box> 

                    
                
            
            </Flex>  

        </Flex>
    )
}

    
    



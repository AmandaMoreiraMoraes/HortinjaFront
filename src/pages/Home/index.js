import React from 'react'
//import { } from '@chakra-ui/icons'
import { Flex, Image, Select,Box, Input
} from "@chakra-ui/react"
import Logo from '../../assets/logo.svg'


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
            width='1920px'
            
            >
                <Image 
                src={Logo}
                alt='Logo Hortinja'
                paddingLeft='10%'
                ></Image>

                <Select
                bg='#D9D2CF'
                borderRadius='100px'
                height='56px'
                width='320px'
                paddingY='12px'
                marginX='144px'
                fontFamily='poppins'
                fontWeight='400'
                fontSize='18px'
                
                
                ></Select>

                <Input>
                </Input>

            </Flex>

    </Flex>
    )


}
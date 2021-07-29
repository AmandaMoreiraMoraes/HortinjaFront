import React from 'react'
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'
import { Text, Flex, IconButton } from '@chakra-ui/react'

const Category = (props) => {

    return(

        <Flex

        
        >
                <Text
                fontWeight='700'
                fontSize='36px'
                fontFamily='Poppins'
                marginLeft='100px'
                
                
                
                ><b>{props.name} </b> </Text>


                <IconButton aria-label='Editar Categoria ' icon={<EditIcon/>} marginX='2'
                 variant='ghost' fontSize='35px' onClick={() => console.log('Editar Categoria')}/>

                 
            </Flex>


    )
}

export default Category
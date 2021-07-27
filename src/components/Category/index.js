import React from 'react'
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'
import { Text, Flex, IconButton } from '@chakra-ui/react'

const Category = (props) => {

    return(

        <Flex>
                <Text
                fontWeight='700'
                fontSize='36px'
                fontFamily='Poppins'
                marginX='100px'
                ><b>{props.name} <IconButton aria-label='Editar Verduras ' icon={<EditIcon/>} marginX='2'
                 variant='ghost' size='5%' onClick={() => console.log('Editar Categoria')}/></b></Text>
            </Flex>


    )
}

export default Category
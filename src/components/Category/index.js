import React, {useState} from 'react'
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'
import { Text, Flex, IconButton } from '@chakra-ui/react'
import EditModal from '../../pages/Home/EditModal'

const Category = (props) => {

    const [editModal, setEditModal] = useState(false)

    const [selectedCard, setSelectedCard] = useState(null)

    const handleOpenCategoryEditModal = (id) =>{
        setSelectedCard(id)
        setEditModal(true)
    }

    return(

        <>

        <Flex

        
        >
                <Text
                fontWeight='700'
                fontSize='36px'
                fontFamily='Poppins'
                marginLeft='100px'
                
                
                
                ><b>{props.name} </b> </Text>


                <IconButton aria-label='Editar Categoria ' icon={<EditIcon/>} marginX='2'
                 variant='ghost' fontSize='35px' onClick={() => handleOpenCategoryEditModal(true)}/>

                 
            </Flex>


            <EditModal
                    isOpen={editModal}
                    onClose={() => 
                        {setEditModal(false)
                        setSelectedCard(null)                     }}
                    cardId={selectedCard}
                    />

            </>


    )
}

export default Category
import React from 'react'
import { Modal, ModalContent, ModalOverlay,
     ModalHeader, ModalCloseButton, Button, ModalFooter, ModalBody, Image, Flex, Text, Box} from '@chakra-ui/react'
import BackgroundModal from '../../../assets/Background modal.svg'



const CategoryModal = (props) => {
    return(

        <Modal
        isOpen={props.isOpen}
        onClose={props.onClose}>

            <ModalOverlay/>

            <ModalContent>

                <ModalHeader>
                    
            
                        
                    <Flex>


                        
                        <Image
                        src={BackgroundModal}
                        paddingRight='15px'
                        position='relative'>
                        </Image>

                        <Text
                    position='absolute'
                    color='white'
                    fontFamily='Poppins'
                    fontWeight='700'
                    fontSize='24px'
                    paddingX='100px'
                    paddingY='60px'><b>Nova Categoria</b></Text>
                        
                    </Flex>

                    
                    
                    
                    </ModalHeader>

                <ModalCloseButton/>


                <ModalBody>


                </ModalBody>


                <ModalFooter>

                    

                    <Button
                    width='30%'
                    marginRight='6px'
                    borderRadius='100px'
                    bg='black'
                    color='white'
                    fontFamily='Poppins'
                    fontWeight='700'
                    onClick={props.onClose}><b>Fechar</b></Button>

                    <Button
                    width='70%'
                    marginLeft='6px'
                    type='submit'
                    bg='#006B5C'
                    borderRadius='100px'
                    color='white'
                    fontFamily='Poppins'
                    fontWeight='700'><b>Salvar</b></Button>


                



                </ModalFooter>





            </ModalContent>




        </Modal>
    )
}

export default CategoryModal

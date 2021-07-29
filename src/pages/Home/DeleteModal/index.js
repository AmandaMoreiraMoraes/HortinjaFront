import React, {useState}from 'react'
import { Modal, ModalContent, ModalOverlay,
     ModalHeader, ModalCloseButton, Button, ModalFooter, ModalBody, Image, Flex, Text,
    FormControl, FormLabel, Input, Box} from '@chakra-ui/react'
import BackgroundModal from '../../../assets/Background modal.svg'
import {WarningIcon} from '@chakra-ui/icons'



const DeleteModal = (props) => {

    const confirmDelete = () => {
        console.log('apagado')
    }
    
 

    return(

        <Modal
        isOpen={props.isOpen}
        onClose={props.onClose}>

            <ModalOverlay/>

            <ModalContent
            bg='#E5E5E5'
            height='450px'
            >

                <ModalHeader>
                    
            
                        
                    <Flex
                    >


                        
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
                    paddingY='60px'>
                        
                        <Text
                        textAlign='center'
                        marginLeft='50px'><b>Excluir</b></Text>
                        
                        
                        </Text>

                        <Box
                        width='385px'
                        height='250px'
                        bg='#fff'
                        position='absolute'
                        borderRadius='24px'
                        marginTop='150px'>


                        <WarningIcon
                        marginLeft='170px'
                        boxSize='50px'
                        marginTop='2'
                        color='#DB4444'/>

                        



                            <FormLabel
                            color='black'
                            fontFamily='Poppins'
                            fontSize='30px'
                            fontWeight='bold'
                            marginTop='12px'
                            marginLeft='21px'
                            
                            ><Text
                            textAlign='center'><b>Deseja realmente excluir está hortaliça?</b></Text></FormLabel>

                        </Box>


                   
                        
                    </Flex>

                    
                    
                    
                    </ModalHeader>

                <ModalCloseButton/>



                <ModalBody>

                   


                </ModalBody>


                <ModalFooter>

                    

                    <Button
                    width='40%'
                    marginRight='6px'
                    borderRadius='100px'
                    bg='black'
                    color='white'
                    fontFamily='Poppins'
                    fontWeight='700'
                    position='relative'
                    marginTop='20px'
                    onClick={props.onClose}><b>Fechar</b></Button>

                    <Button
                    width='60%'
                    marginLeft='6px'
                    type='submit'
                    bg='#DB4444'
                    borderRadius='100px'
                    color='white'
                    position='relative'
                    fontFamily='Poppins'
                    fontWeight='700'
                    marginTop='20px'
                    onClick={() => console.log('apagado')}
                    ><b>Excluir</b></Button>


                



                </ModalFooter>






            </ModalContent>




        </Modal>
    )
}

export default DeleteModal
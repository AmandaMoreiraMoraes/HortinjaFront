import React, {useState}from 'react'
import { Modal, ModalContent, ModalOverlay,
     ModalHeader, ModalCloseButton, Button, ModalFooter, ModalBody, Image, Flex, Text,
    FormControl, FormLabel, Input, Box} from '@chakra-ui/react'
import BackgroundModal from '../../../assets/Background modal.svg'
import api from '../../../services/api'



const EditModal = (props) => {

    const [name, setName] = useState('')
    
    const handleSubmit = (e) => {

        e.preventDefault()

    }

    return(

        <Modal
        isOpen={props.isOpen}
        onClose={props.onClose}>

            <ModalOverlay/>

            <ModalContent
            bg='#E5E5E5'
            height='450px'>

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
                    paddingY='60px'><b>Editar Categoria</b></Text>

                        <Box
                        width='385px'
                        height='160px'
                        bg='#fff'
                        position='absolute'
                        borderRadius='24px'
                        marginTop='150px'>

                        <FormLabel
                        color='black'
                        fontFamily='Poppins'
                        fontSize='16px'
                        fontWeight='700'
                        marginTop='12px'
                        marginLeft='21px'
                        
                        ><b>Categoria</b></FormLabel>

                        </Box>


                   
                        
                    </Flex>

                    
                    
                    
                    </ModalHeader>

                <ModalCloseButton/>

                <form onSubmit={handleSubmit}>


                <ModalBody>

                    <FormControl>
                      <Input
                      placeholder='Categoria, ex: Verduras'
                      id='name'
                      name='name'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      bg='#D9D2CF'
                      borderRadius='100px'
                      color='#757270'
                      width='350px'
                      height='56px'
                      marginLeft='12px'/>
                    </FormControl>


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
                    position='relative'
                    marginTop='20px'
                    onClick={props.onClose}><b>Fechar</b></Button>

                    <Button
                    width='70%'
                    marginLeft='6px'
                    type='submit'
                    bg='#006B5C'
                    borderRadius='100px'
                    color='white'
                    position='relative'
                    fontFamily='Poppins'
                    fontWeight='700'
                    marginTop='20px'
                    ><b>Salvar</b></Button>


                



                </ModalFooter>

                </form>





            </ModalContent>




        </Modal>
    )
}

export default EditModal
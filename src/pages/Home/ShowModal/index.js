import React, {useState}from 'react'
import { Modal, ModalContent, ModalOverlay,
     ModalHeader, ModalCloseButton, Button, ModalFooter, ModalBody, Image, Flex, Text,
    FormControl, FormLabel, Input, Box, Select, Textarea} from '@chakra-ui/react'
import BackgroundModal from '../../../assets/Background modal.svg'



const ShowModal = (props) => {

    const [name, setName] = useState('')

    const [shade, setShade] = useState('')

    const [image, setImage] = useState('')

    const [measurement, setMeasurement] = useState('')

    const [averagePrice, setAveragePrice] = useState('')

    const [description, setDescription] = useState('')

    const [benefits, setBenefits] = useState('')

    const [category, setCategory] = useState('')

    

    
    
    const handleSubmit = (e) => {

        e.preventDefault()

    }

    if (props.cardId){

    }else{

    }

    return(

        <Modal
        isOpen={props.isOpen}
        onClose={props.onClose}>

            <ModalOverlay/>

            <ModalContent
            bg='#E5E5E5'
            height='1100px'
            
            >

                <ModalHeader>
                    
            
                        
                    <Flex
                    >


                        
                        <Image
                        src={BackgroundModal}
                        paddingRight='15px'
                        position='relative'>
                        </Image>

                        <Image
                          src={props.image}
                          width='100px'
                         height='100px'
                         borderRadius='100px'
                         position='absolute'
                         marginRight='180px'
                         marginBottom='230px'
                         marginTop='20px'>

                        </Image>

                        <Text
                    position='absolute'
                    color='white'
                    fontFamily='Poppins'
                    fontWeight='700'
                    fontSize='24px'
                    paddingX='100px'
                    paddingY='60px'><b> {props.name}</b></Text>

                        <Box
                        width='385px'
                        height='820px'
                        bg='#fff'
                        position='absolute'
                        borderRadius='24px'
                        marginTop='150px'
                        >

                     

                        </Box>


                   
                        
                    </Flex>

                    
                    
                    
                    </ModalHeader>

                <ModalCloseButton/>

                


                <ModalBody
                >

                    <FormControl
                    >


                    <Box
                    marginBottom='35px'
                   >
                        <FormLabel
                        color='black'
                        fontFamily='Poppins'
                        fontSize='16px'
                        fontWeight='700'
                        marginLeft='21px'
                        position='relative'
                        
                        ><b>Tonalidade</b></FormLabel>


                      <Text
                    
                      bg='#D9D2CF'
                      borderRadius='100px'
                      color='#757270'
                      width='350px'
                      height='56px'
                      marginLeft='12px'
                      paddingY='20px'>{props.shade}</Text>

                    </Box>

                    <Box
                    marginBottom='35px'>
                        <FormLabel
                        color='black'
                        fontFamily='Poppins'
                        fontSize='16px'
                        fontWeight='700'
                        marginLeft='21px'
                        position='relative'
                        
                        ><b>Categoria</b></FormLabel>


                      <Text
                      bg='#D9D2CF'
                      borderRadius='100px'
                      color='#757270'
                      width='350px'
                      height='56px'
                      marginLeft='12px'
                      paddingY='20px'>{props.category}</Text>

                    </Box>

                    <Box
                    marginBottom='35px'>
                        <FormLabel
                        color='black'
                        fontFamily='Poppins'
                        fontSize='16px'
                        fontWeight='700'
                        marginLeft='21px'
                        position='relative'
                        
                        ><b>Benefícios Nutricionais </b></FormLabel>


                      <Text
                   
                      bg='#D9D2CF'
                      borderRadius='100px'
                      color='#757270'
                      width='350px'
                      height='56px'
                      marginLeft='12px'
                      paddingY='20px'>{props.benefits}</Text>

                    </Box>

                    <Box
                    marginBottom='35px'>
                        <FormLabel
                        color='black'
                        fontFamily='Poppins'
                        fontSize='16px'
                        fontWeight='700'
                        marginLeft='21px'
                        position='relative'
                        
                        ><b>Descrição</b></FormLabel>


                      <Text
                     
                      bg='#D9D2CF'
                      borderRadius='100px'
                      color='#757270'
                      width='350px'
                      height='56px'
                      marginLeft='12px'
                      paddingY='20px'>{props.description}</Text>

                    </Box>

                    <Box
                    marginBottom='35px'>
                        <FormLabel
                        color='black'
                        fontFamily='Poppins'
                        fontSize='16px'
                        fontWeight='700'
                        marginLeft='21px'
                        position='relative'
                        
                        ><b>Medida</b></FormLabel>


                      <Text
                     

                      bg='#D9D2CF'
                      borderRadius='100px'
                      color='#757270'
                      width='350px'
                      height='56px'
                      marginLeft='12px'
                      paddingY='20px'>{props.measurement}</Text>

                    </Box>

                    <Box
                    marginBottom='35px'>
                        <FormLabel
                        color='black'
                        fontFamily='Poppins'
                        fontSize='16px'
                        fontWeight='700'
                        marginLeft='21px'
                        position='relative'
                        
                        ><b>Preço Médio de Mercado</b></FormLabel>


                      <Text
                      bg='#D9D2CF'
                      borderRadius='100px'
                      color='#757270'
                      width='350px'
                      height='56px'
                      marginLeft='12px'
                      paddingY='20px'>{props.averagePrice}</Text>

                    </Box>

                   

                  
                     




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
                    marginBottom='150px'
                    marginRight='165px'
                    
                    onClick={props.onClose}><b>Fechar</b></Button>



                



                </ModalFooter>

              





            </ModalContent>




        </Modal>
    )
}

export default ShowModal
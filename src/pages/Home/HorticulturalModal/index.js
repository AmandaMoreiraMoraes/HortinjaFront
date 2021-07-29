import React, {useState}from 'react'
import { Modal, ModalContent, ModalOverlay,
     ModalHeader, ModalCloseButton, Button, ModalFooter, ModalBody, Image, Flex, Text,
    FormControl, FormLabel, Input, Box, Select, Textarea} from '@chakra-ui/react'
import BackgroundModal from '../../../assets/Background modal.svg'



const HorticulturalModal = (props) => {

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

    return(

        <Modal
        isOpen={props.isOpen}
        onClose={props.onClose}>

            <ModalOverlay/>

            <ModalContent
            bg='#E5E5E5'
            height='1450px'
            
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
                    paddingY='60px'><b>Nova Hortaliça</b></Text>

                        <Box
                        width='385px'
                        height='1150px'
                        bg='#fff'
                        position='absolute'
                        borderRadius='24px'
                        marginTop='150px'
                        >

                     

                        </Box>


                   
                        
                    </Flex>

                    
                    
                    
                    </ModalHeader>

                <ModalCloseButton/>

                <form onSubmit={handleSubmit}>


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
                        
                        ><b>Nome</b></FormLabel>


                      <Input
                      placeholder='Nome, ex: Tomate'
                      id='name'
                      name='category'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      bg='#D9D2CF'
                      borderRadius='100px'
                      color='#757270'
                      width='350px'
                      height='56px'
                      marginLeft='12px'
                      paddingY='20px'/>

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
                        
                        ><b>Imagem</b></FormLabel>


                      <Input
                      placeholder='URL da Imagem'
                      id='image'
                      name='image'
                      value={image}
                      onChange={(e) => setImage(e.target.value)}
                      bg='#D9D2CF'
                      borderRadius='100px'
                      color='#757270'
                      width='350px'
                      height='56px'
                      marginLeft='12px'
                      paddingY='20px'/>

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
                        
                        ><b>Tonalidade</b></FormLabel>


                      <Input
                      placeholder='Tonalidade, ex: Vermelho'
                      id='shade'
                      name='shade'
                      value={shade}
                      onChange={(e) => setShade(e.target.value)}
                      bg='#D9D2CF'
                      borderRadius='100px'
                      color='#757270'
                      width='350px'
                      height='56px'
                      marginLeft='12px'
                      paddingY='20px'/>

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


                      <Select
                      placeholder='Selecione, ex: Verduras'
                      id='category'
                      name='category'
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      bg='#D9D2CF'
                      borderRadius='100px'
                      color='#757270'
                      width='350px'
                      height='56px'
                      marginLeft='12px'
                      paddingY='20px'/>

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


                      <Input
                      placeholder='Benefícios, ex: Vitamina C'  
                      id='benefits'
                      name='benefits'
                      value={benefits}
                      onChange={(e) => setBenefits(e.target.value)}

                      bg='#D9D2CF'
                      borderRadius='100px'
                      color='#757270'
                      width='350px'
                      height='56px'
                      marginLeft='12px'
                      paddingY='20px'/>

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


                      <Input
                      placeholder='Preço, ex: 2,99'
                      id='averagePrice'
                      name='averagePrice'
                      value={averagePrice}
                      onChange={(e) => setAveragePrice(e.target.value)}
                      bg='#D9D2CF'
                      borderRadius='100px'
                      color='#757270'
                      width='350px'
                      height='56px'
                      marginLeft='12px'
                      paddingY='20px'/>

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


                      <Select
                      placeholder='Medida, ex: Kg, g '
                      id='measurement'
                      name='measurement'
                      value={measurement}
                      onChange={(e) => setMeasurement(e.target.value)}
                      bg='#D9D2CF'
                      borderRadius='100px'
                      color='#757270'
                      width='350px'
                      height='56px'
                      marginLeft='12px'
                      paddingY='20px'/>

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


                      <Textarea
                      placeholder='Descrição, ex: Tomate vem do país...'
                      id='description'
                      name='description'
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      bg='#D9D2CF'
                      borderRadius='100px'
                      color='#757270'
                      width='350px'
                      height='56px'
                      marginLeft='12px'
                      paddingY='20px'/>

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
                    marginBottom='150px'
                    
                    ><b>Salvar</b></Button>


                



                </ModalFooter>

                </form>





            </ModalContent>




        </Modal>
    )
}

export default HorticulturalModal
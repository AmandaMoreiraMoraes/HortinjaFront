import React, {useState} from 'react'
import { Flex, IconButton, Text, Button, Image, Divider, Box} from '@chakra-ui/react' 
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'
import BackgroundButton from '../../assets/Background card.svg'   
import ShowModal from '../../pages/Home/ShowModal'
    
    
    
    const ShowHortaliça = (props) => {

        const handleOpenShowModal = (id) => {
            setSelectedCard(id)
            setShowModal(true)
        }

        const [showModal, setShowModal] = useState(false)

        const [selectedCard, setSelectedCard] = useState(null)

        

        return (
    
    <>
    
    <Flex
            width='1080px'
            height='380px'
            justifyContent='space-between'
            marginX='100px'>
                
                
                <Button
                width='340px'
                height='380px'
                borderRadius='32px'
                bg='#FBFAFA'
                position='relative'
                flexDirection='column'
                onClick={() => handleOpenShowModal(true)}
                >
                

                    
                    
                        
                        
                         
                            <Image
                            marginBottom='180px'
                            position='absolute'
                            src={BackgroundButton}
                            alt='Background Card'
                            position='relative'
                            marginLeft='10px'
                            height='160px'
                            paddingTop='10px'>
                            </Image> 
                            
                        

                        
                            
                            <Image
                                src={props.image}
                                 width='100px'
                                height='100px'
                                borderRadius='100px'
                                position='absolute'
                                marginRight='180px'
                                marginBottom='230px'
                                marginTop='20px'
                                

                                

                        >

                            </Image>

                            <Text
                            position='absolute'
                            justifyContent='center'
                            paddingBottom='200px'
                            paddingLeft='50px'
                            fontFamily='Poppins'
                            fontSize='32px'
                            fontWeight='700'
                            color='#fff'><b>{props.name}</b></Text>

                           
                            
                                <Flex
                                position='absolute'
                                flexDirection='column'
                                paddingTop='40px'
                                fontFamily='Poppins'
                                
                                

                                >
                                    <Text
                                    
                                    
                                    >{props.shade}</Text>

                                   
                                         
                                    <Text
                                    paddingX='15px'
                                    isTruncated
                                    maxWidth='340px'
                                    display='block'
                                    flexWrap='wrap'
                                    position='absolute'
                                    
                                    >{props.description}
                                    </Text>

                                    
                                
                                </Flex>

                                    
                                <Flex
                                fontFamily='Poppins'
                                >
                                    <IconButton
                                    aria-label='Edit Hortaliça'
                                    icon={<DeleteIcon/>}
                                    marginX='2'
                                    variant='ghost'
                                    fontSize='30px'
                                    color='#DB4444'
                                    onClick={props.openDeleteModal}
                                    />

                                    <IconButton
                                    aria-label='Edit Hortaliça'
                                    icon={<EditIcon/>}
                                    marginX='2'
                                    variant='ghost'
                                    fontSize='30px'
                                    onClick={props.openEditModal}
                                    />

                                    <Text
                                    paddingLeft='40px'
                                    paddingTop='6px'>Média R$ </Text>
                                    <Text
                                    paddingLeft='2px'
                                    color='green'
                                    fontWeight='700'
                                    fontSize='30px'
                                
                                   
                                    ><b>{props.averagePrice}</b></Text>
                                    <Text
                                    paddingLeft='6px'
                                    paddingTop='6px'>{props.measurement}</Text>

                                </Flex>
                            
                

                    
                </Button>

          

              


        </Flex>

        <ShowModal
        isOpen={showModal}
        onClose={() => {
            setSelectedCard(null)
            setShowModal(false)
        }}/>

        

        


        </>

        )

    }

    export default ShowHortaliça

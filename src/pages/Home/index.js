import React, {useState, useEffect} from 'react'
import {AddIcon, EditIcon, DeleteIcon } from '@chakra-ui/icons'
import { Flex, 
    Image, Select,Box, Input,
     Text, Divider,Button,IconButton,Spinner 
} from "@chakra-ui/react"
import Logo from '../../assets/logo.svg'
import Background from '../../assets/Background infos.svg'
import { BiDollarCircle, BiEdit } from 'react-icons/bi';
import { RiTodoLine } from 'react-icons/ri';
import BackgroundButton from '../../assets/Background card.svg'
import { FiTrash } from 'react-icons/fi';
import CategoryModal from './CategoryModal'
import { Category } from '../../components'
import { ShowHortaliça } from '../../components'
import HorticulturalModal from './HorticulturalModal'
import DeleteModal from './DeleteModal'
import ShowModal from './ShowModal'
import api from '../../services/api'
import EditModal from './EditModal'




export const Home = () => {

   




    const [categoryModal, setCategoryModal] = useState(false)

    const [horticulturalModal, setHorticulturalModal] = useState(false)

    const [deleteModal, setDeleteModal] = useState(false)


    const [selectedCard, setSelectedCard] = useState(null)

    const handleOpenDeleteModal = (id) => {
        setSelectedCard(id)
        setDeleteModal(true)
    }

    const handleOpenEditModal = (id) => {
        setSelectedCard(id)
        setHorticulturalModal(true)
    }

    

  


    const [showHortaliças, setShowHortaliças] = useState([])

    const [categories, setCategories] = useState([])

    const [loading, setLoading] = useState(false)

    const [name, setName] = useState([])

    
   

    const loadCategory = () =>{

        setLoading(true)

        api.get('/category')
        .then(res => {
            setCategories(res.data)
        })
        .catch(err => {
            console.log(err)
        })
        .finally(() => {
            setLoading(false)
        })

    }

    const loadHortaliça = () => {

        setLoading(true)

        api.get('/horticultural')
        .then(res => {
            setShowHortaliças(res.data)
        
        })
        .catch(err => {
            console.log(err)
        })
        .finally(() => {
            setLoading(false)
        })

    }

    useEffect(() => {
        loadCategory()
    }, [])


    useEffect(() => {

        loadHortaliça()

    }, [])

    useEffect(() => {

        const loadCategories = async () => {
        const response = await api.get('/category')
        setName(response.data)

        loadCategories()
        }

    }, [])

 

   
    return (

        
      <>  
        <Flex
            bg='#E5E5E5'
            flexDirection='column'
            justifyContent='space-between'
            minHeight='100vh'
            
            >
                <Flex
                bg='#fff'
                height='80px'
                maxwidth='1920px'
                
                justifyContent='center'
                
                
                >
                    
                    <Image 
                    src={Logo}
                    alt='Logo Hortinja'
                    paddingLeft='10%'
                    paddingRight='10%'
                    ></Image>
                    

                    
                
                    <Select
                    bg='#D9D2CF'
                    borderRadius='100px'
                    height='56px'
                    paddingY='12px'
                    fontFamily='poppins'
                    fontWeight='400'
                    fontSize='18px'
                    placeholder='Selecionar Categoria'
                    
                    
                    
                    >

                        {name.map(category => {
                            <option
                            key={category?._id}
                            value={category?._id}>

                                {`${category?.name}`}

                            </option>
                        })}
                        
                    </Select>
                    
                
                    <Input
                    bg='#D9D2CF'
                    borderRadius='100px'
                    height='56px'
                    marginLeft='16px'
                    marginTop='12px'
                    fontFamily='poppins'
                    fontWeight='400'
                    fontSize='18px'
                    marginRight='10%'
                    placeholder='Buscar Hortaliça'
                    >

                    </Input>
                
                
                </Flex>  
            
            
            <Flex
                maxWidth='816px'
                maxHeight='244px'
                alignItems='center'
                marginTop='32px'
                marginX='15%'
                flexDirection='column'
                >
                    
                    
                    
                <Flex
                flexDirection='column'
                > 
                    <Image
                    src={Background}
                    alt='Imagem de fundo'
                    position='relative'
                    
                    
                    >
                        
                    </Image> 
                 </Flex>      
                    

                <Flex
                    justifyContent='space-around'
                    position='absolute'
                    paddingTop='50px'
                    
                    
                    
                    
                    >
                        
                    <Flex
                        width='360px'
                        height='160px'
                        bg='#fff'
                        opacity='85%'
                        borderRadius='32px'
                        justifyContent='center'
                        marginRight='16px'
                        justifyContent='flex-start'
                        paddingX='2'>
                        
                            
                        <Flex
                            flexDirection='column'>
                            
                            <Text
                            paddingTop='10px'
                            fontFamily='Poppins'><b>Registros</b></Text>

                            <Text
                            fontFamily='Poppins'>Número de registros da Horta</Text>

                            <Flex
                            flexDirection='row'
                            alignItems='center'
                            paddingTop='40px'
                            paddingX='50px'
                            fontWeight='700'
                            fontSize='36px'
                            fontFamily='Poppins'
                            >
                                <RiTodoLine/>
                                <Text
                            ><b>#029</b></Text>
                            
                            </Flex>

                        

                        </Flex>

                    </Flex>
                            
                        


                    <Flex
                        width='360px'
                        height='160px'
                        bg='#fff'
                        borderRadius='32px'
                        justifyContent='center'
                        marginLeft='16px'
                        justifyContent='flex-start'
                        paddingX='2'
                        opacity='85%'
                        
                        >   
                            
                        <Flex
                            flexDirection='column'>
                            
                            <Text
                            paddingTop='10px'
                            fontFamily='Poppins'><b>Valor Total</b></Text>

                            <Text
                            fontFamily='Poppins'>Preço total da Horta</Text>

                            <Flex
                            flexDirection='row'
                            alignItems='center'
                            paddingTop='40px'
                            paddingX='50px'
                            fontWeight='700'
                            fontSize='36px'
                            fontFamily='Poppins'
                            >
                                <BiDollarCircle/>
                                <Text
                            ><b>R$ 2.099,00</b></Text>
                            
                            </Flex>

                        </Flex>
                            
                    </Flex>
                        
                </Flex>

                    
                    
            </Flex>


            <Divider
            height='1px'
            bg='#111111'
            marginTop='100px'
            width='1080px'
            borderRadius='30px'
            alignSelf='center'></Divider>

            <Flex
            
            margin='20px'
            justifyContent='center'
           
            >
                
                
                <Button colorScheme="green"
            width='360px'
            marginTop='5px'
            marginRight='16px'
            borderRadius='100px'
            fontFamily='Poppins'
            onClick={() => {setHorticulturalModal(true)}}><IconButton
            aria-label='Adicionar Hortaliça'
            icon={<AddIcon/>}
            marginX='2'
            variant='ghost'
            />Adicionar Hortaliça</Button>

                <Button colorScheme="green"
            width='360px'
            marginLeft='16px'
            marginTop='5px'
            fontFamily='Poppins'
            borderRadius='100px'
            onClick={() => {setCategoryModal(true)}}><IconButton
            aria-label='Adicionar Categoria'
            icon={<AddIcon/>}
            marginX='2'
            variant='ghost'
            />Adicionar Categoria</Button>
            
            </Flex>

            
      
            


            
        
            <Flex
                flexDirection='column'
                
                
                
                >
                    
                        {loading ? (

                        <Flex
                        justifyContent='center'
                        alignItems='center'
                        color='green'>
                            <Spinner/>

                        </Flex>
                        ) : (

                            <Flex>

                                {categories.map(category =>{

                                return(
                                    
                                <Category
                                name={category?.name}


                                >



                                </Category>
                                )


                                }

                                )}


                            </Flex>

                        )}
                    


               

                <Flex
                flexDirection='column'
                
                
                >
                    {loading ? (
                        <Flex
                        justifyContent='center'
                        alignItems='center'
                        marginTop='100px'>

                            <Spinner
                            color='green'/>



                        </Flex>
                    ) : (
                        <Flex>
                            {showHortaliças.map(showHortaliça =>{

                                return(
                                    
                                <ShowHortaliça
                                id={showHortaliça?._id}
                                name={showHortaliça?.name}
                                shade={showHortaliça?.shade}
                                description={showHortaliça?.description}
                                measurement={showHortaliça?.measurement}
                                averagePrice={showHortaliça?.averagePrice}
                                image={showHortaliça?.image}
                                categoryId={showHortaliça?.categoryId}
                                openDeleteModal={()=> handleOpenDeleteModal(showHortaliça?._id)}
                                openEditModal={() => handleOpenEditModal(showHortaliça?._id)}
                                />
                                )


                                }

                                )}



                        </Flex>
                    )}


                  

                    </Flex>

                    <Divider
            height='1px'
            bg='#111111'
            marginTop='100px'
            width='1080px'
            borderRadius='30px'
            alignSelf='center'></Divider>

                    
               </Flex>

              
                   
                   
                
              






          

            

         

            <Divider
            height='1px'
            bg='#111111'
            marginTop='100px'
            width='1080px'
            borderRadius='30px'
            alignSelf='center'></Divider>

            <Box marginY='4'>
            <Text textAlign='center' fontSize='15px' color='gray'>
            Copyright © 2021 Feito com ❤ por Kazap Tecnologia - Todos os direitos reservados
            </Text>
            </Box>



                

                    
                    
        </Flex> 

        
        
        <CategoryModal
        isOpen={categoryModal}
        onClose={() => {setCategoryModal(false)}}
        loadCategory={loadCategory}/>

        
        <HorticulturalModal
        isOpen={horticulturalModal}
        onClose={() => {setHorticulturalModal(false)
        setSelectedCard(null)}}
        cardId={selectedCard}
        loadHorticultural = {loadHortaliça}
        />

        <DeleteModal
        isOpen={deleteModal}
        onClose={() => 
            {setDeleteModal(false)
            setSelectedCard(null)                     }}
        cardId={selectedCard}
        loadHorticultural={loadHortaliça}
        
        />

        
        
        </>
                
            
        

    
        
    )
}


    
import React, { useState } from "react";
import { Box, Heading, TagLabel,Tag, TagLeftIcon, Grid, Center, Divider,ColorMode,Image, Flex, Button, Checkbox } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { ArrowLeftIcon,CloseIcon,DeleteIcon, QuestionOutlineIcon } from "@chakra-ui/icons";



const CartPage=()=>{
    // const [incrementVal,setIncrementVal] =useState(0)
    // const [decrementVal,setDecrementVal] =useState(0)
    const arr=[
        {
            id:1,
            title:"Capacinos",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtwQuvcZU_5Z0lGK5Vn5CSayzHnbS-_DEfd8ixucAhShPMRWII12I0HFEhLYClRkRFoh0&usqp=CAU",
            cup1:"4 Cups",
            cup2:"8 Cups",
            price:150
        },
        {
            id:2,
            title:"Black Coffee",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPlb6vZRvaAGuq8Xn2gJP3idCL4Fv6D2X8gQ&usqp=CAU",
            cup1:"5 Cups",
            cup2:"9 Cups",
            price:200
        }, {
            id:3,
            title:"Nescaffe",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2QtbspNQASoWZq7JTZEm3M50XjqUpDufshr3ouonzydm_e0_amWF01Uef9u4te3WzrRI&usqp=CAU",
            cup1:"2 Cups",
            cup2:"4 Cups",
            price:350
        }
    ]
    return(
        
     <Box m={10}>
                <Box border='1px solid' ml={350} w={620}  >
                    <Grid templateColumns='repeat(3, 1fr)' gap={6}>
                  
                    <Center> <Icon as={ArrowLeftIcon} bg={"#bd3b13"} color={"white"} /></Center>
                        <Box>  <Heading>MY CART({arr.length})</Heading></Box>
                        <Tag>
                                  <Tag>Clear chart</Tag>
                                  <TagLeftIcon boxSize='12px' as={DeleteIcon}/>
                        </Tag>
                        
              
                    
                       
                    </Grid>
               
                </Box>
                <Divider ml={350} w={620} colorScheme="gray" orientation="horizontal" mt={5}/>

                <Heading mt={5} ml={12} size="md">YOUR ORDERS QUALIFIES FOR FREE SHIPPING!</Heading>

                <Divider ml={460} borderRadius="15" w={400} h="3" bg='#bd3b13'  orientation="horizontal" mt={5}/>
           




           {arr.map((ele)=>

<Box mt={10} ml={350} w={620} h={40} p={3} boxShadow="md">
           <Flex>

            <Box bg="gray.200" p={5} borderRadius="md" w="100px" mt={3}>
                     <Image w={100} src={ele.image} alt="" />
                  </Box>


                 <Box  w={500} ml={5} >
                    <Box  mt={1} >
                       <Flex>
                       <Heading size="mid">{ele.title} </Heading>
                       <Center><Icon as={CloseIcon}  ml={326}></Icon> </Center>
                       </Flex>
                    </Box>
                    <Box mt={2}>
                        <Flex> 
                        <Button borderRadius='0' colorScheme='teal' size='xs' variant='outline'> {ele.cup1} </Button>
                         <Button borderRadius='0'  colorScheme='teal' size='xs' variant='outline' ml={2}> {ele.cup2} </Button>

                        </Flex>
                        
                    </Box>
                    <Box  mt={5}>
                        <Flex  gap={5}>
                        <Button > - </Button>
                        
                        <Center><Heading size={5}>2</Heading></Center>
                        
                        <Button > + </Button>
                        <Center><Heading size="md" ml={260}>{ele.price}$</Heading></Center>
                        </Flex>
                        
                        
                        
                    </Box>
                  </Box>



        </Flex>
                 

         </Box>


           )}
        









         <Box>
            <Flex>
            <Checkbox colorScheme='red' defaultChecked mt={8} ml={350}>
             This order is a gift
             <Icon as={QuestionOutlineIcon} ml={2} ></Icon>
            </Checkbox>

            </Flex>
        
         </Box>
         <Divider mt={4} ml={350} w={620}/>
         <Box ml={345} w={620} p={1} mt={3}>
            <Flex  justifyContent="space-between">
            <Heading size="mid">SUBTOTAL :</Heading>
            <Heading size="mid" mr={2.5}>1987</Heading>

            </Flex>
            
         </Box>
         <Button borderRadius='0' mt={5} bg='blackAlpha.800' color='white' ml={10} w={630}>CHECKOUT</Button>
           
     </Box>
           
       
    )
}
export default CartPage

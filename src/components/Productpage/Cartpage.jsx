import { Button } from '@chakra-ui/button'
import { useDisclosure } from '@chakra-ui/hooks'
import { Image } from '@chakra-ui/image'
import { Box, Flex, SimpleGrid, Spacer, Text, VStack } from '@chakra-ui/layout'
import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay } from '@chakra-ui/modal'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Cartpage = () => {
    // const [cartItems, setCartItems] = useState([]);
    const { isOpen, onOpen, onClose } = useDisclosure();


    const [data,setData]=useState([])

    useEffect(()=>{
        axios.get("https://coffee-charm.onrender.com/cart")
        .then(response=> setData(response.data))
        .catch(error => console.log("Error fetching api:",error))
    },[])

  return (
    <Box mt={'15rem'}>
        
<Button onClick={onOpen}>Open Cart</Button>
      <Drawer placement="right" onClose={onClose} isOpen={isOpen} size="md">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your Cart</DrawerHeader>

          <DrawerBody>
            {data.length === 0 ? (
              <Text>Your cart is empty.</Text>
            ) : (
              <VStack spacing={2} align="stretch">
                {data.map((card, index) => (
                  <Flex key={index} p={2} borderBottom="1px solid" borderColor="gray.200">
                   <Image width={200} h={150} src={card.images}/>
                        <Text fontWeight={'550'} fontSize={10}>{card.title}</Text>
                        <Text fontWeight={'550'} fontSize={12}>Rs. {card.price}</Text>
                        <Text fontSize={'10px'}>{card.description}</Text>
                  </Flex>
                ))}
              </VStack>
            )}
            </DrawerBody>

            <DrawerFooter>
            <Button variant="outline" onClick={onClose}>
                Close
            </Button>
            </DrawerFooter>
            </DrawerContent>
            </Drawer>
                    
    </Box>
  )
}

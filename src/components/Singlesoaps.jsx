import { Box, Button, Flex, Image, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Singlesoaps = () => {
    const {id} = useParams();
    const [product,setProduct]=useState(null)

    useEffect(()=>{
        const fetchProduct = async ()=>{
            try{
                const response = await fetch(`https://coffee-charm.onrender.com/soaps/${id}`)
                const data= await response.json();
                setProduct(data)
            }catch(error){
                console.error("Error fetching api:",error);
            }
        }
        fetchProduct();
    },[id])

    if(!product){
        return <div>Loading.....</div>
    }
  return (
    <Box>
        <Box mt={'10rem'} display={'grid'} gridTemplateRows={1}>
       <Box  w='600px'  h='70vh' ml='3rem' mt='-3rem'>
       <Image src={product.images} w='500px' />
       </Box>
      <Box ml='45rem'  w='650px'>
      <Text fontWeight={600} fontSize={20} textAlign={'left'}>{product.title}</Text>
      <Text fontWeight={800} mt={8} fontSize={20} textAlign={'left'}>Rs. {product.price}/-</Text>
      <Text mt={8} textAlign={'left'} fontSize={20}>{product.description}</Text>
      <Flex mt={8}>
      <Button as={Button} bg="#15b9dd" href='#' _hover={{bg: "#00838F",}} width={200} fontSize={20} >Add to cart</Button>
      </Flex>
      </Box>

     <Box  width={650} ml='45rem' mt='4rem'>
     <Text fontWeight={700} fontSize={20} textAlign={'left'}>
      Skincare Products:
      </Text>
      <Text mt={3} textAlign={'left'} fontSize={20}>
      <UnorderedList>
        <ListItem>Cleansers: Used to remove dirt, oil, and makeup from the skin's surface.</ListItem>
        <ListItem>Moisturizers: Help hydrate and nourish the skin, maintaining its health and preventing dryness.</ListItem>
        <ListItem>Serums: Concentrated formulations that target specific skincare concerns like aging, dark spots, or acne.</ListItem>
        <ListItem>Sunscreen: Protects the skin from harmful UV rays and helps prevent sunburn and premature aging.</ListItem>
      </UnorderedList>
      </Text>
       
     </Box>
       </Box>
    </Box>
  )
}

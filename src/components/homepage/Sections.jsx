import React from 'react'
import  { useEffect, useState } from 'react'
import { Box, Button, Center, HStack, Image, SimpleGrid, Text, Toast, useDisclosure, useToast } from '@chakra-ui/react'
import axios from 'axios';
import { Link as RouterLink } from 'react-router-dom';

const Sections = () => {
    const [data, setData] = useState([]);
    const [data1, setData1]= useState([]);
    const [data2, setData2]= useState([]);
    const [data3, setData3] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const toast = useToast()
    const { isOpen, onOpen, onClose } = useDisclosure();


    useEffect(() => {
        // Fetch data when the component mounts
        axios.get('https://coffee-charm.onrender.com/home')
          .then(response => setData(response.data))
          .catch(error => console.error('Error fetching data:', error));

        axios.get('https://coffee-charm.onrender.com/soaps')
          .then(response => setData1(response.data))
          .catch(error => console.error('Error fetching data from API 1:', error));

        axios.get('https://coffee-charm.onrender.com/face')
          .then(response => setData2(response.data))
          .catch(error => console.error('Error fetching data from API 1:', error));

        axios.get('https://coffee-charm.onrender.com/oils')
          .then(response => setData3(response.data))
          .catch(error => console.error('Error fetching data from API 1:', error));


      }, []);


      
  const visibleCards = data.slice(0, 4); 
  const visibleCards1=data1.slice(0, 4)
  const visibleCards2=data2.slice(0,4);
  const visibleCards3=data3.slice(0,4);




  const handleAdd= async (item)=>{
    try{
      
      const response = await axios.post('https://coffee-charm.onrender.com/cart', item);
      if (response.status === 201) {
        console.log('Item added to cart:', response.data);
        setCartItems([...cartItems, item]);
        toast({
          title: "Item added to cart successfully",
          // description: "This is the alert description. You can provide additional details here.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }

    }catch(error){
      console.log("Error fetching api:",error);
    }
    

    
  }

  
  



  return (
    <Box>
    <Box>
        <Text fontSize='50px' fontWeight='600' mt='-10rem'>Shop all Products</Text>
        <Box display="flex"
      alignItems="center"
      justifyContent="center" mt='2rem'>
            <HStack>
              <RouterLink to='/'>
              <Button borderRadius='1.5rem' bg='#15b9dd'>Bestsellers</Button>
              </RouterLink>
                
                <RouterLink to='/home'>
                <Button borderRadius='1.5rem' bg='#15b9dd'>New Launches</Button>
                </RouterLink>

                <RouterLink to='/soaps'>
                <Button borderRadius='1.5rem' bg='#15b9dd'>Body Care</Button>
                </RouterLink>
                
                <RouterLink to='/face'>
                <Button borderRadius='1.5rem' bg='#15b9dd'>Face Care</Button>
                </RouterLink>
                
                <RouterLink to='/oils'>
                <Button borderRadius='1.5rem' bg='#15b9dd'>Eye Care</Button>
                </RouterLink>
                
                <RouterLink to='/soaps'>
                <Button borderRadius='1.5rem' bg='#15b9dd'>Lip Care</Button>
                </RouterLink>
                
                <RouterLink to='/soaps'>
                <Button borderRadius='1.5rem' bg='#15b9dd'>Hair Care</Button>
                </RouterLink>
                
            </HStack>
            
        </Box>
    </Box>
    <Box>
        <Text fontSize='45px' fontWeight='700' mt='1.5rem'>Bestsellers</Text>
    </Box>
    <Box>
    <SimpleGrid columns={4} spacing={5} ml={'5rem'} mr={'5rem'} mt={'3rem'}>
        {visibleCards.map(card => (
          <Box
            key={card.id}
            borderWidth="1px"
            borderColor="gray.300"
            p={4}
            borderRadius="md"
            transition="transform 0.3s ease, opacity 0.3s ease"
            _hover={{ transform: 'scale(1.05)', opacity: 0.8 }}
            bg={'#b18053'}
            w={'300px'}
          >
            <Image src={card.images}/>
            <Text fontWeight={'650'}>{card.title}</Text>
            <Text fontWeight={'750'}>Rs. {card.price}</Text>
            <Text fontSize={'15px'}>{card.description}</Text>
            <Button mt={'1rem'} w={'250px'} bg='#15b9dd' onClick={()=>handleAdd(card)} >ADD TO CART</Button>
          </Box>
        ))}
      </SimpleGrid>
    </Box>

    <Box>
        <Text fontSize='45px' fontWeight='700' mt='1.5rem'>Body Care</Text>
    </Box>

    <Box>
    <SimpleGrid columns={4} spacing={5} ml={'5rem'} mr={'5rem'} mt={'3rem'}>
        {visibleCards1.map(card1 => (
          <Box
            key={card1.id}
            borderWidth="1px"
            borderColor="gray.300"
            p={4}
            borderRadius="md"
            transition="transform 0.3s ease, opacity 0.3s ease"
            _hover={{ transform: 'scale(1.05)', opacity: 0.8 }}
            bg={'#b18053'}
            w={'300px'}
          >
            <Image src={card1.images} />
            <Text fontWeight={'650'}>{card1.title}</Text>
            <Text fontWeight={'750'}>Rs. {card1.price}</Text>
            <Text fontSize={'15px'}>{card1.description}</Text>
            <Button mt={'1rem'} w={'250px'} bg='#15b9dd' onClick={()=>handleAdd(card1)}>ADD TO CART</Button>
          </Box>
        ))}
      </SimpleGrid>
    </Box>

    <Box>
        <Text fontSize='45px' fontWeight='700' mt='1.5rem'>Face Care</Text>
    </Box>

    <Box>
    <SimpleGrid columns={4} spacing={5} ml={'5rem'} mr={'5rem'} mt={'3rem'}>
        {visibleCards2.map(card2 => (
          <Box
            key={card2.id}
            borderWidth="1px"
            borderColor="gray.300"
            p={4}
            borderRadius="md"
            transition="transform 0.3s ease, opacity 0.3s ease"
            _hover={{ transform: 'scale(1.05)', opacity: 0.8 }}
            bg={'#b18053'}
            w={'300px'}
          >
            <Image src={card2.images}/>
            <Text fontWeight={'650'}>{card2.title}</Text>
            <Text fontWeight={'750'}>Rs. {card2.price}</Text>
            <Text fontSize={'15px'}>{card2.description}</Text>
            <Button mt={'1rem'} w={'250px'} bg='#15b9dd' onClick={()=>handleAdd(card2)}>ADD TO CART</Button>
          </Box>
        ))}
      </SimpleGrid>
    </Box>

    <Box>
        <Text fontSize='45px' fontWeight='700' mt='1.5rem'>Hair Care</Text>
    </Box>

    <Box>
    <SimpleGrid columns={4} spacing={5} ml={'5rem'} mr={'5rem'} mt={'3rem'}>
        {visibleCards3.map(card3 => (
          <Box
            key={card3.id}
            borderWidth="1px"
            borderColor="gray.300"
            p={4}
            borderRadius="md"
            transition="transform 0.3s ease, opacity 0.3s ease"
            _hover={{ transform: 'scale(1.05)', opacity: 0.8 }}
            bg={'#b18053'}
            w={'300px'}
          >
            <Image src={card3.images}/>
            <Text fontWeight={'650'}>{card3.title}</Text>
            <Text fontWeight={'750'}>Rs. {card3.price}</Text>
            <Text fontSize={'15px'}>{card3.description}</Text>
            <Button mt={'1rem'} w={'250px'} bg='#15b9dd' onClick={()=>handleAdd(card3)}>ADD TO CART</Button>
          </Box>
        ))}
      </SimpleGrid>
    </Box>

        
    </Box>
  )
}

export default Sections
import { Box, Button, Image, SimpleGrid, Text } from '@chakra-ui/react'
import axios, { Axios } from 'axios';
import React, { useEffect, useState } from 'react'
import Pagination from '../Pagination';
import Footer from '../footer/Footer'
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';


const ITEMS_PER_PAGE = 15;

const Bodycare = () => {
    const [data,setData]= useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(()=>{
        axios.get('https://coffee-charm.onrender.com/oils')
        .then(res=> setData(res.data))
        .catch(error=> console.error("Error fetching data:",error))
    },[]);

    const totalItems = data.length;
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
      };

      const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
      const endIndex = startIndex + ITEMS_PER_PAGE;
    
      const displayedItems = data.slice(startIndex, endIndex);
      console.log(displayedItems);
  

  return (
    <Box>
        <Box><Sidebar/> </Box>
        <SimpleGrid columns={3} spacing={3} rowGap='2rem' ml='21rem'  width='1050px' mt='-39rem'>
            {/* <Text>{ITEMS_PER_PAGE}</Text> */}
            {
                displayedItems.map(card =>(
                    
                    <Link  to={`/oils/${card.id}`}>
                        
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
                        <Button mt={'1rem'} w={'250px'} bg='#15b9dd' >ADD TO CART</Button>

                    </Box>
                    </Link>
                ))
            }
        </SimpleGrid>
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}/>
        <Box>
            {/* <Footer/> */}
        </Box>
    </Box>
  )
}

export default Bodycare
import { Box, Text } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Filter = () => {
  const [items, setItems] = useState([]);
    const [selectedLetters, setSelectedLetters] = useState([]);

    useEffect(() => {
      
      axios.get('https://coffee-charm.onrender.com/face')
          .then(response => {
              setItems(response.data);
          })
          .catch(error => {
              console.error('Error fetching data:', error);
          });
  }, []);

  const handleCheckboxChange = (letter) => {
    if (selectedLetters.includes(letter)) {
        setSelectedLetters(selectedLetters.filter(item => item !== letter));
    } else {
        setSelectedLetters([...selectedLetters, letter]);
    }
};

const filteredItems = items.filter(item => {
    if (selectedLetters.length === 0) {
        return true;
    }
    return selectedLetters.includes(item.name.charAt(0).toUpperCase());
});



  return (
    <Box>
        
        <Box border='1px solid grey' w='200px' h='200px' ml='3rem' mt='2rem'>
        <Text fontWeight='600' mt='1rem'>Filter</Text>
        <Box mt='1rem' display='grid' flexDirection='row' gap='2'>
        <Text ml='-2.5rem'><input type="checkbox" checked={selectedLetters.includes(letter)} onChange={() => handleCheckboxChange(letter)}/> A to Z</Text>
        <Text ml='-2.5rem'><input type="checkbox" /> Z to A</Text>
        <Text><input type="checkbox" /> Low to High</Text>
        <Text><input type="checkbox" /> High to Low</Text>
        </Box>

        </Box>

       

    </Box>
  )
}

export default Filter
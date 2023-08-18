import { Box, Heading, Input, Text } from '@chakra-ui/react'
import React from 'react'

const Categories = () => {
  return (
    <Box mt='-1rem'>
        
        <Box border='1px solid grey' w='200px' h='200px' ml='3rem' mt='2rem'>
        <Text fontWeight='600' mt='1rem'>Category</Text>
        <Box mt='1rem' display='grid' flexDirection='row' gap='2'>
        <Text ml='-2.5rem'><input type="checkbox" /> A to Z</Text>
        <Text ml='-2.5rem'><input type="checkbox" /> Z to A</Text>
        <Text><input type="checkbox" /> Low to High</Text>
        <Text><input type="checkbox" /> High to Low</Text>
        </Box>

        </Box>

       

    </Box>
  )
}

export default Categories
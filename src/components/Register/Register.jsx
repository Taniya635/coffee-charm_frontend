'use client'

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  useToast
} from '@chakra-ui/react'
import { useState } from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import {Link as RouterLink} from 'react-router-dom'
import axios from 'axios'

export default function Register() {
  const [showPassword, setShowPassword] = useState(false)
  const toast= useToast()
  const [formdata, setFormdata]=useState({
    username:"",
    email:"",
    password:""
  })

  const handleInput=(e)=>{
    const {name, value}= e.target;
    setFormdata((previous)=>({
      ...previous,
      [name]:value
    }))
  }

  const handleSubmit= async (e)=>{
    e.preventDefault();

    try{
      const response= await axios.post("https://coffee-charm.onrender.com/register",formdata);
      if (formdata.username && formdata.email && formdata.password) {
        // Perform your form submission logic here
        // Redirect or perform any other action
        // console.log('Form submitted successfully');
        toast({
          title:"Resgistration successful",
          description: formdata.username+"'s account has been created",
          status:"success",
          duration:3000,
          isClosable: true
        }) 
        window.location='/login' 
      }
      else{
        toast({
          title: 'Registration Failed',
          description: 'An error occurred while registering',
          status: 'error',
          duration: 3000,
          isClosable: true
        });
      }
      console.log("Registered successful", response.data, response.status);
      
    }catch (error){
      console.error("Error registering:",error);
     
    }
  }



  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Become a member
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>Username</FormLabel>
                  <Input type="text" w={'300px'} name='username' value={formdata.username} onChange={handleInput}/>
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" name='email' value={formdata.email} onChange={handleInput}/>
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} name='password' value={formdata.password} onChange={handleInput} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() => setShowPassword((showPassword) => !showPassword)}>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <RouterLink to='/'>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'#896530'}
                color={'white'}
                _hover={{
                  bg: '#6D4C41'  
                }}
                onClick={handleSubmit}>
                Sign up
              </Button>
              </RouterLink>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link color={'blue.400'}><RouterLink to='/login'>Login</RouterLink></Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}
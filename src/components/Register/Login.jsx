'use client'

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Login() {
  const toast=useToast()
  const [email, setEmail]=useState("")
  const [password, setPassword]= useState("")
  const [data,setData]= useState([])

  useEffect(()=>{
  const x=  axios.get("https://coffee-charm.onrender.com/register")
          .then(response => setData(response.data))
          .catch(error => console.error('Error fetching data:', error));

          console.log(x);
  },[])

  const handleSubmit=(e)=>{
    e.preventDefault()
    const user = data.find(u => u.email === email && u.password === password);

    if (user) {
      toast({
        title: "Login successful",
        description: "Welcome back, " + user.username + "!",
        status: "success",
        duration: 3000,
        isClosable: true
      });
      axios.post("https://coffee-charm.onrender.com/login",email)
      // Redirect or perform any other action
      window.location = '/'; // Change to your desired destination
    } else {
      toast({
        title: 'Login failed',
        description: 'Invalid email or password',
        status: 'error',
        duration: 3000,
        isClosable: true
      });
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
          <Heading fontSize={'4xl'}>Log in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Text color={'blue.400'}>features</Text> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel type='email'  >Email address</FormLabel>
              <Input type="email" name='email' value={email} onChange={e => setEmail(e.target.value)}/>
            </FormControl>
            <FormControl id="password">
              <FormLabel type='password'  >Password</FormLabel>
              <Input type="password" name='password' value={password} onChange={e => setPassword(e.target.value)}/>
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Text color={'blue.400'}>Forgot password?</Text>
              </Stack>
              <Button
                bg={'#896530'}
                color={'white'}
                _hover={{
                  bg: '#6D4C41',
                }}
                onClick={handleSubmit}
                type='submit'
                >
                Log in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}
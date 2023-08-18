import { Box, Button, FormLabel, Input, Menu, MenuButton, MenuItem, MenuList, Text, useToast } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {Link as RouterLink} from 'react-router-dom'

const Log = () => {
  let w= window.innerWidth
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
      axios.post("https://coffee-charm.onrender.com/login")
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
    <Box>
        <Box >
              <Menu >
                {
                    w>450 &&(
                        <MenuButton as={Button} bg="#896530" href='#' _hover={{bg: "#6D4C41",}} color='white' >
                            Login
                        </MenuButton>
                    )

                }
                <MenuList w='400px'>
                  <Box m='2'>
                  <FormLabel>Email</FormLabel> 
                  <Input placeholder="enter email" type="email" name='email' value={email} onChange={e => setEmail(e.target.value)}></Input>
                  </Box>

                  <Box m='2'> 
                  <FormLabel>Password</FormLabel> 
                  <Input placeholder="enter password" type="password" name='password' value={password} onChange={e => setPassword(e.target.value)}></Input>
                  </Box>

                  <Button as={Button} bg="#896530" href='#' _hover={{bg: "#6D4C41",}} color='white' onClick={handleSubmit}>Continue</Button>

                  <MenuItem>New User?  <RouterLink to='/register' ><Text color={'blue.400'}>Create Account</Text></RouterLink></MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
              </Box>
    </Box>
  )
}

export default Log

// {
//     w>450 && (
//       <Button as={Button} bg="#15b9dd" href='#' _hover={{bg: "#00838F",}} > 
//         <BsCartCheckFill color="white"/>
//       </Button>
//     )
//   }
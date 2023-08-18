import React from "react";
import logo from "../../assets/logo.png"
import {BsCartCheckFill} from 'react-icons/bs'
import {CgSearch} from 'react-icons/cg'

import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Text,
  SimpleGrid,
  Grid,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Heading,
  Input,
  FormLabel,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon, ChevronDownIcon } from "@chakra-ui/icons";
import {Link as RouterLink} from 'react-router-dom'
import Log from "./Log";
import SearchBox from "./SearchBox";


export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  let w=window.innerWidth

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4} position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="sticky"
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            {/* <img style={{width:"100px", height:"50px",cursor:"pointer"}} src={logo} alt="logo" /> */}
            <RouterLink to='/'>
            <Image src={logo} alt="logo" width="100px" height="50px" cursor='pointer' />
            </RouterLink>
            
            <HStack as={'nav'}
              spacing={8}
              display={{ base: 'none', md: 'flex' }}>
            <Menu >
              <MenuButton fontWeight='700'>Body Care</MenuButton>
              <MenuList>
                <Text as='b' fontSize="25px">Body Care</Text>
                <Grid templateColumns="repeat(3,1fr)" h="300px" w="800px">
                    <SimpleGrid  spacing={2}>
                      <RouterLink to='/oils'>
                      <MenuItem>Body Scrubs</MenuItem>
                      </RouterLink>
                      <RouterLink to='/oils'>
                      <MenuItem>Body Wash</MenuItem>
                      </RouterLink>
                      
                      <RouterLink to='/oils'>
                      <MenuItem>Body Polishing Oil</MenuItem>
                      </RouterLink>
                      
                      <RouterLink to='/oils'>
                      <MenuItem>Lotions & Butter</MenuItem>
                      </RouterLink>
                      
                      <RouterLink to='/oils'>
                      <MenuItem>Body Soaps</MenuItem>
                      </RouterLink>
                      
                      <RouterLink to='/oils'>
                      <MenuItem>Destress Essentials</MenuItem>
                      </RouterLink>
                      
                    </SimpleGrid>

                    <SimpleGrid spacing={2}>
                      <RouterLink to='/soaps'>
                      <MenuItem>Body Yoghurts</MenuItem>
                      </RouterLink>
                      
                      <RouterLink to='/soaps'>
                      <MenuItem>Body Masks</MenuItem>
                      </RouterLink>
                      
                      <RouterLink to='/soaps'>
                      <MenuItem>Body Shimmer</MenuItem>
                      </RouterLink>
                      
                      <RouterLink to='/soaps'>
                      <MenuItem>Body Serum</MenuItem>
                      </RouterLink>
                      
                      <RouterLink to='/soaps'>
                      <MenuItem>Body Accessories</MenuItem>
                      </RouterLink>
                      
                      <RouterLink to='/soaps'>
                      <MenuItem>Best Sellers</MenuItem>
                      </RouterLink>
                      
                    </SimpleGrid>

                    <SimpleGrid spacing={2}>
                      <MenuItem>Body Exfoliators</MenuItem>
                      <MenuItem>What's New</MenuItem>
                      <MenuItem>Sunscreen</MenuItem>
                      <MenuItem>Body Sticks</MenuItem>
                      <MenuItem>Value Packs</MenuItem>
                      <MenuItem>Body Mists</MenuItem>
                    </SimpleGrid>
                    
                </Grid>

              </MenuList>
            </Menu>

            <Menu> 
              <MenuButton fontWeight='700'>Face Care</MenuButton>
              <MenuList>
                <Text as='b' fontSize="25px">Face Care</Text>
                <Grid templateColumns="repeat(3,1fr)" h="300px" w="800px">
                    <SimpleGrid  spacing={2}>
                      <RouterLink to='/face'>
                      <MenuItem>Face Scrubs</MenuItem>
                      </RouterLink>

                      <RouterLink to='/face'>
                      <MenuItem>Face Wash</MenuItem>
                      </RouterLink>
                     
                      
                      <RouterLink to='/face'>
                      <MenuItem>Face Mask</MenuItem>
                      </RouterLink>
                      
                      <RouterLink to='/face'>
                      <MenuItem>Cleansing Butters</MenuItem>
                      </RouterLink>
                      
                      <RouterLink to='/face'>
                      <MenuItem>What's new</MenuItem>
                      </RouterLink>
                      
                      <MenuItem>Value Packs</MenuItem>
                      
                      <RouterLink to='/face'>
                      <MenuItem>Sunscreens</MenuItem>
                      </RouterLink>
                    </SimpleGrid>

                    <SimpleGrid spacing={2}>
                      <MenuItem>Toner Serums </MenuItem>
                      <MenuItem>Eye Care</MenuItem>
                      <MenuItem>Sheet Mask</MenuItem>
                      <MenuItem>Face Serum</MenuItem>
                      <MenuItem>Face Moistourizers</MenuItem>
                      <MenuItem>Under Eye Cream</MenuItem>
                    </SimpleGrid>

                    <SimpleGrid spacing={2}>
                      <MenuItem>Toners </MenuItem>
                      <MenuItem>Face Oils</MenuItem>
                      <MenuItem>Face Mist</MenuItem>
                      <MenuItem>Lip Care</MenuItem>
                      <MenuItem>Face Accessories</MenuItem>
                      <MenuItem>Best Sellers</MenuItem>
                    </SimpleGrid>
                    
                </Grid>
              </MenuList>
            </Menu>

            <Menu> 
              <MenuButton fontWeight='700'>Hair Care</MenuButton>
              <MenuList>
                <Text as='b' fontSize="25px">Hair Care</Text>
                <Grid templateColumns="repeat(3,1fr)" h="200px" w="700px">
                    <SimpleGrid  spacing={1}>
                      <RouterLink to='/home'>
                      <MenuItem>Scalp Scrub</MenuItem>
                      </RouterLink>
                      
                      <RouterLink to='/home'>
                      <MenuItem>Hair Shampoo</MenuItem>
                      </RouterLink>
                      
                      <RouterLink to='/home'>
                      <MenuItem>Hair Conditioner</MenuItem>
                      </RouterLink>
                      
                      <RouterLink to='/home'>
                      <MenuItem>Value Packs</MenuItem>
                      </RouterLink>
                      
                    </SimpleGrid>

                    <SimpleGrid spacing={2}>
                      <RouterLink to='/home'>
                      <MenuItem>Hair Mask</MenuItem>
                      </RouterLink>
                      
                      <RouterLink to='/home'>
                      <MenuItem>Hair Oil</MenuItem>
                      </RouterLink>
                      
                      <RouterLink to='/home'>
                      <MenuItem>Scalp Tonic</MenuItem>
                      </RouterLink>
                      
                      <RouterLink to='/home'>
                      <MenuItem>Hair Accessories</MenuItem>
                      </RouterLink>
                      
                    </SimpleGrid >

                    <SimpleGrid spacing={2}>
                      <MenuItem>Scalp Lotion</MenuItem>
                      <MenuItem>Hair Serum</MenuItem>
                      <MenuItem>Leave-In Hair Cream</MenuItem>
                      <MenuItem>What's new</MenuItem>
                    </SimpleGrid>
                    
                </Grid>
              </MenuList>
            </Menu>

            <Menu> 
              <MenuButton fontWeight='700'>Shop By Concerns</MenuButton>
              <MenuList>
                
                <Grid templateColumns="repeat(3,1fr)" h="600px" w="800px">
                
                    <SimpleGrid  spacing={2} h='500px'>
                    <Text as='b' fontSize="25px">Body Concerns</Text>
                      <MenuItem>Exfoliation & Tan Removal</MenuItem>
                      <MenuItem>Skin Dryness</MenuItem>
                      <MenuItem>Body Polishing</MenuItem>
                      <MenuItem>Cellulite & Strech Marks reduction</MenuItem>
                      <MenuItem>Sun Protection</MenuItem>
                      <MenuItem>Pigmentation</MenuItem>
                      <MenuItem>Skin Dehydration</MenuItem>
                      <MenuItem>Body Odour</MenuItem>
                    </SimpleGrid>

                    <SimpleGrid spacing={2}>
                    <Text as='b' fontSize="25px">Face Concerns</Text>
                      <MenuItem>Acne Control</MenuItem>
                      <MenuItem>Pore Care & Face Polishing</MenuItem>
                      <MenuItem>Exfoliation & Tan Polishing</MenuItem>
                      <MenuItem>Skin Dryness</MenuItem>
                      <MenuItem>Dark Circles & Puffiness</MenuItem>
                      <MenuItem>Skin Dehydration</MenuItem>
                      <MenuItem>Night Care</MenuItem>
                      <MenuItem>Pigmented & Chhaped Lips</MenuItem>
                      <MenuItem>Pigmentation</MenuItem>
                      <MenuItem>Sun Protection</MenuItem>
                      <MenuItem>Fine Lines & Wrinkles</MenuItem>
                    </SimpleGrid>

                    <SimpleGrid spacing={3} h="250px">
                    <Text as='b' fontSize="25px">Hair Concerns</Text>
                      <MenuItem>Hair Fall</MenuItem>
                      <MenuItem>Hair Growth</MenuItem>
                      <MenuItem>Dandruff Control</MenuItem>
                      <MenuItem>Hair Damage Repair</MenuItem>
                    </SimpleGrid>
                    
                </Grid>
              </MenuList>
            </Menu>

            <Menu> 
              <MenuButton fontWeight="700">Gift Kits</MenuButton>
              <MenuList>
                <Text as='b' fontSize="25px">Gift Kits</Text>
                <Grid templateColumns="repeat(3,1fr)" h="300px" w="800px">
                    <SimpleGrid  spacing={2}>
                      <MenuItem>Gift for Special One</MenuItem>
                      <MenuItem>New Gift Kits</MenuItem>
                      <MenuItem>Festive Gift Ideas</MenuItem>
                      <MenuItem>Gifts for Family</MenuItem>
                      <MenuItem>Gifts under 999</MenuItem>
                      <MenuItem>E-gift Card</MenuItem>
                    </SimpleGrid>

                    <SimpleGrid spacing={2}>
                      <MenuItem>Body Yoghurts</MenuItem>
                      <MenuItem>Body Masks</MenuItem>
                      <MenuItem>Body Shimmer</MenuItem>
                      <MenuItem>Body Serum</MenuItem>
                      <MenuItem>Body Accessories</MenuItem>
                      <MenuItem>Best Sellers</MenuItem>
                    </SimpleGrid>

                    <SimpleGrid spacing={2}>
                      <MenuItem>Body Exfoliators</MenuItem>
                      <MenuItem>What's New</MenuItem>
                      <MenuItem>Sunscreen</MenuItem>
                      <MenuItem>Body Sticks</MenuItem>
                      <MenuItem>Value Packs</MenuItem>
                      <MenuItem>Body Mists</MenuItem>
                    </SimpleGrid>
                    
                </Grid>
              </MenuList>
            </Menu>
            </HStack>

            {/* <Box>
              <SearchBox/>
            </Box> */}
            <Box  ml={55} w={'350px'} display={"flex"} border='1px solid grey' borderRadius='0.5rem' >
              <Input placeholder="search..."   borderRightRadius='0' border='none' borderRight='1px solid grey'/> 
              {/* <CgSearch fontSize='30px' color="grey" height='45px' width='75px'/> */}
              <Button as={Button}  borderLeft='transparent' borderLeftRadius='0'  ><CgSearch fontSize='25px' /></Button>
            </Box>


          </HStack>


          <Flex alignItems={"center"}>
            
            <Stack
              flex={{ base: 1, md: 0 }}
              justify={"flex-end"}
              direction={"row"}
              spacing={7}
            >
              <Button onClick={toggleColorMode}  >
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
              {
                w>450 && (
                  <RouterLink to='/cart'>
                    <Button as={Button} bg="#15b9dd" href='#' _hover={{bg: "#00838F",}} > 
                    <BsCartCheckFill color="white"/>
                  </Button>
                  </RouterLink>
                )
              }

              <Box>
                <Log/>
              </Box>

            </Stack>
          </Flex>
        </Flex>
      </Box>

      {isOpen ? (
          
          <Box pb={4} display={{ md: 'none' }} mt="90px">

            <Stack as={'nav'} spacing={4}>
              {/* {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))} */}
          
            <Accordion defaultIndex={[0]} allowToggle >
            <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="b" flex='1' textAlign='center' >
                        Account
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Link>Login</Link>
                  </AccordionPanel>

                  <AccordionPanel pb={4}>
                    <Link>Create account</Link>
                  </AccordionPanel>


                  <AccordionPanel pb={4}>
                    <Link>Logout</Link>
                  </AccordionPanel>

                  
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="b" flex='1' textAlign='center' >
                        Body Care
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Link>Body Scrub</Link>
                  </AccordionPanel>

                  <AccordionPanel pb={4}>
                    <Link>Body Wash</Link>
                  </AccordionPanel>

                  <AccordionPanel pb={4}>
                    <Link>Body Soap</Link>
                  </AccordionPanel>

                  <AccordionPanel pb={4}>
                    <Link>Body Mask</Link>
                  </AccordionPanel>

                  <AccordionPanel pb={4}>
                    <Link>Body Serum</Link>
                  </AccordionPanel>
                  
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="b" flex='1' textAlign='center' >
                        Face Care
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Link>Face Scrub</Link>
                  </AccordionPanel>

                  <AccordionPanel pb={4}>
                    <Link>Face Wash</Link>
                  </AccordionPanel>

                  <AccordionPanel pb={4}>
                    <Link>Face Mask</Link>
                  </AccordionPanel>

                  <AccordionPanel pb={4}>
                    <Link>Face Serum</Link>
                  </AccordionPanel>

                  <AccordionPanel pb={4}>
                    <Link>Sunscreen</Link>
                  </AccordionPanel>
                  
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="b" flex='1' textAlign='center' >
                        Hair Care
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Link>Hair Oil</Link>
                  </AccordionPanel>

                  <AccordionPanel pb={4}>
                    <Link>Hair Shampoo</Link>
                  </AccordionPanel>

                  <AccordionPanel pb={4}>
                    <Link>Hair Conditioner</Link>
                  </AccordionPanel>

                  <AccordionPanel pb={4}>
                    <Link>Hair Serum</Link>
                  </AccordionPanel>

                  <AccordionPanel pb={4}>
                    <Link>Hair Mask</Link>
                  </AccordionPanel>
                  
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="b" flex='1' textAlign='center' >
                        Cart Page
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Link>View Cart</Link>
                  </AccordionPanel>

                  <AccordionPanel pb={4}>
                    <Link>Payment </Link>
                  </AccordionPanel>

                  
                </AccordionItem>
                


            </Accordion>
            </Stack>
            
          </Box>
        ) : null}
      
    </>
  );
}

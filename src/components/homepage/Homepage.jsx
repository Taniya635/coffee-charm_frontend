import Sections from "./Sections"
import Carousel from "./Carousel"
import Footer from '../footer/Footer'
import { Box } from "@chakra-ui/react"



const Homepage = () => {
    
  return (
    <Box>
      <Carousel/>
      <Sections/>
      {/* <Footer/> */}
    </Box>
  ) 
}

export default Homepage
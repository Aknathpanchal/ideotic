import { Flex ,Button} from '@chakra-ui/react';
import React from 'react'
import {Link,useNavigate} from "react-router-dom"


const Navbar = () => {
    const navigate = useNavigate()
  return (
    <div>
 <Flex>
 <Link to= "/home">Home</Link>
        <Button
        ml={"80%"}
              width={"150px"}
                colorScheme={"red"}
                textTransform={"uppercase"}
                variant="outline"
                onClick={() => {
                  localStorage.setItem("token", "");
                  navigate("/");
                }}
              >
                Logout
              </Button>
 </Flex>


      
    </div>
  )
}

export default Navbar

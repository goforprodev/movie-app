import { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Box, Text, Image } from "@chakra-ui/react";
import Logo from "./assets/Logo.svg";
import HeadImage from "./assets/HeadImage2.jpg";
function App() {
  return (
    <ChakraProvider>
      <Box width="100%" height="auto" backgroundColor="#e5e5e5">
        <Box
          pl="77px"
          width="100%"
          height="140px"
          backgroundColor="#292929"
          display="flex"
          alignItems="center"
        >
          <Image boxSize="193px" src={Logo} alt="Logo" />
        </Box>
        <Box
          width="100%"
          height="550px"
          backgroundImage={HeadImage}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          display="flex"
          alignItems="center"
          pl="77px"
        >
          <Box width="490px">
          <Text fontSize="72px" color="#fff" lineHeight="93.74px" fontWeight={700}>
            Watch Something Incredible.
          </Text>
          </Box>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;

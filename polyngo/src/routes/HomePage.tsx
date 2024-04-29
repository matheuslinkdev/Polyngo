import { Center, Flex } from '@chakra-ui/react'
import React from 'react'
import ScreenBg from '../Components/Custom/ScreenBg'
import HomeScreen from '../Screens/HomePage';
import Introducao from '../Screens/Introducao';
import IdiomasScreen from '../Screens/Idiomas';

const HomePage = () => {
  return (
    <Flex flexDir="column" justifyContent="center" alignItems="center" maxW="100dvw" h="100%">
      <HomeScreen/>
      <Introducao/>
      <IdiomasScreen/>
    </Flex>
  );
}

export default HomePage
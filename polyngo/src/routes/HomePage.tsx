import { Flex } from '@chakra-ui/react'
import HomeScreenContent from '../Screens/HomeContent';
import Introducao from '../Screens/Introducao';
import IdiomasScreen from '../Screens/Idiomas';

const HomePage = () => {
  return (
    <Flex flexDir="column" justifyContent="center" alignItems="center" maxW="100dvw" h="100%">
      <HomeScreenContent/>
      <Introducao/>
      <IdiomasScreen/>
    </Flex>
  );
}

export default HomePage
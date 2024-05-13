import { Flex } from "@chakra-ui/react";
import RegistroForm from "../../Components/Forms/RegistroForm";

const Registro = () => {
  return (
    <Flex
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      maxW="100dvw"
    >
      <RegistroForm />
    </Flex>
  );
}

export default Registro
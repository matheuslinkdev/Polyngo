import { Flex } from "@chakra-ui/react";
import LoginForm from "../../Components/Forms/LoginForm";


const Login = () => {
  
  return (
    <Flex flexDir="column" justifyContent="center" alignItems="center" maxW="100dvw" minH="80dvh">
     <LoginForm/>
    </Flex>
  );
};

export default Login;

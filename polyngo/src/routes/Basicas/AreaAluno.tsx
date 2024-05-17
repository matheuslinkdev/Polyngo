import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";
import { useAuth } from "../../Context/AuthContext";
import { Navigate } from "react-router-dom";
import EmAndamento from "../../Components/User/EmAndamento";

const AreaAluno = () => {
  const { isAuthenticated, user } = useAuth();

  // Verifica se o usuário está autenticado
  if (!isAuthenticated) {
    // Se não estiver autenticado, redireciona para a página de login
    return <Navigate to="/login" replace />;
  }

  // Se o usuário estiver autenticado, exibe o conteúdo da área do aluno
  return (
    <Flex
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      maxW="100dvw"
      minH="80dvh"
    >
      <Center bgColor="pink.transparent.300" minH="70dvh" w="70dvw" borderRadius="25px" flexDir="column" justifyContent="space-evenly">
        <Box>
          <Heading size="md" fontWeight={400}>
            Seja bem vindo novamente {user.email}
          </Heading>
          <Text>Acompanhe aqui seu progresso nas formações em andamento !</Text>
        </Box>
        <EmAndamento />
      </Center>
    </Flex>
  );
};

export default AreaAluno;

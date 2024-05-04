import { vantagens } from "../../data/introducao";
import { Center, Flex, Heading, Icon, Text } from "@chakra-ui/react";

const CardsVantagens = () => {
  return (
    <Center
      display="flex"
      flexDir={{ base: "column", md: "row" }}
      w="1000px"
      maxW="95dvw"
      h="auto"
      gap={10}
      justifyContent="space-between"
      mt={10}
    >
      {vantagens.map((vantagem, index) => {
        return (
          <Flex
            key={index}
            flexDir="column"
            alignItems="center"
            textAlign="center"
            justifyContent="space-evenly"
            h={250}
            w={220}
            bgColor="common.100"
            borderBottom="5px solid var(--chakra-colors-pink-600)"
            borderTop="5px solid var(--chakra-colors-pink-600)"
            px={2}
          >
            <Icon
              as={vantagem.icone}
              fontSize={32}
              style={{ color: "var(--chakra-colors-pink-600)" }}
            />
            <Heading color="common.900" size="md">
              {vantagem.titulo}
            </Heading>
            <Text color="common.900">{vantagem.descricao}</Text>
          </Flex>
        );
      })}
    </Center>
  );
};

export default CardsVantagens;

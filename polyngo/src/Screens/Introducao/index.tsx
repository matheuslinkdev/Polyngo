import ScreenBg from "../../Components/Custom/ScreenBg";
import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import CardsVantagens from "../../Components/Fragments/CardsVantagens";

const Introducao = () => {
  return (
    <ScreenBg bgImageUrl="/imgs/pexels-katerina-holmes-5905700.jpg">
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDir="column"
        w="95%"
      >
        <Box
          display="flex"
          justifyContent="space-evenly"
          flexDir={{ base: "column", md: "row" }}
          textAlign="center"
          w={1000}
          maxW="95dvw"
          mb={10}
        >
          <Text fontSize={18} fontWeight={500} w={500} maxW="95%">
            Aprender um novo idioma é bom, mas já pensou em aprender de onde
            quiser, com nativos e professores com experiência consolidada ?
          </Text>
          <Spacer />
          <Text fontSize={18} fontWeight={500} w={500} maxW="95%">
            A Polyngo oferece isso, proporcionando uma experiência diferenciada
            e te ajudando a abrir portas para sua{" "}
            <span style={{ color: "var(--chakra-colors-pink-600)" }}>
              carreira
            </span>{" "}
            e{" "}
            <span style={{ color: "var(--chakra-colors-pink-600)" }}>
              enriquecimento
            </span>{" "}
            cultural !
          </Text>
        </Box>
        <Box>
          <CardsVantagens />
        </Box>
      </Flex>
    </ScreenBg>
  );
};

export default Introducao;

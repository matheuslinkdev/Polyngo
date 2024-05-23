import { useEffect, useState } from "react";
import { fetchFormacoes } from "../../../api/global-api";
import { Button, Center, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { MdNavigateNext } from "react-icons/md";
import { FormacaoProps } from "../../../types/global-types";


const CardsFormacoes = () => {
  const [dados, setDados] = useState<FormacaoProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dadosObtidos = await fetchFormacoes();
        setDados(dadosObtidos);
      } catch (error) {
        console.error("Erro ao buscar os dados:");
      }
    };

    fetchData();
  }, []);

  const definirBackground = (formacao: FormacaoProps) => {
    let backgroundFormacao;

    if (formacao.id === "formacaobasica") {
      backgroundFormacao = "pink.800";
    } else if (formacao.id === "formacaointermediaria") {
      backgroundFormacao = "pink.700";
    } else {
      backgroundFormacao = "pink.600";
    }

    return backgroundFormacao;
  };

  return (
    <Center
      display="flex"
      flexDir="column"
      w="1000px"
      maxW="95dvw"
      h="auto"
      gap={10}
      justifyContent="space-between"
      mt={10}
    >
      {dados.map((formacao, index) => {
        return (
          <Flex
            key={index}
            flexDir="column"
            justifyContent="space-evenly"
            textAlign="start"
            h={180}
            w={400}
            maxWidth="95dvw"
            bgColor={definirBackground(formacao)}
            borderLeft="30px solid var(--chakra-colors-pink-600)"
            borderRadius="0 30px 30px 0"
            px={2}
          >
            <Heading color="common.50" size="md" fontWeight={500}>
              {formacao.nome}
            </Heading>
            <Text color="common.100" fontWeight={500}>
              {formacao.descricao}
            </Text>

            <Button
              display="flex"
              justifyContent="center"
              alignItems="center"
              bgColor="pink.950"
              color="common.900"
              width="150px"
              _hover={{ bgColor: "pink.700" }}
            >
              <Text fontWeight={500} mt="-1">
                Saiba Mais
              </Text>
              <Icon
                as={MdNavigateNext}
                fontSize={22}
                style={{ color: "#fff" }}
              />
            </Button>
          </Flex>
        );
      })}
    </Center>
  );
};

export default CardsFormacoes;

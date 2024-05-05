import { useEffect, useState } from "react";
import { fetchIdiomas } from "../../../api/global-api.ts";
import { Center, Flex, Heading, Image, Text } from "@chakra-ui/react";

const CardsIdiomas = () => {
  const [idiomas, setIdiomas] = useState([]);

  useEffect(() => {
    const getIdiomasData = async () => {
      try {
        const dadosIdiomas = await fetchIdiomas();
        setIdiomas(dadosIdiomas);
        console.log(idiomas);
      } catch (err) {
        console.log(err, "Erro ao carregar dados de idiomas");
      }
    };

    getIdiomasData();
  }, []);

  return (
    <Flex
      w="95dvw"
      flexWrap="wrap"
      justifyContent="space-evenly"
      alignItems="center"
      gap="25px 0"
    >
      {idiomas &&
        idiomas.map((idioma, index) => {
          return (
            <Center
              key={index}
              w={270}
              h={280}
              textAlign="center"
              display="flex"
              flexDir="column"
              justifyContent="space-between"
            >
              <Image
                src={idioma.urlBandeira}
                alt={idioma.alt}
                h="40px"
                w="auto"
              />
              <Heading color="common.50" size="md">
                {idioma.nome}
              </Heading>
              <Text color="common.100" fontWeight={500}>{idioma.descricao}</Text>
            </Center>
          );
        })}
    </Flex>
  );
};

export default CardsIdiomas;

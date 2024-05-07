import CardsFormacoes from "../../Components/Fragments/CardsFormacoes";
import { Center, Text } from "@chakra-ui/react";
import ScreenBg from "./../../Components/Custom/ScreenBg/index";
import RedirectBtn from "../../Components/Buttons/RedirectBtn";

const texto =
  "Nossas formações são divididas em módulos, com cada módulo tendo a duração de 1(um) mês, cada um cuidadosamente elaborado para abordar tópicos específicos e níveis de proficiência, adaptados para atender às suas necessidades individuais. Desde iniciantes até avançados, nossa variedade de formações oferece uma jornada escalonada de aprendizado, fornecendo as habilidades linguísticas necessárias para se comunicar com confiança em um mundo globalizado.  ";

const Formacoes = () => {
  return (
    <>
      <ScreenBg bgImageUrl="https://image.khaleejtimes.com/?uuid=23aeba0b-0f29-4fb5-84d4-3cb9bf2ccf7c&type=preview&q=75&crop_w=0.99999&crop_h=0.8988&x=0&y=0">
        <Center
          display="flex"
          flexDir="column"
          justifyContent="space-evenly"
          alignItems="center"
          w="95dvw"
          textAlign="center"
          >
          <Text w={650} maxW="95dvw" textAlign="start" fontWeight={500}>{texto}</Text>
          <CardsFormacoes />
          <RedirectBtn label="Matrícula" path="/matricula" />
        </Center>
      </ScreenBg>
    </>
  );
};

export default Formacoes;

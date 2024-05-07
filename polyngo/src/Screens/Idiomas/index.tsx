import { Center, Heading } from "@chakra-ui/react";
import ScreenBg from "../../Components/Custom/ScreenBg";
import CardsIdiomas from "../../Components/Fragments/CardsIdiomas";
import RedirectBtn from "../../Components/Buttons/RedirectBtn";

const IdiomasScreen = () => {
  return (
    <ScreenBg bgImageUrl="src/imgs/pexels-nurseryart-346885.jpg">
      <Center
        display="flex"
        flexDir="column"
        justifyContent="space-evenly"
        alignItems="center"
        w="95dvw"
        textAlign="center"
      >
        <Heading mb={20} color="common.100" fontWeight={400}>
          Quais idiomas ensinamos ?
        </Heading>
        <CardsIdiomas />

        <Center flexDir="column" mt={10}>
          <Heading color="common.100" fontWeight={400} size="lg">
            Ficou interessado(a) ?
          </Heading>
          <RedirectBtn label="Formações" path="/formacoes"/>
        </Center>
      </Center>
    </ScreenBg>
  );
};

export default IdiomasScreen;

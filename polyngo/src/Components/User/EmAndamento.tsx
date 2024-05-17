import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Progress,
  Heading,
  Text,
  CircularProgress,
  CircularProgressLabel,
  Flex,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { setProgressMessage } from "../../utils/UserFunctions";
const EmAndamento = () => {
  const [level, setLevel] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const levels = ["Básico", "Intermediário", "Avançado"];
    const randomLevel = levels[Math.floor(Math.random() * levels.length)];
    setLevel(randomLevel);

    const randomProgress = Math.floor(Math.random() * 101);
    setProgress(randomProgress);
  }, []);

  return (
    <Accordion
      allowToggle
      w={550}
      maxW="95dvw"
      textAlign="start"
      bgColor="pink.700"
      borderRadius="5px"
    >
      <AccordionItem border="none">
        <AccordionButton color="#fff">
          <Box as="span" flex="1" textAlign="left">
            <Heading fontSize="1.4rem" fontWeight={400}>
              Formação em Francês
            </Heading>
          </Box>
          <AccordionIcon />
        </AccordionButton>

        <AccordionPanel pb={4}>
          <Heading size="md" fontWeight={400} mb={1}>
            Nível: {level}
          </Heading>

          <Progress
            display={{ base: "none", md: "block" }}
            value={progress}
            hasStripe
            size="sm"
            colorScheme="blue"
            borderRadius="5px"
          />

          <Flex display={{ base: "flex", md: "none" }}>
            <CircularProgress size="70px" value={progress} color="pink.400">
              <CircularProgressLabel
                display="flex"
                alignItems="center"
                justifyContent="center"
                w="100%"
                h="100%"
              >
                {progress}%
              </CircularProgressLabel>
            </CircularProgress>
          </Flex>
          <Heading fontWeight={600} fontSize="1.4rem" my={2}>
            {progress}% de progresso
          </Heading>
          <Text>{setProgressMessage(progress)}</Text>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default EmAndamento;

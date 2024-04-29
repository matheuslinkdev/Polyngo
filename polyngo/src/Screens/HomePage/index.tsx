import React from "react";
import ScreenBg from "../../Components/Custom/ScreenBg";
import { Box, Flex, Image, Spacer, Text } from "@chakra-ui/react";
import RedirectBtn from "../../Components/Buttons/RedirectBtn";

const HomeScreen = () => {
  return (
    <ScreenBg bgImageUrl="src/imgs/pexels-olly-3769138.jpg">
      <Flex width="90%" flexWrap="wrap" gap={20}>
        <Box display="flex" flexDir="column" justifyContent="center" w={400}>
          <Text fontSize="2xl" fontWeight="600" color="common.50">
            Expanda seu conhecimento e abra portas ao redor do mundo conosco!
          </Text>
          <Text fontSize="2xl" fontWeight="600" color="common.50">
            E o melhor,{" "}
            <span style={{ color: "var(--chakra-colors-pink-600)" }}>
              de onde quiser!
            </span>
          </Text>
          <RedirectBtn label="Saiba Mais"/>
        </Box>
        <Spacer />
        <Box
          bgColor="pink.600"
          position="relative"
          w={350}
          h={200}
          borderRadius={15}
        >
          <Image
            src="src/imgs/student.webp"
            bottom={0}
            w={350}
            position="absolute"
          />
        </Box>
      </Flex>
    </ScreenBg>
  );
};

export default HomeScreen;

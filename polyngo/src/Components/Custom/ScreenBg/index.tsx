import { Center } from "@chakra-ui/react";
import React from "react";

const ScreenBg = ({ children, bgImageUrl }) => {
  return (
    <Center
      bgImage={`url(${bgImageUrl})`}
      backgroundAttachment="fixed"
      className="screen-background"
      w="100%"
      h="100dvh"
      backgroundSize="cover"
      backgroundPosition="center"
    >
      <Center w="100%" h="100%" className="bg-overlay">
        {children}
      </Center>
    </Center>
  );
};

export default ScreenBg;

import { Center } from "@chakra-ui/react";

const ScreenBg = ({ children, bgImageUrl }) => {
  return (
    <Center
      position="relative"
      bgImage={`url(${bgImageUrl})`}
      className="screen-background"
      w="100%"
      minH="100dvh"
      backgroundSize="cover"
      backgroundPosition="center"
    >
      <div className="bg-overlay"></div> {/* Pseudoelemento para overlay */}
      <Center w="100%" h="100%" className="content" py={5}>
        {children}
      </Center>
    </Center>
  );
};

export default ScreenBg;

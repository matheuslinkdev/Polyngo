import { Center } from "@chakra-ui/react";
import { ScreenBgProps } from '../../../../types/global-types'

const ScreenBg = ({ children, bgImageUrl }: ScreenBgProps) => {
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

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Icon,
  Heading,
  Text,
  Divider,
  Flex,
  Center,
} from "@chakra-ui/react";
import { AiOutlineUser } from "react-icons/ai";
import { UseAuth } from "../../Context/AuthContext";
import { FaBuildingColumns, FaHeadset, FaNetworkWired } from "react-icons/fa6";

const modalLinks = [
  {
    name: "Suporte",
    icon: FaHeadset,
  },
  {
    name: "Secretaria",
    icon: FaBuildingColumns,
  },
  {
    name: "Networking",
    icon: FaNetworkWired,
  },
];

const ModalPerfil = () => {
  const { logout, user } = UseAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} bg="none">
        {" "}
        <Icon
          as={AiOutlineUser}
          fontSize={30}
          cursor="pointer"
          color="pink.950"
        />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bgColor="pink.700">
          <ModalHeader>
            <Center flexDir="column">
              <Heading size="lg" fontWeight={300}>
                Olá
              </Heading>
              <Text ml={1} fontWeight={300} fontSize={22}>
                {user && user.email}
              </Text>
            </Center>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              Como estão suas aulas ? Lembre-Se de entregar suas atividades
              dentro dos prazos estabelecidos e não pare ! Estamos aqui para te
              ajudar a desbravar o mundo ! Abaixo você pode consultar os
              principais serviços que você pode precisar:
            </Text>
          </ModalBody>
          <Divider />
          <Flex w="100%" justifyContent="space-evenly" my={2}>
            {modalLinks.map((link, index) => {
              return (
                <Center key={index} flexDir="column">
                  <Icon
                    as={link.icon}
                    color="pink.950"
                    border="1px solid black"
                    h="46px"
                    w="46px"
                    borderRadius="50%"
                    p="4px"
                    cursor="pointer"
                  />
                  <Text>{link.name}</Text>
                </Center>
              );
            })}
          </Flex>
          <Divider />

          <ModalFooter>
            <Button
              bgColor="red.300"
              _hover={{ bgColor: "red.600" }}
              mr={3}
              onClick={onClose}
            >
              Fechar
            </Button>
            <Button
              onClick={logout}
              bgColor="pink.700"
              _hover={{ bgColor: "pink.800" }}
            >
              Logout
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalPerfil;

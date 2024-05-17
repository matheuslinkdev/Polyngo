import { Box, Flex, Heading, Icon, List, ListItem } from "@chakra-ui/react";
import { AiFillBackward, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { getLinks } from "./data";
import { Link } from "react-router-dom";
import UserButtons from "../../Buttons/UserButtons";
import { UseAuth } from "../../../Context/AuthContext";
import ModalPerfil from "../../User/ModalPerfil";

const Header = () => {
  const { isAuthenticated } = UseAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const links = getLinks(); // Call getLinks to get the array of links

  return (
    <Flex
      w="100%"
      h="10dvh"
      bg="pink.600"
      justifyContent="space-between"
      alignItems="center"
      px={2}
      position="relative"
    >
      <Icon
        as={sidebarOpen ? AiFillBackward : AiOutlineMenu}
        fontSize={32}
        onClick={() => setSidebarOpen(!sidebarOpen)}
        cursor="pointer"
        color="pink.950"
      />
      <Flex
        position="absolute"
        left={0}
        top="10dvh"
        bg="pink.700"
        w={300}
        h="90dvh"
        borderRadius="0 0 10px 0"
        zIndex={999}
        transition="all 0.3s ease-in-out"
        transform={sidebarOpen ? "translateX(0)" : "translateX(-100%)"}
      >
        {sidebarOpen && (
          <List ml={3}>
            {links.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                onClick={() => setSidebarOpen(false)}
              >
                <ListItem
                  fontSize="lg"
                  fontWeight={600}
                  color="pink.950"
                  listStyleType="none"
                  m="10px auto"
                  _hover={{ color: "common.950" }}
                >
                  {link.ref}
                </ListItem>
              </Link>
            ))}
          </List>
        )}
      </Flex>
      <Heading size="lg" color="pink.950" fontWeight={400}>
        <Link to="/">Polyngo Idiomas</Link>
      </Heading>
      <Box display="flex">
        {isAuthenticated ? (
          <>
            <ModalPerfil />
          </>
        ) : (
          <UserButtons />
        )}
      </Box>
    </Flex>
  );
};

export default Header;

import { Flex, Heading, Icon, List, ListItem } from "@chakra-ui/react";
import {
  AiOutlineUserAdd,
  AiFillBackward,
  AiOutlineMenu,
} from "react-icons/ai";
import { useState } from "react";
import { links } from "./data";
import { Link } from "react-router-dom";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Flex
      w="100%"
      h="6dvh"
      bg="pink.600"
      justifyContent="space-between"
      alignItems="center"
      px={2}
      position="relative"
    >
      <Icon
        as={sidebarOpen ? AiFillBackward : AiOutlineMenu}
        fontSize={26}
        onClick={() => setSidebarOpen(!sidebarOpen)}
        cursor="pointer"
        color="pink.950"
      />
      <Flex
        position="absolute"
        left={0}
        top="6dvh"
        bg="pink.700"
        w={300}
        h="70dvh"
        borderRadius="0 0 10px 0"
        zIndex={999}
        transition="all 0.3s ease-in-out"
        transform={sidebarOpen ? "translateX(0)" : "translateX(-100%)"}
      >
        {sidebarOpen && (
          <List ml={3}>
            {links.map((link, index) => {
              return (
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
                    _hover={{color: "common.950"}}
                  >
                    {link.ref}
                  </ListItem>
                </Link>
              );
            })}
          </List>
        )}
      </Flex>
      <Heading size="lg" color="pink.950">
        Polyngo
      </Heading>
      <Icon
        as={AiOutlineUserAdd}
        fontSize={26}
        cursor="pointer"
        color="pink.950"
      />
    </Flex>
  );
};

export default Header;

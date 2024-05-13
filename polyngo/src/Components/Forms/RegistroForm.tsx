import {
  Button,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const RegistroForm = () => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <FormControl w={400} maxW="95dvw" mt={10} color="common.100">
      <FormLabel mt={5}>Digite seu Nome:</FormLabel>
      <Input
        type="text"
        placeholder="Seu Nome"
        color="common.200"
        fontWeight={500}
        _placeholder={{ color: "common.300" }}
      />
      <FormLabel mt={5}>Digite um Email de acesso:</FormLabel>
      <Input
        type="email"
        placeholder="Seu email"
        color="common.200"
        fontWeight={500}
        _placeholder={{ color: "common.300" }}
      />
      <FormLabel mt={5}>Digite uma Senha de Acesso:</FormLabel>
      <InputGroup>
        <Input
          type={isHidden ? "password" : "text"}
          placeholder="Sua senha de acesso"
          color="common.200"
          fontWeight={500}
          _placeholder={{ color: "common.300" }}
        />
        <InputRightElement width="3rem">
          <IconButton
            fontSize={20}
            color="common.950"
            bg="none"
            onClick={() => setIsHidden(!isHidden)}
            icon={isHidden ? <FaRegEye /> : <FaEyeSlash />}
            variant="ghost"
            aria-label="Mudar Visibilidade da senha"
            _hover={{ bg: "none" }}
          />
        </InputRightElement>
      </InputGroup>
      <Text mt={5}>
        Já possui uma conta ?{" "}
        <Link
          to="/login"
          style={{
            color: "var(--chakra-colors-common-950)",
            fontWeight: 600,
            textDecoration: "underline",
          }}
        >
          Login
        </Link>
      </Text>
      <Button
        type="submit"
        mt={5}
        onClick={() => console.log("Formulario submetido")}
      >
        Registrar
      </Button>
    </FormControl>
  );
};

export default RegistroForm;

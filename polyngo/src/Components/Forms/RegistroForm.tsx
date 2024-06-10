import {
  Button,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { FormEvent, useState } from "react";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UseAuth } from "../../Context/AuthContext";

const RegistroForm = () => {
  const [isHidden, setIsHidden] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { BASE_URL } = UseAuth();

  const navigate = useNavigate();

  async function submitRegistro(e: FormEvent) {
    e.preventDefault();

    // Check for empty fields
    if (!name || !email || !password) {
      setErrorMessage("Todos os campos são obrigatórios!");
      return;
    }

    if (password.length < 8) {
      setErrorMessage("A senha deve conter pelo menos 8 caracteres!");
      return;
    }

    try {
      const res = await axios.post(`${BASE_URL}/signup`, {
        email,
        password,
        name,
      });

      if (res.data === "exist") {
        setErrorMessage("Usuário já existe!");
      } else if (res.data === "notexist") {
        navigate("/login", { state: { id: email } });
      }
    } catch (e) {
      setErrorMessage("Detalhes incorretos!");
      console.log(e);
    }
  }

  return (
    <form onSubmit={submitRegistro}>
      <FormControl w={400} maxW="95dvw" mt={10} color="common.100">
        <FormLabel mt={5}>Digite seu Nome:</FormLabel>
        <Input
          type="text"
          placeholder="Seu Nome"
          color="common.200"
          fontWeight={500}
          _placeholder={{ color: "common.300" }}
          onChange={(e) => setName(e.target.value)}
        />
        <FormLabel mt={5}>Digite um Email de acesso:</FormLabel>
        <Input
          type="email"
          placeholder="Seu email"
          color="common.200"
          fontWeight={500}
          _placeholder={{ color: "common.300" }}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormLabel mt={5}>Digite uma Senha de Acesso:</FormLabel>
        <InputGroup>
          <Input
            type={isHidden ? "password" : "text"}
            placeholder="Sua senha de acesso"
            color="common.200"
            fontWeight={500}
            _placeholder={{ color: "common.300" }}
            onChange={(e) => setPassword(e.target.value)}
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
        {errorMessage && (
          <Alert status="error" mt={4} bgColor="red">
            <AlertIcon />
            {errorMessage}
          </Alert>
        )}
        <Text mt={5}>
          Já possui uma conta?{" "}
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
        <Button type="submit" mt={5}>
          Registrar
        </Button>
      </FormControl>
    </form>
  );
};

export default RegistroForm;

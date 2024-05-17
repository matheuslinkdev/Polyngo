import React, { useState, FormEvent } from "react";
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
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../Context/AuthContext";

const LoginForm: React.FC = () => {
  const [isHidden, setIsHidden] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const { setIsAuthenticated, setUser } = useAuth();

  async function submitLogin(e: FormEvent) {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });

      if (res.data === "exist") {
        setErrorMessage("");
        setIsAuthenticated(true);
        setUser({ email, password });
        navigate("/areadoaluno", { state: { id: email } });
      }
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage("Erro de rede. Tente novamente.");
      }
    }
  }

  return (
    <form onSubmit={submitLogin}>
      <FormControl w={400} maxW="95dvw" mt={10} color="common.100">
        <FormLabel mt={5}>Digite seu Email de acesso:</FormLabel>
        <Input
          type="email"
          placeholder="Seu email"
          color="common.200"
          fontWeight={500}
          _placeholder={{ color: "common.300" }}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormLabel mt={5}>Digite sua Senha de Acesso:</FormLabel>
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
          Não possui uma conta?{" "}
          <Link
            to="/registro"
            style={{
              color: "var(--chakra-colors-common-950)",
              fontWeight: 600,
              textDecoration: "underline",
            }}
          >
            Matrícula
          </Link>
        </Text>
        <Button type="submit" mt={5}>
          Login
        </Button>
      </FormControl>
    </form>
  );
};

export default LoginForm;

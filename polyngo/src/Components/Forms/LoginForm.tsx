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
import axios from "axios";
import { useState } from "react";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [isHidden, setIsHidden] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/login", { email, password })
      .then((result) => {
        if (result.status === 200) {
          navigate("/areadoaluno");
        }
        console.log(result);
      })
      .catch((err) => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit}>
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
        <Text mt={5}>
          Não possui uma conta ?{" "}
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

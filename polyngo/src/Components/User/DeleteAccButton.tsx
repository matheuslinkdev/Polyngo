import React from "react";
import { Button } from "@chakra-ui/react";
import { UseAuth } from "../../Context/AuthContext";

const DeleteAccountButton: React.FC = () => {
  const { deleteAccount } = UseAuth();

  const handleDeleteAccount = () => {
    if (window.confirm("Tem certeza que quer excluir sua conta?")) {
      deleteAccount();
    }
  };

  return (
    <Button colorScheme="red" onClick={handleDeleteAccount}>
      Excluir Conta
    </Button>
  );
};

export default DeleteAccountButton;

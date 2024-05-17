// DeleteAccountButton.tsx
import React from "react";
import { Button } from "@chakra-ui/react";
import { UseAuth } from "../../Context/AuthContext";

const DeleteAccountButton: React.FC = () => {
  const { deleteAccount } = UseAuth();

  const handleDeleteAccount = () => {
    if (window.confirm("Are you sure you want to delete your account?")) {
      deleteAccount();
    }
  };

  return (
    <Button colorScheme="red" onClick={handleDeleteAccount}>
      Delete Account
    </Button>
  );
};

export default DeleteAccountButton;

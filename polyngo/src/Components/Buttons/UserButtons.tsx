import { Button, ButtonGroup } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const UserButtons = () => {
  return (
    <ButtonGroup>
      <Link to="/login">
        <Button bgColor="pink.400">Login</Button>
      </Link>
      <Link to="/registro">
        <Button bgColor="pink.500">Registro</Button>
      </Link>
    </ButtonGroup>
  );
}

export default UserButtons
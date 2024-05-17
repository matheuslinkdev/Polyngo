import { Button, ButtonGroup } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const UserButtons = () => {
  return (
    <ButtonGroup>
      <Link to="/login">
        <Button bgColor="pink.500" _hover={{bgColor: "pink.700"}}>Login</Button>
      </Link>
      <Link to="/registro">
        <Button bgColor="pink.600" _hover={{bgColor: "pink.700"}}>Registro</Button>
      </Link>
    </ButtonGroup>
  );
}

export default UserButtons
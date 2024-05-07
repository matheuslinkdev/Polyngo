import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface Props {
  label: string;
  path: string;
}

const RedirectBtn = ({ label, path }: Props) => {
  return (
    <Link to={path}>
      <Button
        w={200}
        h={45}
        bgColor="pink.600"
        color="common.100"
        fontSize={18}
        borderRadius={20}
        mt={5}
        _hover={{ bgColor: "pink.700" }}
      >
        {label}
      </Button>
    </Link>
  );
};

export default RedirectBtn;

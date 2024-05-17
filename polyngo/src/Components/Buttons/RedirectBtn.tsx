import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { RedirectBtnProps } from "../../../types/global-types";

const RedirectBtn = ({ label, path }: RedirectBtnProps) => {
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

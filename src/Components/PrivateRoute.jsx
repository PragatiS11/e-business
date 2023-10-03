import { useToast } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export function PrivateRoute({ children }) {
  const toast = useToast();
  const location = useLocation();
  // console.log(location);
  const isAuth = useSelector((store) => store.userReducer.isAuth);

  if (isAuth === false) {
    toast({
      title: "Please login to visit the product page",
      // description: "",
      status: "error",
      variant: "subtle",
      duration: 3000,
      isClosable: true,
    });
    return <Navigate state={location} to="/" replace={true} />;
  }

  return children;
}

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormLabel,
  FormControl,
  Input,
  Button,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../../Redux/UserReducer/action";

export function Login() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const toast = useToast();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isAuth, isError, errorMessage } = useSelector((store) => {
    return {
      isAuth: store.userReducer.isAuth,
      isError: store.userReducer.isError,
      errorMessage: store.userReducer.errorMessage,
    };
  });

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const data = {
        email,
        password,
      };

      const response = await dispatch(getUserData(data));
      setEmail("");
      setPassword("");
      onClose();

      if (response && response.success) {
        toast({
          position: "bottom",
          title: "Login Successful",
          status: "success",
          variant: "subtle",
          duration: 3000,
          isClosable: true,
        });
      } else {
        toast({
          position: "bottom",
          title: "Login Failed",
          description: response.fail,
          status: "error",
          variant: "subtle",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.log(error);
      toast({
        position: "bottom",
        title: "An error occurred",
        description: "Please try again later.",
        status: "error",
        variant: "subtle",
        duration: 3000,
        isClosable: true,
      });
    }
  }

  function handleCancel() {
    setEmail("");
    setPassword("");
    onClose();
  }

  return (
    <>
      <Button
        backgroundColor="#151515"
        color="white"
        onClick={onOpen}
        borderRadius={"20px"}
        _hover={{
          backgroundColor: "#151515",
          color: "white",
        }}
      >
        Login
      </Button>

      <Modal
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
        closeOnOverlayClick={false}
      >
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={handleSubmit}>
            <ModalHeader color="#151515">Login</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl isRequired>
                <FormLabel color="#151515">Email</FormLabel>
                <Input
                  ref={initialRef}
                  placeholder="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>

              <FormControl mt={4} isRequired>
                <FormLabel color="#151515">Password</FormLabel>
                <Input
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button
                backgroundColor="#151515"
                color="white"
                mr={3}
                type="submit"
                borderRadius={"20px"}
                _hover={{
                  backgroundColor: "#151515",
                  color: "white",
                }}
              >
                Submit
              </Button>
              <Button
                backgroundColor="#151515"
                color="white"
                onClick={handleCancel}
                borderRadius={"20px"}
                _hover={{
                  backgroundColor: "#151515",
                  color: "white",
                }}
              >
                Cancel
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}

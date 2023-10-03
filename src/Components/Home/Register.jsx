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
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { postUserData } from "../../Redux/UserReducer/action";

export default function Register() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const toast = useToast();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const data = {
        name: name,
        email: email,
        password: password,
        phone: phone,
        loginStatus: false,
        signupStatus: true,
        orders: [],
        cartItems: [],
        totalPrice: 0,
      };
      await dispatch(postUserData(data));

      toast({
        position: "bottom",
        title: "Registration Successful",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      console.log("registration successful");

      setEmail("");
      setName("");
      setPassword("");
      setPhone("");
      onClose();
    } catch (error) {
      console.log(error);
    }
  }

  function handleCancel() {
    setEmail("");
    setName("");
    setPassword("");
    setPhone("");
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
        Register
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
            <ModalHeader color="#151515">Register</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl isRequired>
                <FormLabel color="#151515">Name</FormLabel>
                <Input
                  ref={initialRef}
                  placeholder="Name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormControl>

              <FormControl mt={4} isRequired>
                <FormLabel color="#151515">Email</FormLabel>
                <Input
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

              <FormControl mt={4} isRequired>
                <FormLabel color="#151515">Phone</FormLabel>
                <Input
                  placeholder="Phone"
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button
                backgroundColor="#151515"
                color="white"
                mr={3}
                // onClick={handleSubmit}
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

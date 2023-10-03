import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  Button,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../Redux/UserReducer/action";

export function Logout({ val }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();
  const toast = useToast();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.userReducer.user);

  function handleLogout() {
    onClose();
    toast({
      position: "bottom",
      title: "Successfully Logged Out",
      // description: "",
      status: "success",
      variant: "subtle",
      duration: 3000,
      isClosable: true,
    });
    dispatch(logoutUser(user.id));
  }

  return (
    <>
      <Button
        fontWeight="500"
        fontSize="lg"
        backgroundColor="#151515"
        color="white"
        onClick={onOpen}
        borderRadius={"20px"}
        _hover={{
          backgroundColor: "#151515",
          color: "white",
        }}
      >
        {val}
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="2xl" color="#013442">
              Logout
            </AlertDialogHeader>

            <AlertDialogBody color="#013442" fontSize="lg">
              Are you sure you want to logout?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button
                ref={cancelRef}
                onClick={onClose}
                backgroundColor="#151515"
                color="white"
                fontWeight="500"
                borderRadius={"20px"}
                _hover={{
                  backgroundColor: "#151515",
                  color: "white",
                }}
              >
                Cancel
              </Button>
              <Button
                backgroundColor="#151515"
                color="white"
                onClick={handleLogout}
                borderRadius={"20px"}
                ml={3}
                fontWeight="500"
                _hover={{
                  backgroundColor: "#151515",
                  color: "white",
                }}
              >
                Logout
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}

import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser, patchUserData } from "../Redux/UserReducer/action";
import Footer from "../Components/Home/Footer";
import Navbar from "../Components/Home/Navbar";
import useCartData from "../Cart";

function PaymentPage() {
  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.userReducer.user);
  const [isPaymentProcessing, setPaymentProcessing] = useState(false);
  const { total } = useCartData();

  const handlePayment = async (e) => {
    e.preventDefault();
    setPaymentProcessing(true);

    // Simulating payment processing time (5 seconds)
    await new Promise((resolve) => setTimeout(resolve, 3000));
    toast({
      title: "Payment Successful",
      description: "Thank you for your payment!",
      status: "success",
      variant: "subtle",
      duration: 3000,
      isClosable: true,
    });

    dispatch(patchUserData(user.id, { cartItems: [] }));
    navigate("/");
  };

  const disabledInputStyle = {
    backgroundColor: "#f9f9f9", // Light gray background color
    color: "#777", // Light gray text color
    cursor: "not-allowed", // Show "not allowed" cursor
  };

  return (
    <>
      <Navbar />
      <Container maxW="lg" my={"5rem"}>
        <Box p={6} borderWidth="1px" borderRadius="lg" boxShadow="lg">
          <Text fontSize="3xl" mb={4} fontWeight="bold" textAlign="center">
            Payment Information
          </Text>
          <form>
            <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
              <GridItem colSpan={{ base: "auto", md: 6 }}>
                <FormControl isRequired>
                  <FormLabel>Card Number</FormLabel>
                  <Input
                    type="text"
                    placeholder="Card Number"
                    borderRadius="md"
                    boxShadow="sm"
                    _focus={{ boxShadow: "md" }}
                  />
                </FormControl>
              </GridItem>
              <GridItem colSpan={{ base: "auto", md: 3 }}>
                <FormControl isRequired>
                  <FormLabel>Expiration Date</FormLabel>
                  <Input
                    type="text"
                    placeholder="MM/YY"
                    borderRadius="md"
                    boxShadow="sm"
                    _focus={{ boxShadow: "md" }}
                  />
                </FormControl>
              </GridItem>
              <GridItem colSpan={{ base: "auto", md: 3 }}>
                <FormControl isRequired>
                  <FormLabel>CVV</FormLabel>
                  <Input
                    type="text"
                    placeholder="CVV"
                    borderRadius="md"
                    boxShadow="sm"
                    _focus={{ boxShadow: "md" }}
                  />
                </FormControl>
              </GridItem>
            </Grid>
            <FormControl isRequired mt={4}>
              <FormLabel>Name on Card</FormLabel>
              <Input
                type="text"
                placeholder="Name on Card"
                borderRadius="md"
                boxShadow="sm"
                _focus={{ boxShadow: "md" }}
              />
            </FormControl>
            <FormControl isRequired mt={4}>
              <FormLabel>Amount to be Paid</FormLabel>
              <Input
                type="text"
                borderRadius="md"
                boxShadow="sm"
                _focus={{ boxShadow: "md" }}
                placeholder={`$${user.totalPrice}.00`}
                isReadOnly
                isDisabled
                _disabled={disabledInputStyle}
              />
            </FormControl>
            <Flex justify="center" mt={6}>
              <Button
                backgroundColor="#151515"
                // borderRadius={"20px"}
                color="white"
                _hover={{
                  backgroundColor: "#151515",
                  color: "white",
                }}
                type="submit"
                onClick={handlePayment}
              >
                Pay Now
              </Button>
            </Flex>
          </form>
        </Box>
      </Container>
      <Footer />

      {isPaymentProcessing && (
        <Modal isOpen={isPaymentProcessing} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Processing Payment</ModalHeader>
            <ModalBody>
              <Flex justify="center" alignItems="center" flexDirection="column">
                <Spinner size="xl" />
                <Text mt={4}>
                  You will be redirected to the homepage once the payment is
                  confirmed.
                </Text>
              </Flex>
            </ModalBody>
            <ModalFooter />
          </ModalContent>
        </Modal>
      )}
    </>
  );
}

export default PaymentPage;

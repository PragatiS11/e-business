import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/ProductReducer/action";
import { useSearchParams } from "react-router-dom";
import Filter from "./Filter";
import ProductCard from "./ProductCard";
import { Grid, Box, Heading, Image, Flex, Spinner } from "@chakra-ui/react";
import Navbar from "../Components/Home/Navbar";
import Footer from "../Components/Home/Footer";

const Collections = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { isLoading, products } = useSelector((store) => {
    return {
      isLoading: store.productReducer.isLoading,
      products: store.productReducer.products,
    };
  });

  useEffect(() => {
    let obj = {
      params: {
        _sort: searchParams.get("order") && "price",
        _order: searchParams.get("order"),
        gender: searchParams.get("gender"),
        category: searchParams.get("category"),
      },
    };

    dispatch(getProducts(obj));
  }, [searchParams]);

  return (
    <>
      <Navbar />
      {isLoading === true && (
        <Flex height="100vh" alignItems="center" justifyContent="center">
          <Spinner
            thickness="4px"
            emptyColor="gray.200"
            color="#151515"
            size="xl"
            alignItems={"center"}
          />
        </Flex>
      )}
      {isLoading === false && (
        <Box m={"auto"} mt={"1.5rem"} w={"93%"}>
          <Flex
            bg={"blue.400"}
            w={["100%", "100%", "100%", "97%"]}
            borderRadius={"10px"}
            margin={"auto"}
            color={"white"}
            justifyContent={"space-between"}
            flexWrap={["wrap", "wrap", "nowrap"]}
          >
            <Box w={["100%", "100%", "50%", "50%"]}>
              <Box>
                <Heading as="h3" size="md" margin={"10px"} p={"10px"}>
                  SUMMER FLASH SALE
                </Heading>
              </Box>
              <Box w={"100%"}>
                <Heading as="h2" size="2xl" noOfLines={3} p={"20px"}>
                  Grab up to 60% off on selected products
                </Heading>
              </Box>
            </Box>
            <Box w={["100%", "100%", "50%", "50%"]}>
              <Box>
                <Image
                  w={"100%"}
                  borderRadius={"10px"}
                  src="https://img.freepik.com/free-photo/portrait-curly-girl-with-red-lipstick-taking-notes-tablet-pink-background-with-dressees_197531-17620.jpg?size=626&ext=jpg"
                />
              </Box>
            </Box>
          </Flex>
          <Box>
            <Heading marginBottom={"20px"} p={"20px"} w={"95%"} m={"auto"}>
              2023 New Arrival
            </Heading>
          </Box>
          <Box>
            <Filter />
            <Grid
              templateColumns={[
                "repeat(1, 1fr)",
                "repeat(2, 1fr)",
                "repeat(3, 1fr)",
                // "repeat(4, 1fr)",
              ]}
              gap={"3rem"}
              w={"90%"}
              m={"auto"}
              my={"1.5rem"}
            >
              {products.length > 0 &&
                products.map((el) => {
                  return <ProductCard key={el.id} {...el} />;
                })}
            </Grid>
          </Box>
        </Box>
      )}

      <Footer />
    </>
  );
};

export default Collections;

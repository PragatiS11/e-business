import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserData, patchUserData } from "../Redux/UserReducer/action";
import { getProducts } from "../Redux/ProductReducer/action";
import { Box, Text, Button, Flex, useToast } from "@chakra-ui/react";
import Carousel from "../Components/SingleProduct/Carousel";
import { useParams } from "react-router-dom";
import Colors from "../Components/SingleProduct/Colors";
import Stars from "../Components/SingleProduct/Stars";
import SelectSizes from "../Components/SingleProduct/SelectSizes";
import Navbar from "../Components/Home/Navbar";
import Footer from "../Components/Home/Footer";

const data = [
  {
    image: "",
  },
  {
    image: "",
  },
  {
    image: "",
  },
  {
    image: "",
  },
];

export function SingleProduct() {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState(null);
  const [singleProduct, setSingleProduct] = useState(null);
  const { user, items } = useSelector((store) => {
    console.log(store.userReducer);
    console.log(store.productReducer);
    return {
      user: store.userReducer.user,
      items: store.productReducer.products,
    };
  });
  const [carouselData, setCarouselData] = useState(data);
  const dispatch = useDispatch();
  const toast = useToast();

  useEffect(() => {
    const storedProduct = items.find((ele) => ele.id === +id);
    if (storedProduct) {
      setSingleProduct(storedProduct);
      const updatedData = storedProduct.images.map((image) => ({ image }));
      console.log(updatedData);
      setCarouselData(updatedData);
    }
  }, [id]);

  function handleSizeClick(size) {
    setSelectedSize(size);
  }

  function handleAddToCart() {
    const alreadyExists = user.cartItems.find((ele) => ele.id === +id);
    if (alreadyExists !== undefined) {
      console.log("alreadyExists");
      toast({
        position: "bottom",
        title: "Item already exits in cart",
        status: "error",
        variant: "subtle",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    const newProduct = {
      ...singleProduct,
    };
    const cartItem = [...user.cartItems, newProduct];
    dispatch(patchUserData(user.id, { cartItems: cartItem }));
    toast({
      position: "bottom",
      title: "Item added to cart",
      status: "success",
      variant: "subtle",
      duration: 3000,
      isClosable: true,
    });
  }

  return (
    <>
      <Navbar />
      <Flex
        width="75%"
        margin={"auto"}
        paddingTop={10}
        paddingBottom={10}
        marginTop={"20px"}
        marginBottom={"20px"}
        justifyContent={"space-between"}
      >
        {/* Carousel Container */}
        <Box w="40%">
          <Carousel
            data={carouselData}
            width="850px"
            height="400px"
            radius="10px"
            captionPosition="bottom"
            automatic={false}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="80px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "0 auto",
            }}
          />
        </Box>

        {/* Product Info Container */}
        <Flex width="50%" flexDirection="column" gap={4}>
          {/* Secondary Title */}
          <Text fontSize={"2.2rem"} fontWeight="700" lineHeight="1">
            {singleProduct !== null && singleProduct.secondaryTitle}
          </Text>

          {/* Product Description */}
          <Text
            color="gray"
            fontSize="1.05rem"
            maxWidth="80%"
            lineHeight="normal"
          >
            {singleProduct !== null && singleProduct.description}
          </Text>

          {/* Ratings */}
          {singleProduct !== null && <Stars rating={singleProduct.rating} />}

          {/* Price */}
          <Text color="#FC7021" fontWeight="700" fontSize="lg">
            {singleProduct !== null && `$${singleProduct.price}.00`}
          </Text>

          {/* Select Size */}
          <SelectSizes
            selectedSize={selectedSize}
            handleSizeClick={handleSizeClick}
          />

          {/* Colors */}
          <Colors />

          {/* Add to cart Button */}
          <Box>
            <Button
              color="white"
              backgroundColor="#151515"
              boxShadow="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
              _hover={{
                backgroundColor: "#151515",
              }}
              marginTop="1rem"
              borderRadius="1rem"
              width="80%"
              padding="1.5rem"
              isDisabled={selectedSize === null}
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
          </Box>
        </Flex>
      </Flex>
      <Footer />
    </>
  );
}

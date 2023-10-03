import React from "react";
import {
  Card,
  CardBody,
  Heading,
  Stack,
  Image,
  Text,
  Flex,
  Box,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ProductCard = ({ title, price, images, id }) => {
  const generateRandomColor = () => {
    let randomColor;
    do {
      randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    } while (isColorTooCloseToWhite(randomColor));
    return randomColor;
  };

  const isColorTooCloseToWhite = (color) => {
    const threshold = 100;
    const whiteColor = "#FFFFFF";

    const r1 = parseInt(color.slice(1, 3), 16);
    const g1 = parseInt(color.slice(3, 5), 16);
    const b1 = parseInt(color.slice(5, 7), 16);

    const r2 = parseInt(whiteColor.slice(1, 3), 16);
    const g2 = parseInt(whiteColor.slice(3, 5), 16);
    const b2 = parseInt(whiteColor.slice(5, 7), 16);

    const distance = Math.sqrt(
      Math.pow(r2 - r1, 2) + Math.pow(g2 - g1, 2) + Math.pow(b2 - b1, 2)
    );

    return distance < threshold;
  };

  return (
    <Card maxW="sm" variant={"unstyled"}>
      {/* <CardBody> */}
      <Link to={`/view/${id}`}>
        <Image src={images[0]} borderRadius={"20px"} alt="Image" />
      </Link>
      <Flex justifyContent={"space-between"}>
        <Box>
          <Stack mt="2" spacing="2">
            <Text fontSize={"1.30rem"}>{title}</Text>
            <Text color="#FA6E1F" fontWeight="700" fontSize="lg">
              ${price}.00
            </Text>
          </Stack>
        </Box>
        <Box>
          <Flex marginTop={"4"} justifyContent={"space-between"} w={"45px"}>
            <Box
              h={"10px"}
              w={"10px"}
              borderRadius={"50px"}
              bg={generateRandomColor}
            ></Box>
            <Box
              h={"10px"}
              w={"10px"}
              borderRadius={"50px"}
              bg={generateRandomColor}
            ></Box>
            <Box
              h={"10px"}
              w={"10px"}
              borderRadius={"50px"}
              bg={generateRandomColor}
            ></Box>
          </Flex>
        </Box>
      </Flex>
      {/* </CardBody> */}
    </Card>
  );
};

export default ProductCard;

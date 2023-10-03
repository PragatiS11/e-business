import React from "react";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import styles from "./Main.module.css";
import { Link } from "react-router-dom";
import { FaCircle } from "react-icons/fa6";

const Main = () => {
  return (
    <>
      <Box w={"90%"} m={"auto"} mb={"2rem"}>
        {/* Hero Image */}
        <Box my={"1rem"} position={"relative"}>
          <Image
            src="heroImage2.1.jpg"
            objectFit="cover"
            alt="hero-section-image"
            borderRadius={"20px"}
          />
          <Text
            position={"absolute"}
            top={"15%"}
            right={"8%"}
            className={styles.cursive}
            width={"30%"}
            fontSize={"2.5rem"}
            fontWeight={"600"}
            lineHeight={"1.1"}
            textAlign={"right"}
            color={"#747479"}
          >
            Be A Trend Setter With SpendWise !
          </Text>
        </Box>

        {/* quote 1 */}
        <Box my={"4rem"}>
          <Text
            className={styles.cursive}
            w={"80%"}
            m={"auto"}
            fontSize={"2rem"}
            fontWeight={"500"}
            lineHeight={"1.1"}
            color={"#747479"}
          >
            Browse through our carefully curated collection of high-quality
            clothing & accessories featuring the latest trends and style
          </Text>
        </Box>

        {/* 2023 new arrivals */}
        <Flex align={"center"} justify={"space-between"} mb={"1rem"}>
          <Heading as="h3">2023 New Arrivals</Heading>
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
            <Link to="/collections">Shop Now</Link>
          </Button>
        </Flex>

        {/* New arrivals photos */}
        <Flex justify={"space-between"} mt={"2rem"}>
          {/* photo 1 */}
          <Box
            boxSize={"30%"}
            display={"flex"}
            flexDirection={"column"}
            gap={"5px"}
          >
            <Image src="men_jacket1.jpg" borderRadius={"30px"} />
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Box display="flex" fontSize={"1.30rem"}>
                Denim Jacket
              </Box>

              <Box display="flex" gap={1}>
                <FaCircle color="#F19F88" fontSize="1rem" />
                <FaCircle color="#C3CDDC" fontSize="1rem" />
                <FaCircle color="#5E574F" fontSize="1rem" />
              </Box>
            </Box>
            <Text color="#FA6E1F" fontWeight="700" fontSize="lg">
              $147.00
            </Text>
          </Box>

          {/* photo 2 */}
          <Box
            boxSize={"30%"}
            display={"flex"}
            flexDirection={"column"}
            gap={"5px"}
          >
            <Image src="men_sweat_shirt1.jpg" borderRadius={"30px"} />
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Box display="flex" fontSize={"1.30rem"}>
                Printed Sweatshirt
              </Box>

              <Box display="flex" gap={1}>
                <FaCircle color="#dfcdac" fontSize="1rem" />
                <FaCircle color="#8BD1CE" fontSize="1rem" />
                <FaCircle color="#25A2DC" fontSize="1rem" />
              </Box>
            </Box>
            <Text color="#FA6E1F" fontWeight="700" fontSize="lg">
              $189.00
            </Text>
          </Box>

          {/* photo 3 */}
          <Box
            boxSize={"30%"}
            display={"flex"}
            flexDirection={"column"}
            gap={"5px"}
          >
            <Image src="men_tshirt1.jpg" borderRadius={"30px"} />
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Box display="flex" fontSize={"1.30rem"}>
                Oversized T-shirt
              </Box>

              <Box display="flex" gap={1}>
                <FaCircle color="#cabaaa" fontSize="1rem" />
                <FaCircle color="#E1A985" fontSize="1rem" />
                <FaCircle color="#1D1D1B" fontSize="1rem" />
              </Box>
            </Box>
            <Text color="#FA6E1F" fontWeight="700" fontSize="lg">
              $149.00
            </Text>
          </Box>
        </Flex>

        {/* quote 2 */}
        <Box my={"3rem"}>
          <Text
            className={styles.cursive}
            w={"50%"}
            m={"auto"}
            fontSize={"2rem"}
            fontWeight={"500"}
            lineHeight={"1.1"}
            color={"#747479"}
          >
            Style Is A Way To Say Who You Are Without Having To Speak
          </Text>
        </Box>

        {/* image mashup */}
        <SimpleGrid columns={2} gap={"2rem"}>
          {/* left container */}
          <Flex gap={"1rem"}>
            <Flex flexDir={"column"} justify={"start"} w={"40%"}>
              <Box>
                <Image
                  src="sale_image.jpg"
                  borderRadius={"20px"}
                  border={"3px solid pink"}
                />
              </Box>
            </Flex>
            <Flex flexDir={"column"} justify={"end"} w={"60%"}>
              <Box>
                <Image
                  src="sale_image3.jpg"
                  borderRadius={"20px"}
                  border={"3px solid pink"}
                />
              </Box>
            </Flex>
          </Flex>

          {/* right container */}
          <Flex direction={"column"} gap={"2rem"}>
            <Image src="imageMashUp1.jpg" borderRadius={"30px"} />
            <Box
              m={"auto"}
              w={"80%"}
              className={styles.cursive}
              fontWeight={"700"}
              lineHeight={"1.1"}
              fontSize={"1.5rem"}
            >
              <Text>
                "Clothes and manners do not make the man; but when he is made,
                they greatly improve his appearance."
              </Text>
              <Text>- Arthur Ashe</Text>
            </Box>
          </Flex>
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Main;

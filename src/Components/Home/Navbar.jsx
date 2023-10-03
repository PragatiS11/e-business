import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Login } from "./Login";
import Register from "./Register";
import { Logout } from "./Logout";
import { ButtonGroup, Button } from "@chakra-ui/button";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { isAuth, user } = useSelector((store) => {
    return {
      isAuth: store.userReducer.isAuth,
      user: store.userReducer.user,
    };
  });

  let val = "";
  if (isAuth === true) {
    let temp = user.name.split(" ");
    temp = temp[0][0].toUpperCase() + temp[0].slice(1).toLowerCase();
    val += `Hi, ${temp}`;
    console.log(val);
  }

  return (
    <>
      <Box
        as="nav"
        color={"#151515"}
        // py={"1rem"}
        boxShadow={"rgba(0, 0, 0, 0.09) 0px 3px 12px;"}
        position={"sticky"}
        top={0}
        zIndex={10}
        bg={"white"}
      >
        <Flex
          justify={"space-between"}
          bg={"white"}
          align={"center"}
          margin={"auto"}
          p={"0.7rem"}
          // borderRadius={"20px"}
          w={"95%"}
        >
          {/* logo */}
          <Link to="/">
            <Text
              fontSize={"2rem"}
              className={styles.companyTitle}
              color={"#FA6E1F"}
            >
              SpendWise
            </Text>
          </Link>

          {/* links */}
          <Flex
            w={"40%"}
            justify={"space-between"}
            align={"center"}
            color={"#151515"}
            fontSize={"1.05rem"}
            fontWeight={"500"}
          >
            <Link to="/">Home</Link>
            <Link>About</Link>
            <Link to={"/collections"}>Collection</Link>
            <Link>Blog</Link>
            <Link>Fashion</Link>
          </Flex>

          {/* Buttons */}
          <Flex>
            {isAuth === false ? (
              <ButtonGroup gap="2">
                <Login />
                <Register />
              </ButtonGroup>
            ) : (
              <>
                {/* <Link to="/cart" className="btn btn-outline-dark m-2">
                  <Box border={"1px solid #151515"}>
                    Cart {isAuth === false ? 0 : user.cartItems.length}
                  </Box>
                </Link> */}

                <ButtonGroup gap="2">
                  <Link to="/cart" className="btn btn-outline-dark m-2">
                    <Button
                      backgroundColor="#151515"
                      borderRadius={"20px"}
                      color="white"
                      _hover={{
                        backgroundColor: "#151515",
                        color: "white",
                      }}
                    >
                      Cart {isAuth === false ? 0 : user.cartItems.length}
                    </Button>
                  </Link>
                  <Logout val={val} />
                </ButtonGroup>
              </>
            )}
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;

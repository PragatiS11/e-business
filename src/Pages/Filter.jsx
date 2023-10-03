import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Select, Flex, Box } from "@chakra-ui/react";

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  let initialCategory = searchParams.get("category");
  let initialGender = searchParams.get("gender");
  let initialOrder = searchParams.get("order");
  const [order, setOrder] = useState(initialOrder || "");
  const [gender, setGender] = useState(initialGender || "");
  const [category, setCategory] = useState(initialCategory || "");

  useEffect(() => {
    let params = {};
    category && (params.category = category);
    gender && (params.gender = gender);
    order && (params.order = order);
    setSearchParams(params);
  }, [category, gender, order]);

  return (
    <Flex marginBottom={"20px"} w={"95%"} m={"auto"}>
      <Box>
        <Select
          onChange={(e) => setGender(e.target.value)}
          value={gender}
          bg="black"
          color="white"
          border={"none"}
          padding={"5px"}
          borderRadius={"1rem"}
          outline={"none"}
          cursor={"pointer"}
        >
          <option value="" style={{ color: "gray" }}>
            Select Gender
          </option>
          <option value="male" style={{ color: "white", background: "black" }}>
            Men
          </option>
          <option
            value="female"
            style={{ color: "white", background: "black" }}
          >
            Women
          </option>
        </Select>
      </Box>

      <Box>
        <Select
          onChange={(e) => setOrder(e.target.value)}
          value={order}
          bg="black"
          color="white"
          border={"none"}
          padding={"5px"}
          borderRadius={"1rem"}
          outline={"none"}
          cursor={"pointer"}
        >
          <option value="" style={{ color: "gray" }}>
            Select order
          </option>
          <option value="asc" style={{ color: "white", background: "black" }}>
            Ascending
          </option>
          <option value="desc" style={{ color: "white", background: "black" }}>
            Descending
          </option>
        </Select>
      </Box>
      <Box>
        <Select
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          bg="black"
          color="white"
          border={"none"}
          padding={"5px"}
          borderRadius={"1rem"}
          outline={"none"}
          cursor={"pointer"}
        >
          <option value="" style={{ color: "gray" }}>
            Select Category
          </option>
          <option
            value="jacket"
            style={{ color: "white", background: "black" }}
          >
            Jackets
          </option>
          <option
            value="sherwani"
            style={{ color: "white", background: "black" }}
          >
            Sherwani
          </option>
          <option value="suit" style={{ color: "white", background: "black" }}>
            Suit
          </option>
          <option
            value="tshirt"
            style={{ color: "white", background: "black" }}
          >
            T-shirt
          </option>
        </Select>
      </Box>
    </Flex>
  );
};

export default Filter;

import { Box, Text, Center } from "@chakra-ui/react";

const sizes = ["XS", "S", "M", "L", "XL"];

export default function SelectSizes({ selectedSize, handleSizeClick }) {
  return (
    <Box display="flex" flexDirection="column" gap={3}>
      <Text fontWeight="700" fontSize="sm">
        Select Size
      </Text>
      <Box display="flex" gap={2}>
        {sizes.map((size, index) => (
          <Center
            key={index}
            width={10}
            height={10}
            borderRadius={15}
            fontWeight={500}
            backgroundColor={selectedSize === size ? "#FC7021" : "#ffffff"}
            color={selectedSize === size ? "#ffffff" : "#000000"}
            onClick={() => handleSizeClick(size)}
            cursor="pointer"
            border={selectedSize === size ? "none" : "0.1px solid #d9d5ca"}
          >
            {size}
          </Center>
        ))}
      </Box>
    </Box>
  );
}

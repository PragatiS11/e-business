import { Box, Text } from "@chakra-ui/react";
import { FaCircle } from "react-icons/fa6";

export default function Colors() {
  return (
    <Box display="flex" flexDirection="column" gap={3}>
      <Text fontWeight="700" fontSize="sm">
        Colours Available
      </Text>
      <Box display="flex" gap={2}>
        <FaCircle color="#F19F88" fontSize="1.25rem" />
        <FaCircle color="#8BD1CE" fontSize="1.25rem" />
        <FaCircle color="#25A2DC" fontSize="1.25rem" />
        <FaCircle color="#DEE28D" fontSize="1.25rem" />
      </Box>
    </Box>
  );
}

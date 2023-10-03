import { Box, Text } from "@chakra-ui/react";
import { FaStar, FaStarHalfStroke } from "react-icons/fa6";

// export default function Stars() {
//   return (
//     <Box display="flex" alignItems="center" gap={0.5}>
//       <FaStar color="#FFD500" fontSize="1.1rem" />
//       <FaStar color="#FFD500" fontSize="1.1rem" />
//       <FaStar color="#FFD500" fontSize="1.1rem" />
//       <FaStar color="#FFD500" fontSize="1.1rem" />
//       <FaStarHalfStroke color="#FFD500" fontSize="1.1rem" />
//       <Text color="gray">(4.5k reviews)</Text>
//     </Box>
//   );
// }

const Stars = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  const renderStars = () => {
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FaStar key={`star-${i}`} color="#FFD500" fontSize="1.1rem" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <FaStarHalfStroke key={`half-star`} color="#FFD500" fontSize="1.1rem" />
      );
    }

    return stars;
  };

  return (
    <Box display="flex" alignItems="center" gap={0.5}>
      {renderStars()}
      <Text color="gray">({rating})</Text>
    </Box>
  );
};

export default Stars;

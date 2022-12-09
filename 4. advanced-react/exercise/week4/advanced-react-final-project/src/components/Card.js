import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <Box color="black" bg="white" borderRadius="lg" overflow="hidden">
      <Box borderRadius="lg" overflow="hidden">
        <Image src={imageSrc}></Image>
      </Box>
      <Box p={4}>
        <Heading pb={3} size="md">
          <p>{title}</p>
        </Heading>
        <Text pb={3} color='grey'>{description}</Text>
        <button style={{ paddingTop: '3px' }}>See more <FontAwesomeIcon icon={faArrowRight} size="1x" /></button>
      </Box>
    </Box>
  );
};

export default Card;

import React from "react";
import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import { TwitterEmbed } from "react-social-media-embed";

const TwitterChakra = (props) => {
  const tweetData = props.tweetData;
  return (
    <Flex mt={2} ml={2}>
      <TwitterEmbed
        url="https://twitter.com/NDRFHQ/status/1546010003659599874"
        width={400}
      />
      <Box>
        <Box
          border={"2px"}
          width="35rem"
          height="fit-content"
          borderRadius={"10px"}
          ml={"1rem"}
          mb={"1rem"}
        >
          <Text fontSize={"2xl"}>Tweet Info</Text>
          <Divider />
          <Text fontSize={"xl"}>{tweetData.tweet}</Text>
        </Box>
        <Box
          border={"2px"}
          width="35rem"
          height="fit-content"
          borderRadius={"10px"}
          ml={"1rem"}
          mb={"1rem"}
        >
          <Text fontSize={"2xl"}>Tweet Info</Text>
          <Divider />
          <Text fontSize={"xl"}>{tweetData.tweet}</Text>
        </Box>
        <Box
          border={"2px"}
          width="35rem"
          height="fit-content"
          borderRadius={"10px"}
          ml={"1rem"}
          mb={"1rem"}
        >
          <Text fontSize={"2xl"}>Tweet Info</Text>
          <Divider />
          <Text fontSize={"xl"}>{tweetData.tweet}</Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default TwitterChakra;

import React from "react";
import { Box, Divider, Flex, Icon, Text } from "@chakra-ui/react";
import { TwitterEmbed } from "react-social-media-embed";

const TwitterChakra = (props) => {
  const tweetData = props.tweetData;
  const link = props.tLink;
  return (
    <Flex mt={2} ml={2}>
       <TwitterEmbed
        url={link}
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
          <Text fontSize={"2xl"} m="0.3rem" >Tweet Info</Text>
          <Divider />
          <Text fontSize={"xl"} ml='1rem' >
            Tweet id: {tweetData.id}
            <br/>
            Date Posted: {tweetData.date}
            <br />
            Posted By: {tweetData.name}
            <br />
            Username: {tweetData.username}
          </Text>
        </Box>
        <Box
          border={"2px"}
          width="35rem"
          height="fit-content"
          borderRadius={"10px"}
          ml={"1rem"}
          mb={"1rem"}
        >
          <Text fontSize={"2xl"} m="0.3rem" >Tweet 
            <Icon color={"#1DA1F2"}>
              <path
                fill="currentColor"
                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
          </Icon>
          </Text>
          <Divider />
          <Text fontSize={"xl"} m="0.3rem" >{tweetData.tweet}</Text>
        </Box>
        <Box
          border={"2px"}
          width="35rem"
          height="fit-content"
          borderRadius={"10px"}
          ml={"1rem"}
          mb={"1rem"}
        >
          <Text fontSize={"2xl"} m="0.3rem" >Tweet Actions</Text>
          <Divider />
          <Box m="0.3rem">
          <Text fontSize={"xl"} >
            Likes: {tweetData.likes_count} <Icon color='red.500'>
              <path
                fill="currentColor"
                d="M12 4.419c-2.826-5.695-11.999-4.064-11.999 3.27 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27z" />
            </Icon>
          </Text>
          <Text fontSize={"xl"}>
            Retweet: {tweetData.retweets_count} <Icon color='#1DA1F2'>
              <path
                fill="currentColor"
                d="M12 1c-6.338 0-12 4.226-12 10.007 0 2.05.738 4.063 2.047 5.625.055 1.83-1.023 4.456-1.993 6.368 2.602-.47 6.301-1.508 7.978-2.536 9.236 2.247 15.968-3.405 15.968-9.457 0-5.812-5.701-10.007-12-10.007zm-5 14v-4h-2l3-4 3 4h-2v2h2.953l1.594 2h-6.547zm9 0l-3-4h2v-2h-2.922l-1.594-2h6.516v4h2l-3 4z" />
            </Icon>
          </Text>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default TwitterChakra;

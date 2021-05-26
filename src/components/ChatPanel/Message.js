<<<<<<< HEAD
import React from "react";
import { Box, Text, Divider } from "@chakra-ui/react";

function convertDate(timestamp) {
  const datetime = new Date(timestamp);
  return `${datetime.getHours()}:${datetime.getMinutes()}:${datetime.getSeconds()}`;
}

function Message({ message }) {
  return (
    <Box rounded="lg" bg="gray.200" boxShadow="lg" p={6}>
      <Text py={2} color="grey">
        {message.user} {convertDate(message.datetime)}
      </Text>
      <Divider />
      <Text py={2}>{message.content}</Text>
    </Box>
  );
}

export default Message;
=======
import React from "react";
import { Box, Text, Divider } from "@chakra-ui/react";

function convertDate(timestamp) {
  const datetime = new Date(timestamp);
  return `${datetime.getHours()}:${datetime.getMinutes()}:${datetime.getSeconds()}`;
}

function Message({ message }) {
  return (
    <Box rounded="lg" bg="gray.200" boxShadow="lg" p={6}>
      <Text py={2} color="grey">
        {message.user} {convertDate(message.datetime)}
      </Text>
      <Divider />
      <Text py={2}>{message.content}</Text>
    </Box>
  );
}

export default Message;
>>>>>>> 973fa2255342cbb8a6f14570d4a0141fab4752a0

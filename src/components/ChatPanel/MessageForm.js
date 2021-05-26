import React, { useState, useContext } from "react";
import { HStack, Input, Button } from "@chakra-ui/react";

import AuthContext from "../../AuthContext";
import db from "../../config";

function MessageForm() {
  const { nickname } = useContext(AuthContext);
  const [newMessage, setNewMessage] = useState("");

  const handleContentChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const messageObj = {
      user: nickname,
      content: newMessage,
      datetime: Date.now()
    };
    if (newMessage) {
      db.ref("/messages")
        .push(messageObj)
        .then(() => {
          setNewMessage("");
          window.scrollTo(0, document.body.scrollHeight);
        })
        .catch((error) => console.error(error));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <HStack>
        <Input
          type="text"
          name="content"
          value={newMessage}
          onChange={handleContentChange}
        />
        <Button type="submit" colorScheme="blue">
          Send
        </Button>
      </HStack>
    </form>
  );
}

export default MessageForm;

<<<<<<< HEAD
import React, { useContext } from "react";
import { Button, Stack, FormControl, FormLabel, Input } from "@chakra-ui/react";
import AuthContext from "../../AuthContext";

function LoginForm() {
  const { setAuthenticated, setNickname } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();

  const { nickname } = event.target.elements;
   setAuthenticated(true);
   setNickname(nickname.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={3}>
        <FormControl isRequired>
          <FormLabel>Nickname</FormLabel>
          <Input type="text" name="nickname" placeholder="nickname" size="lg" />
        </FormControl>
        <Button type="submit" colorScheme="blue">
          Login
        </Button>
      </Stack>
    </form>
  );
}

export default LoginForm;
=======
import React, { useContext } from "react";
import { Button, Stack, FormControl, FormLabel, Input } from "@chakra-ui/react";
import AuthContext from "../../AuthContext";

function LoginForm() {
  const { setAuthenticated, setNickname } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();

  const { nickname } = event.target.elements;
   setAuthenticated(true);
   setNickname(nickname.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={3}>
        <FormControl isRequired>
          <FormLabel>Nickname</FormLabel>
          <Input type="text" name="nickname" placeholder="nickname" size="lg" />
        </FormControl>
        <Button type="submit" colorScheme="blue">
          Login
        </Button>
      </Stack>
    </form>
  );
}

export default LoginForm;
>>>>>>> 973fa2255342cbb8a6f14570d4a0141fab4752a0

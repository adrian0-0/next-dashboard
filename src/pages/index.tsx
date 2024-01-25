import { useState } from "react";

import {
  Box,
  Flex,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Heading,
  Button,
  Stack,
} from "@chakra-ui/react";
import router from "next/router";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Box>
      <Flex justifyContent={"center"} alignItems={"center"} h={"100vh"}>
        <Stack spacing={"1rem"}>
          <Heading>Olá 0-0</Heading>
          <Button onClick={() => router.push("/professor")}>Professores</Button>
        </Stack>
      </Flex>
    </Box>
  );
}

export default App;

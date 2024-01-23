import { useState } from "react";

import ProfessorTable from "@components/professorTable";
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
} from "@chakra-ui/react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Box>
      <Box>
        <ProfessorTable />
      </Box>
      <Flex justifyContent={"center"} alignItems={"center"}></Flex>
    </Box>
  );
}

export default App;

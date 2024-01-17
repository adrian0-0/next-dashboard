import { useState } from "react";

import reactLogo from "/assets/react.svg";
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
    <Flex justifyContent={"center"} alignItems={"center"} h={"100dvh"}>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Tabela do professor</TableCaption>
          <Thead>
            <Tr>
              <Th>Professor</Th>
              <Th>Email</Th>
              <Th isNumeric>Empresas Associadas</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
            </Tr>
            <Tr>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
              <Td isNumeric>30.48</Td>
            </Tr>
            <Tr>
              <Td>yards</Td>
              <Td>metres (m)</Td>
              <Td isNumeric>0.91444</Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>Professor</Th>
              <Th>Email</Th>
              <Th isNumeric>Empresas Associadas</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
      <div className="bg-blue-500 text-white p-4">
        This is a component with Tailwind CSS styles.
      </div>
    </Flex>
  );
}

export default App;

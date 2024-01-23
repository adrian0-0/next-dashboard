import {
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
import { Axios } from "axios";
import React from "react";

function ProfessorTable() {
  return (
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
  );
}

export default ProfessorTable;

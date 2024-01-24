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
  Flex,
  Heading,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import AxiosPath from "@components/axiosApi";
import axios from "axios";

interface Professor {
  id: number;
  nome: string;
  email: string;
  celular: string;
}

function ProfessorTable() {
  const [professores, setProfessores] = useState<Professor[]>([]);

  const getProfessores = async () => {
    try {
      const res = await axios.get(AxiosPath + "/professor");
      setProfessores(res.data);
    } catch (err) {
      console.error("Erro: Na coleta de dados dos professores", err);
    }
  };

  useEffect(() => {
    getProfessores();
  }, []);
  return (
    <Flex justifyContent={"center"} alignItems={"center"} height={"100dvh"}>
      <TableContainer>
        <Heading textAlign={"center"}>Professores</Heading>
        <Table variant="simple" mt={"2rem"}>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Nome</Th>
              <Th>Email</Th>
              <Th>Celular</Th>
            </Tr>
          </Thead>
          <Tbody>
            {professores.map((professor) => (
              <Tr key={professor.id}>
                <Td>{professor.id}</Td>
                <Td>{professor.nome}</Td>
                <Td>{professor.email}</Td>
                <Td>{professor.celular}</Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>ID</Th>
              <Th>Nome</Th>
              <Th>Email</Th>
              <Th>Celular</Th>
            </Tr>
          </Tfoot>
          <TableCaption>Tabela do professor</TableCaption>
        </Table>
      </TableContainer>
    </Flex>
  );
}

export default ProfessorTable;

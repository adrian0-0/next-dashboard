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
  Button,
  Image,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Api from "@components/axiosApi";
import { getData, postData } from "@components/crud";

interface Professor {
  id: number;
  nome: string;
  email: string;
  celular: string;
}

function Professor() {
  const [professores, setProfessores] = useState<Professor[]>([]);
  const professorPath = "/professor";
  const errMessage = {
    get: "Erro: Na coleta de dados dos professores",
    post: "Erro: Na postagem do professor",
    put: "Erro: Ao editar algum dos campos do professor",
    delete: "Erro Ao deletar um professor",
  };

  function handleButton() {
    // postData();
  }

  useEffect(() => {
    getData(setProfessores, errMessage.get, professorPath);
  }, []);

  return (
    <Flex justifyContent={"center"} alignItems={"center"} height={"100dvh"}>
      <TableContainer>
        <Heading textAlign={"center"}>Professores</Heading>
        <Table variant="simple" mt={"2rem"}>
          <Thead>
            <Tr>
              <Th></Th>
              <Th></Th>
              <Th></Th>
              <Th>ID</Th>
              <Th>Nome</Th>
              <Th>Email</Th>
              <Th>Celular</Th>
            </Tr>
          </Thead>
          {professores.map((professor) => (
            <Tbody>
              <Tr key={professor.id}>
                <Td>
                  <Button>+</Button>
                </Td>
                <Td>
                  <Image
                    src="/assets/svg/pencil.svg"
                    alt="Editar campo de texto"
                  />
                </Td>
                <Td>
                  <Image
                    src="/assets/svg/trashcan.svg"
                    alt="Excluir campo de texto"
                  />
                </Td>
                <Td>{professor.id}</Td>
                <Td>{professor.nome}</Td>
                <Td>{professor.email}</Td>
                <Td>{professor.celular}</Td>
              </Tr>
            </Tbody>
          ))}
          <Tfoot>
            <Tr>
              <Th></Th>
              <Th></Th>
              <Th></Th>
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

export default Professor;

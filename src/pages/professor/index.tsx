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
  Box,
  Input,
  Stack,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { getData, postData } from "@components/crud";
import router from "next/router";

interface Professor {
  id: number;
  nome: string;
  email: string;
  celular: string;
}

function Professor() {
  const [professores, setProfessores] = useState<Professor[]>([]);
  const [crudBox, setCrudBox] = useState(false);
  const [crudHeadText, setCrudHeadText] = useState("");
  const [submitVisibility, setSubmitVisibility] = useState(false);
  const professorPath = "/professor";
  const crudBoxHeading = {
    delete: "Deletar Professor",
    edit: "Editar Professor",
  };
  const errMessage = {
    get: "Erro: Na coleta de dados dos professores",
    post: "Erro: Na postagem do professor",
    put: "Erro: Ao editar algum dos campos do professor",
    delete: "Erro Ao deletar um professor",
  };

  function handleButton(id: any, headingText: string) {
    console.log(id);
    setCrudBox(true);
    setCrudHeadText(headingText);
  }

  useEffect(() => {
    getData(setProfessores, errMessage.get, professorPath);
  }, []);

  return (
    <Box>
      <Flex justifyContent={"center"} alignItems={"center"}>
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
                      onClick={() =>
                        handleButton(professor.id, crudBoxHeading.edit)
                      }
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
      <Box
        display={crudBox ? "initial" : "none"}
        justifyContent="center"
        alignItems="center"
        mt="2rem"
        w="100%"
        mx={{ base: "1rem", md: "3rem", lg: "5rem" }}
      >
        <Stack spacing="1.5rem">
          <Heading>{crudHeadText}</Heading>
          <FormControl isRequired>
            <FormLabel textAlign="left">First name</FormLabel>
            <Input placeholder="First name" />
          </FormControl>
          <Button display={submitVisibility ? "initial" : "none"} w="300px">
            Enviar
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

export default Professor;

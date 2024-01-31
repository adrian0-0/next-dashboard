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
import { getData, postData, editData } from "@components/crud";
import router from "next/router";

interface Professor {
  id: number;
  nome: string;
  email: string;
  celular: string;
}

function Professor() {
  const [professores, setProfessores] = useState<Professor[]>([]);
  const [professorId, setProfessorId] = useState();
  const [crudBox, setCrudBox] = useState(false);
  const [crudHeadText, setCrudHeadText] = useState("");
  const [crudType, setCrudType] = useState();
  const [submitVisibility, setSubmitVisibility] = useState(false);
  const [professorName, setProfessorName] = useState("");
  const professorPath = "/professor";

  const crudParam = {
    post: 0,
    edit: 1,
    delete: 2,
  };
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

  function handleButton(id: any, headingText: string, crudParam: any) {
    console.log(id);
    setProfessorId(id);
    setCrudHeadText(headingText);
    setCrudType(crudParam);
    setCrudBox(true);
  }

  async function handleSubmit() {
    console.log("handleSubmit1");

    if (crudType === crudParam.edit) {
      console.log("handleSubmit2");
      const idPath = professorPath + "/" + professorId;
      console.log(idPath);
      console.log(professorName);
      const updatedData = {
        name: professorName,
      };

      await editData(updatedData, setProfessores, errMessage.put, idPath);
    }
  }

  useEffect(() => {
    getData(setProfessores, errMessage.get, professorPath);
  }, []);

  return (
    <Box>
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        mx={{ base: "1rem", md: "3rem", lg: "5rem" }}
      >
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
              <Tbody key={professor.id}>
                <Tr>
                  <Td>
                    <Button>+</Button>
                  </Td>
                  <Td>
                    <Image
                      src="/assets/svg/pencil.svg"
                      alt="Editar campo de texto"
                      onClick={() =>
                        handleButton(
                          professor.id,
                          crudBoxHeading.edit,
                          crudParam.edit
                        )
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
        display={crudBox ? "block" : "none"}
        mt="5rem"
        mx={{ base: "1rem", md: "3rem", lg: "5rem" }}
      >
        <Stack spacing="1.5rem" w={"40%"} alignItems={"center"} margin={"auto"}>
          <Heading>{crudHeadText}</Heading>
          <FormControl isRequired>
            <FormLabel textAlign="left">Nome do Professor</FormLabel>
            <Input
              placeholder="Digite o nome do Professor"
              onChange={(e) => {
                setSubmitVisibility(true);
                setProfessorName(e.target.value);
              }}
              value={professorName}
            />
          </FormControl>
          <Button
            display={submitVisibility ? "block" : "none"}
            w="300px"
            onClick={() => {
              handleSubmit();
            }}
          >
            Enviar
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

export default Professor;

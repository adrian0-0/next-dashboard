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
import { getData, postData, editData, deleteData } from "@components/crud";
import router from "next/router";
import { CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH } from "next/dist/shared/lib/constants";

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
  const [professorEmail, setProfessorEmail] = useState("");
  const [professorCelular, setProfessorCelular] = useState("");
  const professorPath = "/professor";

  const crudParam = {
    post: 0,
    edit: 1,
    delete: 2,
  };
  const crudBoxHeading = {
    post: "Adicionar Professor",
    edit: "Editar Professor",
    delete: "Deletar Professor",
  };
  const errMessage = {
    get: "Erro: Na coleta de dados dos professores",
    post: "Erro: Na postagem do professor",
    put: "Erro: Ao editar algum dos campos do professor, ATENÇÃO: O Email de um professor não pode ser igual a de outro professor",
    delete: "Erro Ao deletar um professor",
  };

  function handleButton(id: any, headingText: string, crudParam: any) {
    setProfessorId(id);
    setCrudHeadText(headingText);
    setCrudType(crudParam);
    setCrudBox(true);
  }

  async function handleDelete(id: any, crudParam: any) {
    console.log("Chamando setProfessorId");
    await setProfessorId(id);
    console.log("setProfessorId concluído");

    console.log("Chamando setCrudType");
    await setCrudType(crudParam);
    console.log("setCrudType concluído");
    console.log(id);
    console.log("Chamando handleSubmit");
    await handleSubmit();
    console.log("handleSubmit concluído");
  }

  async function handleSubmit() {
    console.log(crudType);
    const idPath = professorPath + "/" + professorId;
    const updatedData = {
      nome: professorName,
      email: professorEmail,
      celular: professorCelular,
    };
    // PARA EDITAR OS DADOS VIA JSON USE O CODIGO ABAIXO E ENVIA O CAMINHO SEM A QUERY DA ID
    // const professorPath = "/professor";
    // const updatedData = {
    //   id: professorId,
    //   nome: professorName,
    // };
    // await editData(updatedData, errMessage.put, professorPath);
    //------------------------------------------------------------------------------------------------
    // CASO QUEIRA EDITAR OS DADOS VIA O ID DA QUERY USE O CODIGO ABAIXO E COLOQUE O CAMINHO COM A ID
    // const idPath = professorPath + "/" + professorId;
    // const updatedData = {
    //   nome: professorName,
    // };
    // await editData(updatedData, errMessage.put, idPath);

    if (crudType === crudParam.post) {
      console.log("post");
      await postData(updatedData, errMessage.post, professorPath);
    }
    if (crudType === crudParam.edit) {
      console.log("edit");
      await editData(updatedData, errMessage.put, idPath);
    }
    if (crudType === crudParam.delete) {
      console.log("delete");
      await deleteData(updatedData, errMessage.delete, idPath);
      await cleanStates();
    }
    await getData(setProfessores, errMessage.get, professorPath);

    async function cleanStates() {
      setCrudBox(false);
      setSubmitVisibility(false);
      setCrudType(undefined);
      setProfessorName("");
      setProfessorEmail("");
      setProfessorCelular("");
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
            {professores &&
              Array.isArray(professores) &&
              professores.map((professor) => (
                <Tbody key={professor.id}>
                  <Tr>
                    <Td>
                      <Button
                        onClick={() =>
                          handleButton(
                            professor.id,
                            crudBoxHeading.post,
                            crudParam.post
                          )
                        }
                      >
                        +
                      </Button>
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
                        onClick={() =>
                          handleDelete(professor.id, crudParam.delete)
                        }
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
        my="5rem"
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
          <FormControl>
            <FormLabel textAlign="left">Email: </FormLabel>
            <Input
              placeholder="Digite o email do Professor"
              typeof="email"
              onChange={(e) => {
                setProfessorEmail(e.target.value);
              }}
              value={professorEmail}
            />
          </FormControl>
          <FormControl>
            <FormLabel textAlign="left">Celular: </FormLabel>
            <Input
              placeholder="Digite o email do Professor"
              typeof="number"
              onChange={(e) => {
                setProfessorCelular(e.target.value);
              }}
              value={professorCelular}
            />
          </FormControl>
          <Button
            display={submitVisibility ? "block" : "none"}
            typeof="submit"
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

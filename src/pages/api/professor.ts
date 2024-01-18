import { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = createRouter<NextApiRequest, NextApiResponse>();

router.post(async (req, res) => {
  console.log("post");
  const { name, email, empresa } = req.body;
  console.log(req.body);

  try {
    // 1. Crie o Professor
    const postProfessorTab = await prisma.professor.create({
      data: {
        name: name,
        email: email,
      },
    });

    // 2. Se uma empresa for fornecida, associe o Professor a essa Empresa
    if (empresa && empresa.length > 0) {
      for (const empresaId of empresa) {
        await prisma.empresa.update({
          where: {
            id: empresaId,
          },
          data: {
            professorId: postProfessorTab.id,
          },
        });
      }
    }

    return res.status(200).json(postProfessorTab);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Falha no servidor" });
  }
});

router.get(async (req, res) => {
  try {
    const getProfessorTab = await prisma.professor.findMany();
    return res.json(getProfessorTab);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Ops, algo deu errado" });
  }
});

router.put(async (request, response) => {
  const { id, name, email, empresa } = request.body;
  try {
    const putProfessorTab = await prisma.professor.update({
      where: {
        id: id,
      },
      data: {
        name: name,
        email: email,
      },
    });
    // 2. Se uma empresa for fornecido, associe o Professor a essa Empresa
    if (empresa && empresa.length > 0) {
      for (const empresaId of empresa) {
        await prisma.empresa.update({
          where: {
            id: empresaId,
          },
          data: {
            professorId: putProfessorTab.id,
          },
        });
      }
    }
    return response.status(201).json(putProfessorTab);
  } catch (error) {
    console.error(error);
    return response
      .status(500)
      .json({ error: "Ops parece que algo deu errado" });
  }
});

router.delete(async (request, response) => {
  const { id } = request.params;

  const intID = parseInt(id);

  //SE ID NÃO EXISTIR RETORNE
  if (!intID) {
    return response.status(400).json("ID é mandatório");
  }

  const professorAlreadyExist = await prisma.professor.findUnique({
    where: { id: intID },
  });
  //SE O MODEL TODO NÃO EXISTIR RETORNE
  if (!professorAlreadyExist) {
    return response.status(404).json("Tabela [Professor] não existe");
  }

  const delProfessorTab = await prisma.professor.delete({
    where: {
      id: intID,
    },
  });

  return response.status(200).send(delProfessorTab);
});

export default router.handler({
  onError: (err = "Ops algo deu errado", req, res) => {
    console.error(err);
    res.status(500).end(err);
  },
});

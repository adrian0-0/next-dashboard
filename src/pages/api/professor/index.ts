import { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = createRouter<NextApiRequest, NextApiResponse>();

router.post(async (req, res) => {
  const { nome, email, celular } = req.body;

  try {
    // 1. Crie o Professor
    const postProfessorTab = await prisma.professor.create({
      data: {
        nome: nome,
        email: email,
        celular: celular,
      },
    });

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
  const { id, nome, email, celular } = request.body;
  try {
    const putProfessorTab = await prisma.professor.update({
      where: {
        id: id,
      },
      data: {
        nome: nome,
        email: email,
        celular: celular,
      },
    });
    return response.status(201).json(putProfessorTab);
  } catch (error) {
    console.error(error);
    return response
      .status(500)
      .json({ error: "Ops parece que algo deu errado" });
  }
});

export default router.handler({
  onError: (err = "Ops algo deu errado", req, res) => {
    console.error(err);
    res.status(500).end(err);
  },
});

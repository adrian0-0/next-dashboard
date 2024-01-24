// pages/api/professor/[id].js

import { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = createRouter<NextApiRequest, NextApiResponse>();

router.get(async (req, res) => {
  const { id } = req.query; // Obtendo a ID da URL
  try {
    // Use a ID para encontrar o Professor
    const professor = await prisma.professor.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!professor) {
      return res.status(404).json({ error: "Professor não encontrado" });
    }

    return res.status(200).json(professor);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Ops, algo deu errado" });
  }
});

router.put(async (req, res) => {
  const { id } = req.query; // Obtendo a ID da URL
  const { nome, email, celular } = req.body;

  try {
    const putProfessorTab = await prisma.professor.update({
      where: {
        id: Number(id),
      },
      data: {
        nome: nome,
        email: email,
        celular: celular,
      },
    });

    return res.status(201).json(putProfessorTab);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Ops, algo deu errado" });
  }
});

router.delete(async (req, res) => {
  const { id } = req.query; // Obtendo a ID da URL

  try {
    const professorToDelete = await prisma.professor.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!professorToDelete) {
      return res.status(404).json({ error: "Professor não encontrado" });
    }

    await prisma.professor.delete({
      where: {
        id: Number(id),
      },
    });
    return res
      .status(200)
      .json({ professorToDelete, message: "Professor excluído com sucesso" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Ops, algo deu errado" });
  }
});

export default router.handler({
  onError: (err = "Ops algo deu errado", req, res) => {
    console.error(err);
    res.status(500).end(err);
  },
});

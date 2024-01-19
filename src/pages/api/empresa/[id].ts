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
    const getEmpresa = await prisma.empresa.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!getEmpresa) {
      return res.status(404).json({ error: "Empresa não encontrado" });
    }

    return res.status(200).json(getEmpresa);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Ops, algo deu errado" });
  }
});

router.put(async (req, res) => {
  const { id } = req.query; // Obtendo a ID da URL
  const { name, programa, orientadorTecnico, monitor, professorId } = req.body;
  try {
    const putEmpresaTab = await prisma.empresa.update({
      where: {
        id: Number(id),
      },
      data: {
        name: name,
        programa: programa,
        orientadorTecnico: orientadorTecnico,
        monitor: monitor,
      },
    });

    return res.status(201).json(putEmpresaTab);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Ops, algo deu errado" });
  }
});

router.delete(async (req, res) => {
  const { id } = req.query; // Obtendo a ID da URL

  try {
    const empresaToDelete = await prisma.empresa.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!empresaToDelete) {
      return res.status(404).json({ error: "Empresa não encontrado" });
    }

    await prisma.empresa.delete({
      where: {
        id: Number(id),
      },
    });

    await prisma.empresa.updateMany({
      where: {
        professorId: Number(id),
      },
      data: {
        professorId: null,
      },
    });

    return res
      .status(200)
      .json({ empresaToDelete, message: "Empresa excluído com sucesso" });
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

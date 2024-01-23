// pages/api/professor/[id].js

import { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = createRouter<NextApiRequest, NextApiResponse>();

router.get(async (req, res) => {
  const { id } = req.query; // Obtendo a ID da URL
  try {
    // Use a ID para o programa de horas da empresa
    const getProgramHours = await prisma.programHours.findUnique({
      where: {
        empresaId: Number(id),
      },
    });

    if (!getProgramHours) {
      return res.status(404).json({ error: "Empresa não encontrado" });
    }

    return res.status(200).json(getProgramHours);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Ops, algo deu errado" });
  }
});

router.put(async (req, res) => {
  const { id } = req.query; // Obtendo a ID da URL
  const {
    horasPrevistasPan,
    horasRealizadasPan,
    horasPrevistasApr,
    horasRealizadasApr,
    horasPrevistasRE,
    horasRealizadasRE,
    horasPrevistasM1,
    horasRealizadasM1,
    horasPrevistasM2,
    horasRealizadasM2,
    horasPrevistasForum,
    horasRealizadasForum,
  } = req.body;
  try {
    const putProgramHours = await prisma.programHours.update({
      where: {
        empresaId: Number(id),
      },
      data: {
        horasPrevistasPan: horasPrevistasPan,
        horasRealizadasPan: horasRealizadasPan,
        horasPrevistasApr: horasPrevistasApr,
        horasRealizadasApr: horasRealizadasApr,
        horasPrevistasRE: horasPrevistasRE,
        horasRealizadasRE: horasRealizadasRE,
        horasPrevistasM1: horasPrevistasM1,
        horasRealizadasM1: horasRealizadasM1,
        horasPrevistasM2: horasPrevistasM2,
        horasRealizadasM2: horasRealizadasM2,
        horasPrevistasForum: horasPrevistasForum,
        horasRealizadasForum: horasRealizadasForum,
      },
    });

    return res.status(201).json(putProgramHours);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Ops, algo deu errado" });
  }
});

router.delete(async (req, res) => {
  const { id } = req.query; // Obtendo a ID da URL

  try {
    const programHoursToDelete = await prisma.programHours.findUnique({
      where: {
        empresaId: Number(id),
      },
    });

    if (!programHoursToDelete) {
      return res
        .status(404)
        .json({ error: "Programação de horas da empresa não encontrado" });
    }

    await prisma.programHours.delete({
      where: {
        empresaId: Number(id),
      },
    });

    return res
      .status(200)
      .json({
        programHoursToDelete,
        message: "Programação de horas da empresa excluído com sucesso",
      });
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

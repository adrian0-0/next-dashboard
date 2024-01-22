import { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = createRouter<NextApiRequest, NextApiResponse>();

router.post(async (req, res) => {
  const {
    empresaId,
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
    // 1. a Tabela de horas para a empresa
    const postProgramHours = await prisma.programHours.create({
      data: {
        empresaId: empresaId,
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
    return res.status(200).json(postProgramHours);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Falha no servidor" });
  }
});

router.get(async (req, res) => {
  try {
    const getProgramHours = await prisma.company.findMany();
    return res.json(getProgramHours);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Ops, algo deu errado" });
  }
});

router.put(async (req, res) => {
  const {
    id,
    nomeEmpresa,
    coordenadorTecnico,
    responsavelPorAcompanhar,
    programa,
    estagioPrograma,
  } = req.body;

  try {
    const putEmpresaTab = await prisma.company.update({
      where: {
        id: id,
      },
      data: {
        nomeEmpresa: nomeEmpresa,
        coordenadorTecnico: coordenadorTecnico,
        responsavelPorAcompanhar: responsavelPorAcompanhar,
        programa: programa,
        estagioPrograma: estagioPrograma,
      },
    });

    return res.status(201).json(putEmpresaTab);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Ops parece que algo deu errado" });
  }
});

export default router.handler({
  onError: (err = "Ops algo deu errado", req, res) => {
    console.error(err);
    res.status(500).end(err);
  },
});

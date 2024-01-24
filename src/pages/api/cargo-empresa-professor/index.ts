import { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = createRouter<NextApiRequest, NextApiResponse>();

router.post(async (req, res) => {
  const { cargo, professorId, empresaId } = req.body;

  try {
    // 1. Crie o relacionamento entre cargo, professor e empresa
    const postCargoProfessorEmpresa =
      await prisma.rolexCompanyxProfessor.create({
        data: {
          cargo: cargo,
          professorId: professorId,
          empresaId: empresaId,
        },
      });

    return res.status(200).json(postCargoProfessorEmpresa);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Falha no servidor" });
  }
});

router.get(async (req, res) => {
  try {
    const getCargoProfessorEmpresa =
      await prisma.rolexCompanyxProfessor.findMany();
    return res.json(getCargoProfessorEmpresa);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Ops, algo deu errado" });
  }
});

router.put(async (req, res) => {
  const { professorId_empresaId_cargo, data } = req.body;
  try {
    const putCargoProfessorEmpresa = await prisma.rolexCompanyxProfessor.update(
      {
        where: {
          professorId_empresaId_cargo: { ...professorId_empresaId_cargo },
        },
        data: { ...data },
      }
    );
    return res.status(201).json(putCargoProfessorEmpresa);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Ops parece que algo deu errado" });
  }
});

router.delete(async (req, res) => {
  const { professorId_empresaId_cargo } = req.body;
  try {
    const cargoProfessorEmpresaToDelete =
      await prisma.rolexCompanyxProfessor.findUnique({
        where: {
          professorId_empresaId_cargo: { ...professorId_empresaId_cargo },
        },
      });
    if (!cargoProfessorEmpresaToDelete) {
      return res.status(404).json({
        error: "Relacionamento entre professor, empresa e cargo não encontrado",
      });
    }
    await prisma.rolexCompanyxProfessor.delete({
      where: {
        professorId_empresaId_cargo: { ...professorId_empresaId_cargo },
      },
    });

    return res.status(200).json({
      cargoProfessorEmpresaToDelete,
      message:
        "Relacionamento entre professor, empresa e cargo excluído com sucesso",
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

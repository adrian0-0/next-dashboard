// pages/api/professor.js
import type { NextApiRequest, NextApiResponse } from "next";
import { createRouter, expressWrapper } from "next-connect";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const professor = createRouter<NextApiRequest, NextApiResponse>();

//R
professor.get("/professor", async (request, response) => {
  const getProfessorTab = await prisma.professor.findMany();
  return response.status(200).json(getProfessorTab);
});

export default professor;

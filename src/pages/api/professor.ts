import type { NextApiRequest, NextApiResponse } from "next/types";
import { createRouter } from "next-connect";
import { PrismaClient } from "@prisma/client";
import { createSearchParamsBailoutProxy } from "next/dist/client/components/searchparams-bailout-proxy";

const prisma = new PrismaClient();
const professor = createRouter<NextApiRequest, NextApiResponse>();

// Rota GET
// professor.get(async (req: NextApiRequest, res: NextApiResponse) => {
//   try {
//     const getProfessorTab = await prisma.professor.findMany();
//     return res.status(200).json(getProfessorTab);
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ error: "Ops, algo deu errado" });
//   }
// });

const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const getProfessorTab = await prisma.professor.findMany();
    return res.status(200).json(getProfessorTab);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Ops, algo deu errado" });
  }
};

export default GET;

// pages/api/professor.js

// import { NextApiRequest, NextApiResponse } from "next";

// type Data = {
//   name: string;
// };

// const GET = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
//   res.status(200).json({ name: "John Doe" });
// };

// export default GET;

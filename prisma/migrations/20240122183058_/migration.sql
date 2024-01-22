/*
  Warnings:

  - You are about to drop the column `coordenador` on the `empresas` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "empresas" DROP COLUMN "coordenador",
ADD COLUMN     "coordenadorTecnico" TEXT,
ADD COLUMN     "responsavelPorAcompanhar" TEXT;

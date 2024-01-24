/*
  Warnings:

  - You are about to drop the column `monitor` on the `empresas` table. All the data in the column will be lost.
  - You are about to drop the column `orientadorTecnico` on the `empresas` table. All the data in the column will be lost.
  - You are about to drop the column `professorId` on the `empresas` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "Cargos" AS ENUM ('orientadorTecnico', 'monitor');

-- DropForeignKey
ALTER TABLE "empresas" DROP CONSTRAINT "empresas_professorId_fkey";

-- AlterTable
ALTER TABLE "empresas" DROP COLUMN "monitor",
DROP COLUMN "orientadorTecnico",
DROP COLUMN "professorId";

-- CreateTable
CREATE TABLE "CargoxEmpresaxProfessor" (
    "id" SERIAL NOT NULL,
    "cargos" "Cargos" NOT NULL,

    CONSTRAINT "CargoxEmpresaxProfessor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CargoxEmpresaxProfessorToProfessor" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_CargoxEmpresaxProfessorToEmpresa" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CargoxEmpresaxProfessorToProfessor_AB_unique" ON "_CargoxEmpresaxProfessorToProfessor"("A", "B");

-- CreateIndex
CREATE INDEX "_CargoxEmpresaxProfessorToProfessor_B_index" ON "_CargoxEmpresaxProfessorToProfessor"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CargoxEmpresaxProfessorToEmpresa_AB_unique" ON "_CargoxEmpresaxProfessorToEmpresa"("A", "B");

-- CreateIndex
CREATE INDEX "_CargoxEmpresaxProfessorToEmpresa_B_index" ON "_CargoxEmpresaxProfessorToEmpresa"("B");

-- AddForeignKey
ALTER TABLE "_CargoxEmpresaxProfessorToProfessor" ADD CONSTRAINT "_CargoxEmpresaxProfessorToProfessor_A_fkey" FOREIGN KEY ("A") REFERENCES "CargoxEmpresaxProfessor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CargoxEmpresaxProfessorToProfessor" ADD CONSTRAINT "_CargoxEmpresaxProfessorToProfessor_B_fkey" FOREIGN KEY ("B") REFERENCES "professores"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CargoxEmpresaxProfessorToEmpresa" ADD CONSTRAINT "_CargoxEmpresaxProfessorToEmpresa_A_fkey" FOREIGN KEY ("A") REFERENCES "CargoxEmpresaxProfessor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CargoxEmpresaxProfessorToEmpresa" ADD CONSTRAINT "_CargoxEmpresaxProfessorToEmpresa_B_fkey" FOREIGN KEY ("B") REFERENCES "empresas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

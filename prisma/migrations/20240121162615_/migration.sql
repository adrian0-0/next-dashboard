/*
  Warnings:

  - You are about to drop the column `etapaDoPrograma` on the `empresas` table. All the data in the column will be lost.
  - You are about to drop the column `horasPrevistasApr` on the `empresas` table. All the data in the column will be lost.
  - You are about to drop the column `horasPrevistasForum` on the `empresas` table. All the data in the column will be lost.
  - You are about to drop the column `horasPrevistasM1` on the `empresas` table. All the data in the column will be lost.
  - You are about to drop the column `horasPrevistasM2` on the `empresas` table. All the data in the column will be lost.
  - You are about to drop the column `horasPrevistasPan` on the `empresas` table. All the data in the column will be lost.
  - You are about to drop the column `horasPrevistasRE` on the `empresas` table. All the data in the column will be lost.
  - You are about to drop the column `horasRealizadasApr` on the `empresas` table. All the data in the column will be lost.
  - You are about to drop the column `horasRealizadasForum` on the `empresas` table. All the data in the column will be lost.
  - You are about to drop the column `horasRealizadasM1` on the `empresas` table. All the data in the column will be lost.
  - You are about to drop the column `horasRealizadasM2` on the `empresas` table. All the data in the column will be lost.
  - You are about to drop the column `horasRealizadasPan` on the `empresas` table. All the data in the column will be lost.
  - You are about to drop the column `horasRealizadasRE` on the `empresas` table. All the data in the column will be lost.
  - You are about to drop the column `nomeResponsavel` on the `empresas` table. All the data in the column will be lost.
  - The `programa` column on the `empresas` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "empresas" DROP COLUMN "etapaDoPrograma",
DROP COLUMN "horasPrevistasApr",
DROP COLUMN "horasPrevistasForum",
DROP COLUMN "horasPrevistasM1",
DROP COLUMN "horasPrevistasM2",
DROP COLUMN "horasPrevistasPan",
DROP COLUMN "horasPrevistasRE",
DROP COLUMN "horasRealizadasApr",
DROP COLUMN "horasRealizadasForum",
DROP COLUMN "horasRealizadasM1",
DROP COLUMN "horasRealizadasM2",
DROP COLUMN "horasRealizadasPan",
DROP COLUMN "horasRealizadasRE",
DROP COLUMN "nomeResponsavel",
ADD COLUMN     "coordenador" TEXT,
ADD COLUMN     "estagioPrograma" TEXT,
DROP COLUMN "programa",
ADD COLUMN     "programa" TEXT;

-- DropEnum
DROP TYPE "CompanyProgram";

-- DropEnum
DROP TYPE "StageProgram";

-- CreateTable
CREATE TABLE "ProgramHours" (
    "companyID" INTEGER NOT NULL,
    "horasPrevistasPan" INTEGER NOT NULL DEFAULT 0,
    "horasRealizadasPan" INTEGER NOT NULL DEFAULT 0,
    "horasPrevistasApr" INTEGER NOT NULL DEFAULT 0,
    "horasRealizadasApr" INTEGER NOT NULL DEFAULT 0,
    "horasPrevistasRE" INTEGER NOT NULL DEFAULT 0,
    "horasRealizadasRE" INTEGER NOT NULL DEFAULT 0,
    "horasPrevistasM1" INTEGER NOT NULL DEFAULT 0,
    "horasRealizadasM1" INTEGER NOT NULL DEFAULT 0,
    "horasPrevistasM2" INTEGER NOT NULL DEFAULT 0,
    "horasRealizadasM2" INTEGER NOT NULL DEFAULT 0,
    "horasPrevistasForum" INTEGER NOT NULL DEFAULT 0,
    "horasRealizadasForum" INTEGER NOT NULL DEFAULT 0
);

-- CreateIndex
CREATE UNIQUE INDEX "ProgramHours_companyID_key" ON "ProgramHours"("companyID");

-- AddForeignKey
ALTER TABLE "ProgramHours" ADD CONSTRAINT "ProgramHours_companyID_fkey" FOREIGN KEY ("companyID") REFERENCES "empresas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

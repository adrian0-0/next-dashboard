/*
  Warnings:

  - You are about to drop the column `name` on the `empresas` table. All the data in the column will be lost.
  - The `programa` column on the `empresas` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `name` on the `professores` table. All the data in the column will be lost.
  - You are about to drop the `CargoxEmpresaxProfessor` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `nomeEmpresa` to the `empresas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome` to the `professores` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('orientadorTecnico', 'monitor');

-- CreateEnum
CREATE TYPE "CompanyProgram" AS ENUM ('pan', 'paex');

-- CreateEnum
CREATE TYPE "StageProgram" AS ENUM ('pan', 'apr', 'revisaoEstrategica', 'monitoria1', 'monitoria2', 'forum');

-- DropForeignKey
ALTER TABLE "CargoxEmpresaxProfessor" DROP CONSTRAINT "CargoxEmpresaxProfessor_empresaId_fkey";

-- DropForeignKey
ALTER TABLE "CargoxEmpresaxProfessor" DROP CONSTRAINT "CargoxEmpresaxProfessor_professorId_fkey";

-- AlterTable
ALTER TABLE "empresas" DROP COLUMN "name",
ADD COLUMN     "etapaDoPrograma" "StageProgram",
ADD COLUMN     "horasPrevistasApr" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "horasPrevistasForum" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "horasPrevistasM1" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "horasPrevistasM2" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "horasPrevistasPan" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "horasPrevistasRE" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "horasRealizadasApr" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "horasRealizadasForum" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "horasRealizadasM1" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "horasRealizadasM2" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "horasRealizadasPan" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "horasRealizadasRE" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "nomeEmpresa" TEXT NOT NULL,
ADD COLUMN     "nomeResponsavel" TEXT,
DROP COLUMN "programa",
ADD COLUMN     "programa" "CompanyProgram";

-- AlterTable
ALTER TABLE "professores" DROP COLUMN "name",
ADD COLUMN     "celular" TEXT,
ADD COLUMN     "nome" TEXT NOT NULL,
ALTER COLUMN "email" DROP NOT NULL;

-- DropTable
DROP TABLE "CargoxEmpresaxProfessor";

-- DropEnum
DROP TYPE "Cargos";

-- CreateTable
CREATE TABLE "RolexCompanyxProfessor" (
    "cargo" "Role" NOT NULL,
    "professorId" INTEGER NOT NULL,
    "empresaId" INTEGER NOT NULL,

    CONSTRAINT "RolexCompanyxProfessor_pkey" PRIMARY KEY ("professorId","empresaId","cargo")
);

-- AddForeignKey
ALTER TABLE "RolexCompanyxProfessor" ADD CONSTRAINT "RolexCompanyxProfessor_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "professores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RolexCompanyxProfessor" ADD CONSTRAINT "RolexCompanyxProfessor_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "empresas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

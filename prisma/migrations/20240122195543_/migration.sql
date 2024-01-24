/*
  Warnings:

  - A unique constraint covering the columns `[programHoursId]` on the table `empresas` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "RolexCompanyxProfessor" DROP CONSTRAINT "RolexCompanyxProfessor_empresaId_fkey";

-- DropForeignKey
ALTER TABLE "RolexCompanyxProfessor" DROP CONSTRAINT "RolexCompanyxProfessor_professorId_fkey";

-- DropForeignKey
ALTER TABLE "empresas" DROP CONSTRAINT "empresas_id_fkey";

-- AlterTable
ALTER TABLE "empresas" ADD COLUMN     "programHoursId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "empresas_programHoursId_key" ON "empresas"("programHoursId");

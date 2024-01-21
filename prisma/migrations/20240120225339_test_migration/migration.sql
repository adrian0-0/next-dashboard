/*
  Warnings:

  - You are about to drop the column `cargos` on the `empresas` table. All the data in the column will be lost.
  - You are about to drop the `_CargoxEmpresaxProfessorToProfessor` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[professorId]` on the table `CargoxEmpresaxProfessor` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `professorId` to the `CargoxEmpresaxProfessor` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_CargoxEmpresaxProfessorToProfessor" DROP CONSTRAINT "_CargoxEmpresaxProfessorToProfessor_A_fkey";

-- DropForeignKey
ALTER TABLE "_CargoxEmpresaxProfessorToProfessor" DROP CONSTRAINT "_CargoxEmpresaxProfessorToProfessor_B_fkey";

-- AlterTable
ALTER TABLE "CargoxEmpresaxProfessor" ADD COLUMN     "cargos" "Cargos",
ADD COLUMN     "professorId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "empresas" DROP COLUMN "cargos";

-- DropTable
DROP TABLE "_CargoxEmpresaxProfessorToProfessor";

-- CreateIndex
CREATE UNIQUE INDEX "CargoxEmpresaxProfessor_professorId_key" ON "CargoxEmpresaxProfessor"("professorId");

-- AddForeignKey
ALTER TABLE "CargoxEmpresaxProfessor" ADD CONSTRAINT "CargoxEmpresaxProfessor_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "professores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

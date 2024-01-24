/*
  Warnings:

  - The primary key for the `CargoxEmpresaxProfessor` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `cargos` on the `CargoxEmpresaxProfessor` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `CargoxEmpresaxProfessor` table. All the data in the column will be lost.
  - You are about to drop the `_CargoxEmpresaxProfessorToEmpresa` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `cargo` to the `CargoxEmpresaxProfessor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `empresaId` to the `CargoxEmpresaxProfessor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
ALTER TYPE "Cargos" ADD VALUE 'monitorOT';

-- DropForeignKey
ALTER TABLE "_CargoxEmpresaxProfessorToEmpresa" DROP CONSTRAINT "_CargoxEmpresaxProfessorToEmpresa_A_fkey";

-- DropForeignKey
ALTER TABLE "_CargoxEmpresaxProfessorToEmpresa" DROP CONSTRAINT "_CargoxEmpresaxProfessorToEmpresa_B_fkey";

-- DropIndex
DROP INDEX "CargoxEmpresaxProfessor_professorId_key";

-- AlterTable
ALTER TABLE "CargoxEmpresaxProfessor" DROP CONSTRAINT "CargoxEmpresaxProfessor_pkey",
DROP COLUMN "cargos",
DROP COLUMN "id",
ADD COLUMN     "cargo" "Cargos" NOT NULL,
ADD COLUMN     "empresaId" INTEGER NOT NULL,
ADD CONSTRAINT "CargoxEmpresaxProfessor_pkey" PRIMARY KEY ("professorId", "empresaId", "cargo");

-- DropTable
DROP TABLE "_CargoxEmpresaxProfessorToEmpresa";

-- AddForeignKey
ALTER TABLE "CargoxEmpresaxProfessor" ADD CONSTRAINT "CargoxEmpresaxProfessor_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "empresas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

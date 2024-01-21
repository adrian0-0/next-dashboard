/*
  Warnings:

  - You are about to drop the column `cargos` on the `CargoxEmpresaxProfessor` table. All the data in the column will be lost.
  - Added the required column `cargos` to the `empresas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CargoxEmpresaxProfessor" DROP COLUMN "cargos";

-- AlterTable
ALTER TABLE "empresas" ADD COLUMN     "cargos" "Cargos" NOT NULL;

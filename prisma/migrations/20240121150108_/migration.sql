/*
  Warnings:

  - The values [monitorOT] on the enum `Cargos` will be removed. If these variants are still used in the database, this will fail.
  - The primary key for the `CargoxEmpresaxProfessor` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `CargoxEmpresaxProfessor` table. All the data in the column will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Cargos_new" AS ENUM ('orientadorTecnico', 'monitor');
ALTER TABLE "CargoxEmpresaxProfessor" ALTER COLUMN "cargo" TYPE "Cargos_new" USING ("cargo"::text::"Cargos_new");
ALTER TYPE "Cargos" RENAME TO "Cargos_old";
ALTER TYPE "Cargos_new" RENAME TO "Cargos";
DROP TYPE "Cargos_old";
COMMIT;

-- AlterTable
ALTER TABLE "CargoxEmpresaxProfessor" DROP CONSTRAINT "CargoxEmpresaxProfessor_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "CargoxEmpresaxProfessor_pkey" PRIMARY KEY ("professorId", "empresaId", "cargo");

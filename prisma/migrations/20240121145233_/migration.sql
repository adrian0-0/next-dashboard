/*
  Warnings:

  - The primary key for the `CargoxEmpresaxProfessor` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "CargoxEmpresaxProfessor" DROP CONSTRAINT "CargoxEmpresaxProfessor_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "CargoxEmpresaxProfessor_pkey" PRIMARY KEY ("id");

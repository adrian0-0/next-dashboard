-- DropForeignKey
ALTER TABLE "ProgramHours" DROP CONSTRAINT "ProgramHours_companyID_fkey";

-- DropForeignKey
ALTER TABLE "RolexCompanyxProfessor" DROP CONSTRAINT "RolexCompanyxProfessor_empresaId_fkey";

-- DropForeignKey
ALTER TABLE "RolexCompanyxProfessor" DROP CONSTRAINT "RolexCompanyxProfessor_professorId_fkey";

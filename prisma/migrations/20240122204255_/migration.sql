-- DropForeignKey
ALTER TABLE "RolexCompanyxProfessor" DROP CONSTRAINT "RolexCompanyxProfessor_empresaId_fkey";

-- DropForeignKey
ALTER TABLE "RolexCompanyxProfessor" DROP CONSTRAINT "RolexCompanyxProfessor_professorId_fkey";

-- AddForeignKey
ALTER TABLE "RolexCompanyxProfessor" ADD CONSTRAINT "RolexCompanyxProfessor_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "professores"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RolexCompanyxProfessor" ADD CONSTRAINT "RolexCompanyxProfessor_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "empresas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

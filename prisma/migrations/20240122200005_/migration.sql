-- AddForeignKey
ALTER TABLE "empresas" ADD CONSTRAINT "empresas_programHoursId_fkey" FOREIGN KEY ("programHoursId") REFERENCES "ProgramHours"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RolexCompanyxProfessor" ADD CONSTRAINT "RolexCompanyxProfessor_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "professores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RolexCompanyxProfessor" ADD CONSTRAINT "RolexCompanyxProfessor_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "empresas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

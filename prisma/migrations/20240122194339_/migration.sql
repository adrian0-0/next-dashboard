/*
  Warnings:

  - You are about to drop the column `programHoursId` on the `empresas` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "empresas_programHoursId_key";

-- AlterTable
ALTER TABLE "empresas" DROP COLUMN "programHoursId";

-- AddForeignKey
ALTER TABLE "empresas" ADD CONSTRAINT "empresas_id_fkey" FOREIGN KEY ("id") REFERENCES "ProgramHours"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RolexCompanyxProfessor" ADD CONSTRAINT "RolexCompanyxProfessor_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "professores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RolexCompanyxProfessor" ADD CONSTRAINT "RolexCompanyxProfessor_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "empresas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

/*
  Warnings:

  - You are about to drop the column `programHoursId` on the `empresas` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[empresaId]` on the table `ProgramHours` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `empresaId` to the `ProgramHours` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "empresas" DROP CONSTRAINT "empresas_programHoursId_fkey";

-- DropIndex
DROP INDEX "empresas_programHoursId_key";

-- AlterTable
ALTER TABLE "ProgramHours" ADD COLUMN     "empresaId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "empresas" DROP COLUMN "programHoursId";

-- CreateIndex
CREATE UNIQUE INDEX "ProgramHours_empresaId_key" ON "ProgramHours"("empresaId");

-- AddForeignKey
ALTER TABLE "ProgramHours" ADD CONSTRAINT "ProgramHours_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "empresas"("id") ON DELETE CASCADE ON UPDATE CASCADE;
